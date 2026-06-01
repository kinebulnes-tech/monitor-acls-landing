const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const ALLOWED_ORIGIN = 'https://monitoracls.com'
const DEV_ORIGIN = 'http://localhost:5173'

const MAX = {
  name: 120,
  email: 254,
  plan: 30,
  institution: 200,
  reference: 200,
  comment: 1000,
} as const

declare const process: {
  env: Record<string, string | undefined>
}

type NotifyPayload = {
  name?: unknown
  email?: unknown
  plan?: unknown
  institution?: unknown
  reference?: unknown
  comment?: unknown
  website?: unknown
}

interface StatusResult {
  json: (body: unknown) => void
  end: () => void
}

interface VercelRequest {
  method?: string
  headers: Record<string, string | string[] | undefined>
  body: unknown
}

interface VercelResponse {
  status: (code: number) => StatusResult
  setHeader: (key: string, value: string) => void
}

function sanitize(v: unknown, max: number): string {
  return typeof v === 'string' ? v.trim().slice(0, max) : ''
}

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

async function resendEmail(
  key: string,
  from: string,
  to: string[],
  subject: string,
  html: string,
  replyTo?: string,
): Promise<boolean> {
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from, to, reply_to: replyTo, subject, html }),
  })
  return r.ok
}

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  const origin = (req.headers['origin'] as string | undefined) ?? ''
  const allowedOrigin = origin === DEV_ORIGIN ? DEV_ORIGIN : ALLOWED_ORIGIN
  res.setHeader('Access-Control-Allow-Origin', allowedOrigin)
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Vary', 'Origin')

  if (req.method === 'OPTIONS') {
    res.status(204).end()
    return
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS')
    res.status(405).json({ ok: false, error: 'Method not allowed' })
    return
  }

  const apiKey = process.env.RESEND_API_KEY
  const emailTo = process.env.EMAIL_TO
  const emailFrom = process.env.EMAIL_FROM

  if (!apiKey || !emailTo || !emailFrom) {
    res.status(500).json({ ok: false, error: 'Servicio de correo no configurado.' })
    return
  }

  let body: NotifyPayload
  try {
    body = (
      typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body ?? {})
    ) as NotifyPayload
  } catch {
    res.status(400).json({ ok: false, error: 'Payload inválido.' })
    return
  }

  // Honeypot
  if (sanitize(body.website, 10)) {
    res.status(200).json({ ok: true })
    return
  }

  const name = sanitize(body.name, MAX.name)
  const email = sanitize(body.email, MAX.email)
  const plan = sanitize(body.plan, MAX.plan)
  const institution = sanitize(body.institution, MAX.institution)
  const reference = sanitize(body.reference, MAX.reference)
  const comment = sanitize(body.comment, MAX.comment)

  if (name.length < 3) {
    res.status(400).json({ ok: false, error: 'Nombre debe tener al menos 3 caracteres.' })
    return
  }
  if (!EMAIL_RE.test(email)) {
    res.status(400).json({ ok: false, error: 'Correo electrónico inválido.' })
    return
  }
  if (plan !== 'individual' && plan !== 'institutional') {
    res.status(400).json({ ok: false, error: 'Plan inválido.' })
    return
  }
  if (plan === 'institutional' && institution.length < 2) {
    res.status(400).json({ ok: false, error: 'Institución requerida para el plan empresarial.' })
    return
  }
  if (reference.length < 3) {
    res.status(400).json({ ok: false, error: 'Referencia de pago requerida.' })
    return
  }

  const planLabel = plan === 'individual' ? 'Individual' : 'Empresas / Institucional'
  const now = new Date().toLocaleString('es-CL', { timeZone: 'America/Santiago' })

  const adminHtml = `
    <h2>Nueva solicitud de activación — Monitor ACLS</h2>
    <p><strong>Origen:</strong> Formulario post-pago</p>
    <p><strong>Fecha/hora (Chile):</strong> ${esc(now)}</p>
    <hr>
    <p><strong>Nombre:</strong> ${esc(name)}</p>
    <p><strong>Correo:</strong> ${esc(email)}</p>
    <p><strong>Plan:</strong> ${esc(planLabel)}</p>
    <p><strong>Institución:</strong> ${institution ? esc(institution) : '—'}</p>
    <p><strong>Referencia / N° operación Flow:</strong> ${esc(reference)}</p>
    <p><strong>Comentario:</strong> ${comment ? esc(comment) : '—'}</p>
    <hr>
    <p style="color:#cc0000;"><strong>⚠ Verificar pago en Flow antes de activar la licencia.</strong></p>
  `

  const sent = await resendEmail(
    apiKey,
    emailFrom,
    [emailTo],
    `Activación licencia Monitor ACLS — ${esc(planLabel)}`,
    adminHtml,
    email,
  )

  if (!sent) {
    res.status(502).json({
      ok: false,
      error: 'No se pudo enviar. Intenta por WhatsApp o escríbenos directamente.',
    })
    return
  }

  // Confirmación al cliente — best-effort, no bloquea respuesta
  const clientHtml = `
    <p>Hola ${esc(name)},</p>
    <p>Recibimos tu solicitud de activación para el <strong>Plan ${esc(planLabel)}</strong>.</p>
    <p>Verificaremos tu pago en Flow y activaremos tu licencia manualmente dentro del horario laboral (lun–vie, 9–18 h, hora Chile).</p>
    <p>¿Dudas? Responde este correo o escríbenos a <a href="mailto:contacto@monitoracls.com">contacto@monitoracls.com</a>.</p>
    <p>— Equipo Monitor ACLS</p>
  `
  await resendEmail(
    apiKey,
    emailFrom,
    [email],
    'Solicitud de activación recibida — Monitor ACLS',
    clientHtml,
    emailTo,
  ).catch(() => undefined)

  res.status(200).json({ ok: true })
}
