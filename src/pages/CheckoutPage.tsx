import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getCheckoutHref, hasCheckoutUrl, trackCommercialEvent, type BillingCycle } from '../lib/commercial'

type Plan = 'individual' | 'institutional'

interface PlanConfig {
  name: string
  badge?: string
  description: string
  audience: string
  monthly: { price: string; period: string; savings?: string }
  annual: { price: string; period: string; savings: string }
  features: string[]
  accentClass: string
  borderClass: string
  ctaClass: string
}

const plans: Record<Plan, PlanConfig> = {
  individual: {
    name: 'Individual',
    description: 'Entrena ACLS/BLS desde cualquier sala de clases, cuartel o centro de simulación.',
    audience: 'Para instructores independientes, OTEC y bomberos.',
    monthly: { price: 'USD $24.90', period: '/mes', savings: 'o USD $199/año' },
    annual: { price: 'USD $199', period: '/año', savings: 'Ahorra USD $100 al año' },
    features: [
      'Simulación ACLS y BLS completa',
      'Panel instructor con control total del caso',
      'Todos los ritmos: FV, AESP, asistolia, bradicardias, taquicardias',
      'Debrief exportable por sesión',
      'Acceso web sin instalación',
      'Actualizaciones incluidas',
    ],
    accentClass: 'text-med-ecg',
    borderClass: 'border-white/10',
    ctaClass: 'border-med-ecg/40 bg-med-ecg/15 text-med-ecg hover:bg-med-ecg/25',
  },
  institutional: {
    name: 'Institucional',
    badge: 'Recomendado',
    description: 'Implemente simulación ACLS/BLS profesional sin depender de monitores físicos costosos.',
    audience: 'Para universidades, hospitales, centros de simulación y academias.',
    monthly: { price: 'USD $50', period: '/mes', savings: 'o USD $500/año · +USD $10/mes por licencia extra' },
    annual: { price: 'USD $500', period: '/año', savings: 'Ahorra USD $100 al año' },
    features: [
      '2 licencias incluidas',
      'Simulación ACLS y BLS completa',
      'Múltiples instructores activos',
      'Onboarding inicial guiado',
      'Soporte prioritario',
      'Licencias adicionales a +USD $10/mes',
    ],
    accentClass: 'text-med-cyan',
    borderClass: 'border-med-blue/40',
    ctaClass: 'border-med-blue/40 bg-med-blue/20 text-med-cyan hover:bg-med-blue/30',
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

interface Props {
  plan: Plan
}

export function CheckoutPage({ plan }: Props) {
  const [billing, setBilling] = useState<BillingCycle>('monthly')
  const config = plans[plan]
  const pricing = billing === 'monthly' ? config.monthly : config.annual
  const checkoutUrl = getCheckoutHref(plan, billing)
  const hasUrl = hasCheckoutUrl(plan, billing)

  function handlePay() {
    trackCommercialEvent('click_buy_plan', { source: 'checkout_page', plan, billingCycle: billing })
    if (hasUrl) {
      window.location.href = checkoutUrl
    }
  }

  return (
    <div className="min-h-screen bg-med-bg text-med-text">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-med-bg/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-4 px-5 md:px-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-med-muted transition hover:text-med-soft"
          >
            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Volver
          </Link>
          <span className="text-white/20">|</span>
          <span className="text-xs font-bold uppercase tracking-wider text-med-muted">
            Monitor ACLS — Checkout
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-lg px-5 py-12 md:px-8 md:py-20">
        <div className={`rounded-2xl border ${config.borderClass} bg-med-card/75 p-6 md:p-8`}>
          <div className="mb-6 border-b border-white/10 pb-6">
            <div className="flex items-center justify-between">
              <p className={`text-[10px] font-bold uppercase tracking-[0.24em] ${config.accentClass}`}>
                {config.name}
              </p>
              {config.badge && (
                <span className="rounded-full border border-med-blue/35 bg-med-blue/20 px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-med-cyan">
                  {config.badge}
                </span>
              )}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-med-soft">{config.description}</p>
            <p className="mt-1 text-xs text-med-muted">{config.audience}</p>
          </div>

          <div className="mb-6">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-med-muted">
              Modalidad de pago
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
                className={`relative flex-1 rounded-xl border px-4 py-3 text-sm font-extrabold uppercase tracking-wider transition ${
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
          </div>

          <div className="mb-6 rounded-xl border border-white/10 bg-black/20 px-4 py-4">
            <div className="flex items-end gap-2">
              <p className="text-4xl font-extrabold text-med-text">{pricing.price}</p>
              <p className="mb-1 text-sm text-med-muted">{pricing.period}</p>
            </div>
            {pricing.savings && (
              <p className={`mt-1 text-xs font-bold ${billing === 'annual' ? config.accentClass : 'text-med-muted'}`}>
                {pricing.savings}
              </p>
            )}
          </div>

          <ul className="mb-6 space-y-2.5">
            {config.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm leading-relaxed text-med-soft/88">
                <Check accent={config.accentClass} />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="space-y-2">
            {hasUrl ? (
              <button
                type="button"
                onClick={handlePay}
                className={`block w-full rounded-xl border px-4 py-3 text-center text-sm font-extrabold uppercase tracking-wider transition ${config.ctaClass}`}
              >
                {billing === 'monthly' ? 'Pagar plan mensual' : 'Pagar plan anual'}
              </button>
            ) : (
              <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-center">
                <p className="text-sm font-bold text-med-soft">Pago online próximamente disponible</p>
                <p className="mt-1 text-xs text-med-muted">
                  Escríbenos a{' '}
                  <a
                    href="mailto:contacto@monitoracls.com"
                    className="text-med-soft underline transition hover:text-white"
                    onClick={() => trackCommercialEvent('click_buy_plan', { source: 'checkout_fallback', plan, billingCycle: billing })}
                  >
                    contacto@monitoracls.com
                  </a>{' '}
                  para activar tu licencia.
                </p>
              </div>
            )}

            <Link
              to="/#contacto"
              className="block rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-center text-xs font-extrabold uppercase tracking-wider text-med-muted transition hover:text-med-soft"
              onClick={() => trackCommercialEvent('click_demo', { source: 'checkout_secondary', plan })}
            >
              Prefiero solicitar una demo
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
