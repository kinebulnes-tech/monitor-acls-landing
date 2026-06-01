declare const process: {
  env: Record<string, string | undefined>
}

type Plan = 'individual' | 'institutional'
type BillingCycle = 'monthly' | 'annual'

type PlanConfig = {
  title: string
  description: string
  price: number
  currency: string
}

type RequestBody = {
  plan?: unknown
  billingCycle?: unknown
}

type MpPreferenceResult = {
  id: string
  init_point: string
}

// Minimal interfaces for Vercel serverless req/res — avoids `any` without @vercel/node
interface VercelReq {
  method?: string
  headers: Record<string, string | string[] | undefined>
  body?: unknown
}

interface VercelRes {
  status(code: number): VercelRes
  json(data: unknown): void
  setHeader(key: string, value: string): void
  end(): void
}

const ALLOWED_ORIGIN = 'https://monitoracls.com'
const DEV_ORIGIN = 'http://localhost:5173'

const VALID_PLANS: ReadonlyArray<Plan> = ['individual', 'institutional']
const VALID_CYCLES: ReadonlyArray<BillingCycle> = ['monthly', 'annual']

// Prices are authoritative here — never trust client-sent prices
const PLANS: Record<Plan, Record<BillingCycle, PlanConfig>> = {
  individual: {
    monthly: {
      title: 'Monitor ACLS – Plan Individual Mensual',
      description: 'Acceso mensual completo al simulador ACLS/BLS',
      price: 24.90,
      currency: 'USD',
    },
    annual: {
      title: 'Monitor ACLS – Plan Individual Anual',
      description: 'Acceso anual completo al simulador ACLS/BLS',
      price: 199.00,
      currency: 'USD',
    },
  },
  institutional: {
    monthly: {
      title: 'Monitor ACLS – Plan Institucional Mensual',
      description: 'Acceso mensual para institución (2 licencias incluidas)',
      price: 50.00,
      currency: 'USD',
    },
    annual: {
      title: 'Monitor ACLS – Plan Institucional Anual',
      description: 'Acceso anual para institución (2 licencias incluidas)',
      price: 500.00,
      currency: 'USD',
    },
  },
}

function isValidPlan(value: unknown): value is Plan {
  return typeof value === 'string' && (VALID_PLANS as string[]).includes(value)
}

function isValidCycle(value: unknown): value is BillingCycle {
  return typeof value === 'string' && (VALID_CYCLES as string[]).includes(value)
}

function respond(res: VercelRes, status: number, payload: Record<string, unknown>): void {
  res.status(status).json(payload)
}

export default async function handler(req: VercelReq, res: VercelRes) {
  const origin = String(req.headers['origin'] ?? '')
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
    return respond(res, 405, { ok: false, error: 'Method not allowed' })
  }

  const accessToken = process.env.MP_ACCESS_TOKEN
  const siteUrl = process.env.VITE_PUBLIC_SITE_URL?.replace(/\/$/, '')

  if (!accessToken) {
    console.error('[create-preference] MP_ACCESS_TOKEN is not set')
    return respond(res, 500, { ok: false, error: 'Payment service is not configured.' })
  }

  if (!siteUrl) {
    console.error('[create-preference] VITE_PUBLIC_SITE_URL is not set')
    return respond(res, 500, { ok: false, error: 'Site URL is not configured.' })
  }

  let body: RequestBody
  try {
    body = (
      typeof req.body === 'string'
        ? JSON.parse(req.body || '{}')
        : (req.body ?? {})
    ) as RequestBody
  } catch {
    return respond(res, 400, { ok: false, error: 'Invalid JSON payload.' })
  }

  if (!isValidPlan(body.plan)) {
    return respond(res, 400, { ok: false, error: 'Invalid plan. Expected: individual | institutional' })
  }

  if (!isValidCycle(body.billingCycle)) {
    return respond(res, 400, { ok: false, error: 'Invalid billingCycle. Expected: monthly | annual' })
  }

  const config = PLANS[body.plan][body.billingCycle]
  const externalRef = `${body.plan}-${body.billingCycle}-${Date.now()}`

  const preference = {
    items: [
      {
        id: `${body.plan}-${body.billingCycle}`,
        title: config.title,
        description: config.description,
        quantity: 1,
        unit_price: config.price,
        currency_id: config.currency,
      },
    ],
    back_urls: {
      success: `${siteUrl}/pago/exitoso`,
      failure: `${siteUrl}/pago/fallido`,
      pending: `${siteUrl}/pago/pendiente`,
    },
    auto_return: 'approved',
    external_reference: externalRef,
    // Webhook endpoint prepared for future IPN integration (Phase 5)
    notification_url: `${siteUrl}/api/webhook-mercadopago`,
    metadata: {
      plan: body.plan,
      billing_cycle: body.billingCycle,
    },
  }

  const mpResponse = await fetch('https://api.mercadopago.com/checkout/preferences', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(preference),
  }).catch(() => null)

  if (!mpResponse) {
    console.error('[create-preference] Network error reaching MP API')
    return respond(res, 502, {
      ok: false,
      error: 'No se pudo conectar con el servicio de pago. Intenta nuevamente.',
    })
  }

  if (!mpResponse.ok) {
    const errText = await mpResponse.text().catch(() => '')
    console.error('[create-preference] MP API error', mpResponse.status, errText.slice(0, 200))
    return respond(res, 502, {
      ok: false,
      error: 'No se pudo crear la preferencia de pago. Intenta nuevamente.',
    })
  }

  const data = (await mpResponse.json().catch(() => null)) as MpPreferenceResult | null

  if (!data?.init_point) {
    console.error('[create-preference] MP response missing init_point')
    return respond(res, 502, { ok: false, error: 'Respuesta inválida del servicio de pago.' })
  }

  return respond(res, 200, {
    ok: true,
    init_point: data.init_point,
    preference_id: data.id,
  })
}
