import { useSearchParams, Link } from 'react-router-dom'

function IconCheck() {
  return (
    <svg
      className="h-14 w-14 text-med-ecg"
      viewBox="0 0 56 56"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="28" cy="28" r="26" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      <circle cx="28" cy="28" r="20" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <circle cx="28" cy="28" r="14" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M20 28.5l5.5 5.5 10.5-11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Step({ number, text }: { number: string; text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-med-ecg/40 bg-med-ecg/10 text-[10px] font-extrabold text-med-ecg">
        {number}
      </span>
      <span className="text-sm leading-relaxed text-med-soft/90">{text}</span>
    </li>
  )
}

function parsePlanLabel(ref: string): string {
  const parts = ref.split('-')
  if (parts.length < 2) return ''
  const plan = parts[0] === 'individual' ? 'Individual' : parts[0] === 'institutional' ? 'Institucional' : ''
  const cycle = parts[1] === 'monthly' ? 'Mensual' : parts[1] === 'annual' ? 'Anual' : ''
  if (!plan) return ''
  return cycle ? `${plan} · ${cycle}` : plan
}

export function PaymentSuccess() {
  const [params] = useSearchParams()
  const externalRef = params.get('external_reference') ?? ''
  const paymentId = params.get('payment_id') ?? params.get('collection_id') ?? ''
  const planLabel = parsePlanLabel(externalRef)

  return (
    <div className="min-h-screen bg-med-bg text-med-text">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-med-bg/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-3 px-5 md:px-8">
          <Link
            to="/"
            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-med-muted transition hover:text-med-soft"
          >
            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Monitor ACLS
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-lg px-5 py-12 md:px-8 md:py-20">

        {/* Status icon + heading */}
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="mb-5 flex items-center justify-center">
            <IconCheck />
          </div>
          <h1 className="text-2xl font-extrabold text-med-ecg md:text-3xl">
            Pago recibido
          </h1>
          <p className="mt-2 text-sm text-med-soft/90">
            {planLabel
              ? `Plan ${planLabel} — tu acceso está siendo activado.`
              : 'Tu pago fue procesado correctamente.'}
          </p>
          {paymentId && (
            <p className="mt-1 font-mono text-[11px] text-med-muted">
              Ref. {paymentId}
            </p>
          )}
        </div>

        {/* Decorative hairline */}
        <div className="clinical-hairline mb-7 h-px w-full" aria-hidden="true" />

        {/* Next steps */}
        <div className="mb-5 rounded-2xl border border-med-ecg/20 bg-med-ecg/5 p-5">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-med-ecg/70">
            Próximos pasos
          </p>
          <ol className="space-y-3">
            <Step
              number="1"
              text="Recibirás un correo de confirmación de Mercado Pago con el comprobante del pago."
            />
            <Step
              number="2"
              text="Nuestro equipo habilitará tu acceso al simulador en las próximas horas hábiles."
            />
            <Step
              number="3"
              text="Te enviaremos tus credenciales de acceso al correo registrado en la compra."
            />
            <Step
              number="4"
              text="Si no recibes el acceso en 24 h, escríbenos directamente y lo resolvemos."
            />
          </ol>
        </div>

        {/* Activation note — prepared for future automatic license activation */}
        <div className="mb-7 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs text-med-muted">
          <span className="font-bold text-med-soft/80">Activación automática</span>
          {' — '}
          Estamos implementando activación instantánea de licencias. Por ahora, el equipo la activa manualmente dentro del horario laboral (lun–vie, 9–18 h Chile).
        </div>

        {/* CTAs */}
        <div className="space-y-2">
          <Link
            to="/"
            className="block w-full rounded-xl border border-med-ecg/50 bg-med-ecg/20 px-4 py-4 text-center text-sm font-extrabold uppercase tracking-wider text-med-ecg transition hover:bg-med-ecg/30 active:scale-[0.98]"
          >
            Volver al inicio
          </Link>
          <a
            href="mailto:contacto@monitoracls.com"
            className="block w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-xs font-extrabold uppercase tracking-wider text-med-muted transition hover:text-med-soft"
          >
            Contactar soporte
          </a>
        </div>

        <p className="mt-6 text-center text-xs text-med-muted">
          contacto@monitoracls.com &mdash; respondemos en horas hábiles
        </p>
      </main>
    </div>
  )
}
