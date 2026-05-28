const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

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
}

function clean(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
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
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
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
  const name = clean(body.name)
  const institution = clean(body.institution)
  const email = clean(body.email)
  const phone = clean(body.phone)
  const institutionType = clean(body.institutionType)
  const message = clean(body.message)

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
    const errorText = await response.text()
    return json(res, 502, {
      ok: false,
      error: 'Email provider rejected the request.',
      details: errorText.slice(0, 400),
    })
  }

  return json(res, 200, { ok: true })
}
