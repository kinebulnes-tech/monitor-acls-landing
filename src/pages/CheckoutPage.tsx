import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getCheckoutHref, hasCheckoutUrl, trackCommercialEvent, type BillingCycle } from '../lib/commercial'

type Plan = 'individual' | 'institutional'

interface PlanConfig {
  name: string
  badge?: string
  description: string
  audience: string
  monthly: { price: string; period: string; hint: string }
  annual: { price: string; period: string; hint: string }
  features: string[]
  accentClass: string
  bgClass: string
  borderClass: string
  ctaClass: string
}

const plans: Record<Plan, PlanConfig> = {
  individual: {
    name: 'Individual',
    description: 'Simulación ACLS/BLS completa desde cualquier navegador. Sin hardware especializado.',
    audience: 'Instructores independientes · OTEC · Bomberos',
    monthly: { price: 'USD $24.90', period: '/mes', hint: 'Facturado mensualmente · Cancela cuando quieras' },
    annual: { price: 'USD $199', period: '/año', hint: 'Ahorra USD $100 vs pago mensual · Un solo cobro anual' },
    features: [
      'Simulación ACLS y BLS completa',
      'Panel instructor con control total del caso',
      'Todos los ritmos: FV, AESP, asistolia, bradicardias, taquicardias',
      'Debrief exportable por sesión',
      'Acceso web sin instalación ni hardware',
      'Actualizaciones incluidas',
    ],
    accentClass: 'text-med-ecg',
    bgClass: 'bg-med-card/75',
    borderClass: 'border-white/10',
    ctaClass: 'border-med-ecg/50 bg-med-ecg/20 text-med-ecg hover:bg-med-ecg/30 active:scale-[0.98]',
  },
  institutional: {
    name: 'Institucional',
    badge: 'Recomendado',
    description: 'Implementación profesional para equipos. Múltiples instructores, soporte prioritario y onboarding.',
    audience: 'Universidades · Hospitales · Centros de simulación · Academias',
    monthly: { price: 'USD $50', period: '/mes', hint: 'Incluye 2 licencias · +USD $10/mes por licencia extra' },
    annual: { price: 'USD $500', period: '/año', hint: 'Ahorra USD $100 vs pago mensual · Incluye 2 licencias' },
    features: [
      '2 licencias incluidas',
      'Simulación ACLS y BLS completa',
      'Múltiples instructores activos',
      'Onboarding inicial guiado',
      'Soporte prioritario',
      'Licencias adicionales a +USD $10/mes',
    ],
    accentClass: 'text-med-cyan',
    bgClass: 'bg-med-blue/10',
    borderClass: 'border-med-blue/40',
    ctaClass: 'border-med-blue/50 bg-med-blue/25 text-med-cyan hover:bg-med-blue/35 active:scale-[0.98]',
  },
}

function Check({ accent }: { accent: string }) {
  return (
    <svg className={`mt-0.5 h-4 w-4 shrink-0 ${accent}`} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 8.5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function buildMailtoHref(plan: Plan, billing: BillingCycle, price: string) {
  const planLabel = plan === 'individual' ? 'Individual' : 'Institucional'
  const billingLabel = billing === 'monthly' ? 'Mensual' : 'Anual'
  const subject = encodeURIComponent(`Compra Plan ${planLabel} ${billingLabel} — ${price}`)
  const body = encodeURIComponent(
    `Hola,\n\nQuiero activar el Plan ${planLabel} (${billingLabel} · ${price}).\n\nNombre:\nInstitución (si aplica):\nTeléfono:\n\nQuedo atento/a a los siguientes pasos.\n\nGracias.`
  )
  return `mailto:contacto@monitoracls.com?subject=${subject}&body=${body}`
}

interface Props {
  plan: Plan
}

export function CheckoutPage({ plan }: Props) {
  const [billing, setBilling] = useState<BillingCycle>('monthly')
  const config = plans[plan]
  const pricing = billing === 'monthly' ? config.monthly : config.annual
  const hasUrl = hasCheckoutUrl(plan, billing)
  const checkoutUrl = getCheckoutHref(plan, billing)

  function handlePay() {
    trackCommercialEvent('click_buy_plan', { source: 'checkout_page', plan, billingCycle: billing })
    if (hasUrl) {
      window.location.href = checkoutUrl
    } else {
      window.location.href = buildMailtoHref(plan, billing, pricing.price)
    }
  }

  const ctaLabel = billing === 'monthly' ? 'Continuar al pago mensual' : 'Continuar al pago anual'

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
            Volver
          </Link>
          <span className="text-white/20">·</span>
          <span className="text-xs text-med-muted">
            Monitor ACLS &mdash; Plan <span className={`font-bold ${config.accentClass}`}>{config.name}</span>
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-lg px-5 py-10 md:px-8 md:py-16">

        {/* Plan header */}
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <h1 className={`text-2xl font-extrabold ${config.accentClass}`}>Plan {config.name}</h1>
            {config.badge && (
              <span className="rounded-full border border-med-blue/35 bg-med-blue/20 px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-med-cyan">
                {config.badge}
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-med-soft">{config.description}</p>
          <p className="mt-0.5 text-xs text-med-muted">{config.audience}</p>
        </div>

        {/* Billing toggle */}
        <div className={`mb-4 rounded-2xl border ${config.borderClass} ${config.bgClass} p-5`}>
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-med-muted">
            Elige modalidad de pago
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setBilling('monthly')}
              className={`flex-1 rounded-xl border px-4 py-3 text-sm font-extrabold uppercase tracking-wider transition ${
                billing === 'monthly'
                  ? 'border-white/20 bg-white/10 text-med-text'
                  : 'border-white/10 text-med-muted hover:text-med-soft'
              }`}
            >
              Mensual
            </button>
            <button
              type="button"
              onClick={() => setBilling('annual')}
              className={`flex-1 rounded-xl border px-4 py-3 text-sm font-extrabold uppercase tracking-wider transition ${
                billing === 'annual'
                  ? 'border-white/20 bg-white/10 text-med-text'
                  : 'border-white/10 text-med-muted hover:text-med-soft'
              }`}
            >
              Anual
              <span className="ml-1.5 rounded-full bg-med-ecg/20 px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-med-ecg">
                −$100
              </span>
            </button>
          </div>

          {/* Dynamic price */}
          <div className="mt-4 flex items-end gap-2 border-t border-white/10 pt-4">
            <p className="text-5xl font-extrabold text-med-text">{pricing.price}</p>
            <p className="mb-1.5 text-sm text-med-muted">{pricing.period}</p>
          </div>
          <p className={`mt-1 text-xs font-medium ${billing === 'annual' ? config.accentClass : 'text-med-muted'}`}>
            {pricing.hint}
          </p>
        </div>

        {/* Features */}
        <div className={`mb-5 rounded-2xl border ${config.borderClass} ${config.bgClass} p-5`}>
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-med-muted">Incluye</p>
          <ul className="space-y-2.5">
            {config.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm leading-relaxed text-med-soft/90">
                <Check accent={config.accentClass} />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="space-y-2">
          <button
            type="button"
            onClick={handlePay}
            className={`w-full rounded-xl border px-4 py-4 text-center text-sm font-extrabold uppercase tracking-wider transition ${config.ctaClass}`}
          >
            {ctaLabel}
          </button>

          {!hasUrl && (
            <p className="text-center text-[11px] text-med-muted">
              Se abrirá tu cliente de correo con los datos del plan pre-llenados.
            </p>
          )}

          <Link
            to="/"
            onClick={() => {
              trackCommercialEvent('click_demo', { source: 'checkout_secondary', plan })
              setTimeout(() => {
                document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
              }, 50)
            }}
            className="block rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-center text-xs font-extrabold uppercase tracking-wider text-med-muted transition hover:text-med-soft"
          >
            Prefiero solicitar una demo
          </Link>
        </div>

        <p className="mt-6 text-center text-xs text-med-muted">
          ¿Dudas?{' '}
          <a href="mailto:contacto@monitoracls.com" className="underline transition hover:text-med-soft">
            contacto@monitoracls.com
          </a>
        </p>
      </main>
    </div>
  )
}
