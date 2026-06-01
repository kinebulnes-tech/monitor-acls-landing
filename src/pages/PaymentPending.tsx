import { Link } from 'react-router-dom'
import { PurchaseNotificationForm } from '../components/PurchaseNotificationForm'

function IconClock() {
  return (
    <svg className="h-12 w-12 text-med-gold" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M24 19v6l3.5 2.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function PaymentPending() {
  return (
    <div className="min-h-screen bg-med-bg text-med-text">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-med-bg/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-3 px-5 md:px-8">
          <Link
            to="/"
            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-med-muted transition hover:text-med-soft"
          >
            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M10 3L5 8l5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Monitor ACLS
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-lg px-5 py-12 md:px-8 md:py-20">

        <div className="mb-8 flex flex-col items-center text-center">
          <div className="mb-4">
            <IconClock />
          </div>
          <h1 className="text-2xl font-extrabold text-med-gold md:text-3xl">
            Pago en verificación
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-med-soft/90">
            Flow recibió tu pago y lo está validando. Esto es normal con algunos medios de pago.
            Puedes enviarnos tus datos ahora — activaremos la licencia cuando el pago sea confirmado.
          </p>
        </div>

        <div
          className="mb-7 h-px w-full"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(228,196,107,0.45), rgba(228,196,107,0.22), transparent)',
          }}
          aria-hidden="true"
        />

        {/* Nota de contexto */}
        <div className="mb-5 rounded-xl border border-med-gold/20 bg-med-gold/5 px-4 py-3 text-xs text-med-muted">
          <span className="font-bold text-med-soft/80">Estado pendiente ≠ pago fallido</span>
          {' — '}
          Tu pago existe en el sistema de Flow. Solo espera confirmación del medio elegido. No es
          necesario reintentar el pago.
        </div>

        {/* Form principal */}
        <div className="mb-5 rounded-2xl border border-med-gold/20 bg-med-gold/5 p-5">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-med-gold/70">
            Envía tus datos para activar tu licencia
          </p>
          <PurchaseNotificationForm variant="pending" />
        </div>

        {/* Fallback secundario */}
        <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs text-med-muted">
          ¿Prefieres escribir directamente?{' '}
          <a
            href="mailto:contacto@monitoracls.com?subject=Activación%20de%20licencia%20Monitor%20ACLS"
            className="font-semibold text-med-soft transition hover:text-white"
          >
            contacto@monitoracls.com
          </a>
        </div>

        <div className="mt-5">
          <Link
            to="/"
            className="block w-full rounded-xl border border-white/[0.06] px-4 py-2.5 text-center text-xs font-extrabold uppercase tracking-wider text-med-muted/70 transition hover:text-med-muted"
          >
            Volver al inicio
          </Link>
        </div>
      </main>
    </div>
  )
}
