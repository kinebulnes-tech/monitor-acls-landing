const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const ALLOWED_ORIGIN = 'https://monitoracls.com'
const DEV_ORIGIN = 'http://localhost:5173'

const FIELD_MAX: Record<string, number> = {
  name: 120,
  institution: 200,
  email: 254,
  phone: 20,
  institutionType: 60,
  message: 2000,
}

declare const process: {
  env: Record<string, string | undefined>
}

type ContactPayload = {
  name?: unknown
  institution?: unknown
  email?: unknown
  phone?: unknown
  institutionType?: unknown
  message?: unknown
  website?: unknown
}

function clean(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function truncate(value: string, max: number) {
  return value.length > max ? value.slice(0, max) : value
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function json(res: any, status: number, payload: Record<string, unknown>) {
  res.status(status).json(payload)
}

export default async function handler(req: any, res: any) {
  const origin = req.headers['origin'] || ''
  const allowedOrigin = origin === DEV_ORIGIN ? DEV_ORIGIN : ALLOWED_ORIGIN
  res.setHeader('Access-Control-Allow-Origin', allowedOrigin)
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Vary', 'Origin')

  if (req.method === 'OPTIONS') {
    return res.status(204).end()
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS')
    return json(res, 405, { ok: false, error: 'Method not allowed' })
  }

  const resendApiKey = process.env.RESEND_API_KEY
  const emailTo = process.env.EMAIL_TO
  const emailFrom = process.env.EMAIL_FROM

  if (!resendApiKey || !emailFrom || !emailTo) {
    return json(res, 500, {
      ok: false,
      error: 'Email service is not configured. Required: RESEND_API_KEY, EMAIL_FROM and EMAIL_TO.',
    })
  }

  let body: ContactPayload
  try {
    body = (typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {}) as ContactPayload
  } catch {
    return json(res, 400, { ok: false, error: 'Invalid JSON payload.' })
  }

  // Honeypot: bots fill this hidden field, humans leave it empty
  if (clean(body.website)) {
    return json(res, 200, { ok: true })
  }

  const name = truncate(clean(body.name), FIELD_MAX.name)
  const institution = truncate(clean(body.institution), FIELD_MAX.institution)
  const email = truncate(clean(body.email), FIELD_MAX.email)
  const phone = truncate(clean(body.phone), FIELD_MAX.phone)
  const institutionType = truncate(clean(body.institutionType), FIELD_MAX.institutionType)
  const message = truncate(clean(body.message), FIELD_MAX.message)

  if (!name || !institution || !email || !phone || !institutionType) {
    return json(res, 400, { ok: false, error: 'Missing required fields.' })
  }

  if (!emailPattern.test(email)) {
    return json(res, 400, { ok: false, error: 'Invalid email address.' })
  }

  const safeSubject = `Solicitud demo Monitor ACLS - ${institution}`
  const html = `
    <h2>Nueva solicitud de demo Monitor ACLS</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
    <p><strong>Institución:</strong> ${escapeHtml(institution)}</p>
    <p><strong>Correo:</strong> ${escapeHtml(email)}</p>
    <p><strong>Teléfono:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Tipo de institución:</strong> ${escapeHtml(institutionType)}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${escapeHtml(message || 'Sin mensaje adicional.')}</p>
  `

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: emailFrom,
      to: [emailTo],
      reply_to: email,
      subject: safeSubject,
      html,
    }),
  })

  if (!response.ok) {
    return json(res, 502, { ok: false, error: 'No se pudo enviar la solicitud. Intenta por WhatsApp o correo directo.' })
  }

  return json(res, 200, { ok: true })
}
