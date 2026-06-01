import { useSearchParams, Link } from 'react-router-dom'

function IconAlert() {
  return (
    <svg
      className="h-14 w-14 text-med-red"
      viewBox="0 0 56 56"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="28" cy="28" r="26" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      <circle cx="28" cy="28" r="20" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <circle cx="28" cy="28" r="14" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M28 20v9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="28" cy="34" r="1.2" fill="currentColor" />
    </svg>
  )
}

function Suggestion({ icon, text }: { icon: string; text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 text-base leading-none" aria-hidden="true">{icon}</span>
      <span className="text-sm leading-relaxed text-med-soft/90">{text}</span>
    </li>
  )
}

function parsePlanFromRef(ref: string): 'individual' | 'institutional' {
  return ref.startsWith('institutional') ? 'institutional' : 'individual'
}

export function PaymentFailure() {
  const [params] = useSearchParams()
  const externalRef = params.get('external_reference') ?? ''
  const retryPlan = parsePlanFromRef(externalRef)

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
            <IconAlert />
          </div>
          <h1 className="text-2xl font-extrabold text-med-red md:text-3xl">
            El pago no se completó
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-med-soft/90">
            No se realizó ningún cargo. Esto puede deberse a una validación bancaria temporal o a que el proceso fue interrumpido.
          </p>
        </div>

        {/* Decorative hairline */}
        <div
          className="mb-7 h-px w-full"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(255,75,92,0.45), rgba(255,75,92,0.22), transparent)',
          }}
          aria-hidden="true"
        />

        {/* Suggestions */}
        <div className="mb-5 rounded-2xl border border-med-red/20 bg-med-red/5 p-5">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-med-red/70">
            Qué puedes hacer
          </p>
          <ul className="space-y-3">
            <Suggestion
              icon="↩"
              text="Intenta el pago nuevamente — los rechazos temporales se resuelven en un segundo intento."
            />
            <Suggestion
              icon="💳"
              text="Verifica que tu tarjeta o cuenta tenga fondos disponibles y esté habilitada para compras internacionales."
            />
            <Suggestion
              icon="🏦"
              text="Algunos bancos bloquean el primer cobro como medida de seguridad. Puedes aprobar la transacción desde tu app bancaria."
            />
            <Suggestion
              icon="✉️"
              text="Si el problema persiste, contáctanos y te ayudamos a completar la compra por otra vía."
            />
          </ul>
        </div>

        {/* Reassurance note */}
        <div className="mb-7 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs text-med-muted">
          <span className="font-bold text-med-soft/80">Sin cargos pendientes</span>
          {' — '}
          Mercado Pago no realizó ningún débito. Si ves un movimiento en tu estado de cuenta, desaparecerá automáticamente en 1–3 días hábiles.
        </div>

        {/* CTAs */}
        <div className="space-y-2">
          <Link
            to={`/checkout/${retryPlan}`}
            className="block w-full rounded-xl border border-med-red/50 bg-med-red/20 px-4 py-4 text-center text-sm font-extrabold uppercase tracking-wider text-med-red transition hover:bg-med-red/30 active:scale-[0.98]"
          >
            Reintentar pago
          </Link>
          <a
            href="mailto:contacto@monitoracls.com"
            className="block w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-xs font-extrabold uppercase tracking-wider text-med-muted transition hover:text-med-soft"
          >
            Contactar soporte
          </a>
          <Link
            to="/"
            className="block w-full rounded-xl border border-white/[0.06] px-4 py-2.5 text-center text-xs font-extrabold uppercase tracking-wider text-med-muted/70 transition hover:text-med-muted"
          >
            Volver al inicio
          </Link>
        </div>

        <p className="mt-6 text-center text-xs text-med-muted">
          contacto@monitoracls.com &mdash; respondemos en horas hábiles
        </p>
      </main>
    </div>
  )
}
