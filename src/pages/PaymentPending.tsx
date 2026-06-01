import { Link } from 'react-router-dom'

function IconClock() {
  return (
    <svg
      className="h-14 w-14 text-med-gold"
      viewBox="0 0 56 56"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="28" cy="28" r="26" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      <circle cx="28" cy="28" r="20" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <circle cx="28" cy="28" r="14" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M28 22v7l4 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function InfoRow({ label, text }: { label: string; text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-med-gold/60" aria-hidden="true" />
      <span className="text-sm leading-relaxed text-med-soft/90">
        <span className="font-semibold text-med-soft">{label}</span>
        {' — '}
        {text}
      </span>
    </li>
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
            <IconClock />
          </div>
          <h1 className="text-2xl font-extrabold text-med-gold md:text-3xl">
            Pago en verificación
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-med-soft/90">
            Flow recibió tu solicitud y está validando el pago. Esto es normal con algunos medios de pago.
          </p>
        </div>

        {/* Decorative hairline */}
        <div
          className="mb-7 h-px w-full"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(228,196,107,0.45), rgba(228,196,107,0.22), transparent)',
          }}
          aria-hidden="true"
        />

        {/* Context by payment method */}
        <div className="mb-5 rounded-2xl border border-med-gold/20 bg-med-gold/5 p-5">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-med-gold/70">
            Tiempos según medio de pago
          </p>
          <ul className="space-y-3">
            <InfoRow
              label="Transferencia bancaria"
              text="Hasta 2 días hábiles para acreditarse según el banco emisor."
            />
            <InfoRow
              label="Tarjeta de débito / crédito"
              text="Normalmente se confirma en minutos. Si persiste más de 1 hora, contáctanos."
            />
            <InfoRow
              label="Otros medios Flow"
              text="El tiempo varía según el medio elegido. Revisa el correo de confirmación de Flow."
            />
          </ul>
        </div>

        {/* Manual activation */}
        <div className="mb-5 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-med-muted">
            Próximos pasos para activar tu licencia
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-med-gold/40 bg-med-gold/10 text-[10px] font-extrabold text-med-gold">
                1
              </span>
              <span className="text-sm leading-relaxed text-med-soft/90">
                Espera la confirmación de pago de Flow (te llegará por correo).
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-med-gold/40 bg-med-gold/10 text-[10px] font-extrabold text-med-gold">
                2
              </span>
              <span className="text-sm leading-relaxed text-med-soft/90">
                Envía el comprobante junto con tu nombre, correo, plan e institución a{' '}
                <a href="mailto:contacto@monitoracls.com" className="font-semibold text-med-gold underline">
                  contacto@monitoracls.com
                </a>
                .
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-med-gold/40 bg-med-gold/10 text-[10px] font-extrabold text-med-gold">
                3
              </span>
              <span className="text-sm leading-relaxed text-med-soft/90">
                Nuestro equipo generará tu licencia manualmente dentro del horario laboral.
              </span>
            </li>
          </ul>
        </div>

        {/* Reassurance */}
        <div className="mb-7 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs text-med-muted">
          <span className="font-bold text-med-soft/80">Estado pendiente ≠ pago fallido</span>
          {' — '}
          Tu pago existe en el sistema de Flow. Solo está esperando confirmación del medio elegido. No es necesario reintentar.
        </div>

        {/* CTAs */}
        <div className="space-y-2">
          <a
            href="mailto:contacto@monitoracls.com?subject=Activación%20de%20licencia%20Monitor%20ACLS"
            className="block w-full rounded-xl border border-med-gold/50 bg-med-gold/20 px-4 py-4 text-center text-sm font-extrabold uppercase tracking-wider text-med-gold transition hover:bg-med-gold/30 active:scale-[0.98]"
          >
            Enviar comprobante por correo
          </a>
          <Link
            to="/"
            className="block w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-xs font-extrabold uppercase tracking-wider text-med-muted transition hover:text-med-soft"
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
