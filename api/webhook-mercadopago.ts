// Mercado Pago Webhook — IPN handler stub
//
// This endpoint is registered as `notification_url` in every preference created
// by /api/create-preference. MP calls it on every payment status change.
//
// Current state: STUB — acknowledges receipt, logs safely, takes no business action.
//
// Production implementation phases:
//   Phase A — Signature validation (MP_WEBHOOK_SECRET)
//   Phase B — Payment status lookup via GET /v1/payments/:id
//   Phase C — License activation (database write + email to user)
//   Phase D — Audit log (append-only record of all IPN events)

declare const process: {
  env: Record<string, string | undefined>
}

// Shape of the MP webhook event body.
// Only `type` and `data.id` are used today.
type MpWebhookEvent = {
  action?: string
  api_version?: string
  data?: { id?: string | number }
  date_created?: string
  id?: string | number
  live_mode?: boolean
  type?: string
  user_id?: string | number
}

// Parsed parts of the `x-signature` header.
// Format: "ts=1688655421,v1=abc123..."
type SignatureParts = {
  ts: string
  v1: string
}

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

// Returns the first string value from a header that may be multi-value.
function headerString(value: string | string[] | undefined): string {
  if (!value) return ''
  return Array.isArray(value) ? (value[0] ?? '') : value
}

// Parses "ts=...,v1=..." into { ts, v1 }.
// Returns null if the format is not recognised.
function parseSignatureHeader(raw: string): SignatureParts | null {
  const ts = raw.match(/ts=([^,]+)/)?.[1]
  const v1 = raw.match(/v1=([^,]+)/)?.[1]
  if (!ts || !v1) return null
  return { ts, v1 }
}

function respond(res: VercelRes, status: number, payload: Record<string, unknown>): void {
  res.status(status).json(payload)
}

export default async function handler(req: VercelReq, res: VercelRes) {
  // MP does not send an Origin header from their servers — no CORS needed here.
  // Do not expose this endpoint to browser CORS at all.

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return respond(res, 405, { ok: false, error: 'Method not allowed' })
  }

  // -------------------------------------------------------------------------
  // PHASE A (not yet active): Signature validation
  //
  // Required env: MP_WEBHOOK_SECRET
  //   → Obtained from MP dashboard: Configuración > Notificaciones > Secret key
  //   → Separate from MP_ACCESS_TOKEN
  //
  // Algorithm (HMAC-SHA256):
  //   1. Parse x-signature header → { ts, v1 }
  //   2. Parse x-request-id header
  //   3. Build signed message:
  //        `id:${event.data?.id};request-date:${ts};`
  //   4. Compute: HMAC-SHA256(message, MP_WEBHOOK_SECRET)
  //   5. Timing-safe compare result with v1
  //      (use crypto.timingSafeEqual to prevent timing attacks)
  //   6. Reject with 401 if signature does not match
  //
  // Implementation note for Node 18+:
  //   import { createHmac, timingSafeEqual } from 'node:crypto'
  //   const expected = createHmac('sha256', secret).update(message).digest('hex')
  //   const safe = timingSafeEqual(Buffer.from(expected), Buffer.from(v1))
  // -------------------------------------------------------------------------
  const rawSignature = headerString(req.headers['x-signature'])
  const requestId = headerString(req.headers['x-request-id'])
  const signatureParts = parseSignatureHeader(rawSignature)

  if (!signatureParts) {
    // MP always sends x-signature. Missing = likely not a real MP request.
    // Log and continue — do not reject yet (signature validation not active).
    console.warn('[webhook-mp] Missing or malformed x-signature — validation not active')
  }

  // -------------------------------------------------------------------------
  // Parse body
  // -------------------------------------------------------------------------
  let event: MpWebhookEvent = {}
  try {
    event = (
      typeof req.body === 'string'
        ? JSON.parse(req.body || '{}')
        : (req.body ?? {})
    ) as MpWebhookEvent
  } catch {
    // Malformed payload — acknowledge silently to prevent MP retries on parse errors
    console.warn('[webhook-mp] Could not parse request body')
    return respond(res, 200, { ok: true })
  }

  // Safe log: only type, action and data.id — never the full payload
  const safeDataId = String(event.data?.id ?? '')
  const safeType = String(event.type ?? 'unknown')
  const safeAction = String(event.action ?? 'unknown')
  console.log('[webhook-mp] event received', {
    type: safeType,
    action: safeAction,
    dataId: safeDataId.slice(0, 24),  // payment IDs are typically < 20 chars
    requestId: requestId.slice(0, 36),
  })

  // -------------------------------------------------------------------------
  // Event dispatch — stubbed
  //
  // PHASE B (not yet active): Payment status lookup
  //   GET https://api.mercadopago.com/v1/payments/${safeDataId}
  //   Authorization: Bearer MP_ACCESS_TOKEN
  //   → Retrieve authoritative status (approved / rejected / pending)
  //   → Never trust the payload status alone — always verify via API
  //
  // PHASE C (not yet active): License activation
  //   Only trigger when: type === 'payment' && payment.status === 'approved'
  //   Actions:
  //     → Write license record to database
  //     → Send credentials email to buyer
  //     → Mark external_reference as fulfilled (idempotency check)
  //
  // PHASE D (not yet active): Audit log
  //   Append-only record: { event_id, type, action, data_id, received_at, status }
  // -------------------------------------------------------------------------

  switch (safeType) {
    case 'payment':
      // Placeholder — will trigger Phase B → C → D
      break

    case 'merchant_order':
      // Informational — no action needed at this stage
      break

    default:
      // Unknown event type — log and ignore
      console.log('[webhook-mp] unhandled event type:', safeType)
  }

  // Return 200 immediately.
  // MP retries up to 8 times with exponential backoff on any non-2xx response.
  // Acknowledge receipt regardless of whether we acted on the event.
  return respond(res, 200, { ok: true })
}
