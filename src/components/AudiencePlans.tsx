import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'
import { trackCommercialEvent, type BillingCycle } from '../lib/commercial'

const individualPoints = [
  'Simulación ACLS y BLS completa',
  'Panel instructor con control total del caso',
  'Todos los ritmos: FV, AESP, asistolia, bradicardias, taquicardias',
  'Debrief exportable por sesión',
  'Acceso web sin instalación',
  'Actualizaciones incluidas',
]

const institutionalPoints = [
  '2 licencias incluidas',
  'Simulación ACLS y BLS completa',
  'Múltiples instructores activos',
  'Onboarding inicial guiado',
  'Soporte prioritario',
  'Licencias adicionales a +USD $10/mes',
]

function Check() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-med-ecg" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 8.5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function AudiencePlans() {
  const [billing, setBilling] = useState<BillingCycle>('monthly')
  const navigate = useNavigate()

  return (
    <section className="border-y border-white/10 bg-med-panel/52" id="planes">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <SectionTitle
          eyebrow="Licencias"
          title="Entrena ACLS/BLS sin depender de hardware especializado"
          subtitle="Acceso inmediato. Precio claro. Simulación clínica profesional desde navegador web."
        />

        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-black/30 p-1">
            <button
              type="button"
              onClick={() => setBilling('monthly')}
              className={`rounded-lg px-4 py-2 text-xs font-extrabold uppercase tracking-wider transition ${
                billing === 'monthly'
                  ? 'bg-white/10 text-med-text'
                  : 'text-med-muted hover:text-med-soft'
              }`}
            >
              Mensual
            </button>
            <button
              type="button"
              onClick={() => setBilling('annual')}
              className={`relative rounded-lg px-4 py-2 text-xs font-extrabold uppercase tracking-wider transition ${
                billing === 'annual'
                  ? 'bg-white/10 text-med-text'
                  : 'text-med-muted hover:text-med-soft'
              }`}
            >
              Anual
              <span className="ml-1.5 rounded-full bg-med-ecg/20 px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-med-ecg">
                −$100
              </span>
            </button>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 md:items-start lg:gap-6">
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="order-2 rounded-2xl border border-white/10 bg-med-card/75 p-6 md:order-1"
          >
            <div className="mb-4 border-b border-white/10 pb-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-med-muted">Individual</p>
              <div className="mt-2 flex items-end gap-2">
                <p className="text-4xl font-extrabold text-med-text">
                  {billing === 'monthly' ? 'USD $24.90' : 'USD $199'}
                </p>
                <p className="mb-1 text-sm text-med-muted">
                  {billing === 'monthly' ? '/mes' : '/año'}
                </p>
              </div>
              {billing === 'annual' && (
                <p className="mt-1 text-xs font-bold text-med-ecg">Ahorra USD $100 al año</p>
              )}
              {billing === 'monthly' && (
                <p className="mt-1 text-xs text-med-muted">o USD $199/año</p>
              )}
              <p className="mt-3 text-sm leading-relaxed text-med-soft">
                Entrena ACLS/BLS desde cualquier sala de clases, cuartel o centro de simulación.
              </p>
              <p className="mt-1.5 text-xs text-med-muted">
                Para instructores independientes, OTEC y bomberos.
              </p>
            </div>

            <ul className="space-y-2.5">
              {individualPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-med-soft/88">
                  <Check />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 space-y-2">
              <button
                type="button"
                onClick={() => {
                  trackCommercialEvent('click_buy_plan', { source: 'plans', plan: 'individual', billingCycle: billing })
                  navigate('/checkout/individual')
                }}
                className="block w-full rounded-xl border border-med-ecg/40 bg-med-ecg/15 px-4 py-3 text-center text-sm font-extrabold uppercase tracking-wider text-med-ecg transition hover:bg-med-ecg/25"
              >
                Elegir plan Individual
              </button>
              <a
                href="#contacto"
                onClick={() => trackCommercialEvent('click_demo', { source: 'plans_secondary', plan: 'individual' })}
                className="block rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-center text-xs font-extrabold uppercase tracking-wider text-med-muted transition hover:text-med-soft"
              >
                Agendar demo
              </a>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="order-1 rounded-2xl border border-med-blue/40 bg-med-blue/10 p-6 shadow-blue md:order-2"
          >
            <div className="mb-4 border-b border-white/10 pb-4">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-med-cyan">Institucional</p>
                <span className="rounded-full border border-med-blue/35 bg-med-blue/20 px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-med-cyan">
                  Recomendado
                </span>
              </div>
              <div className="mt-2 flex items-end gap-2">
                <p className="text-4xl font-extrabold text-med-text">
                  {billing === 'monthly' ? 'USD $50' : 'USD $500'}
                </p>
                <p className="mb-1 text-sm text-med-muted">
                  {billing === 'monthly' ? '/mes' : '/año'}
                </p>
              </div>
              {billing === 'annual' && (
                <p className="mt-1 text-xs font-bold text-med-ecg">Ahorra USD $100 al año</p>
              )}
              {billing === 'monthly' && (
                <p className="mt-1 text-xs text-med-muted">o USD $500/año · +USD $10/mes por licencia extra</p>
              )}
              {billing === 'annual' && (
                <p className="mt-0.5 text-xs text-med-muted">+USD $10/mes por licencia extra</p>
              )}
              <p className="mt-3 text-sm leading-relaxed text-med-soft">
                Implemente simulación ACLS/BLS profesional sin depender de monitores físicos costosos.
              </p>
              <p className="mt-1.5 text-xs text-med-muted">
                Para universidades, hospitales, centros de simulación y academias.
              </p>
            </div>

            <ul className="space-y-2.5">
              {institutionalPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-med-soft/88">
                  <Check />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 space-y-2">
              <button
                type="button"
                onClick={() => {
                  trackCommercialEvent('click_buy_plan', { source: 'plans', plan: 'institutional', billingCycle: billing })
                  navigate('/checkout/institutional')
                }}
                className="block w-full rounded-xl border border-med-blue/40 bg-med-blue/20 px-4 py-3 text-center text-sm font-extrabold uppercase tracking-wider text-med-cyan transition hover:bg-med-blue/30"
              >
                Elegir plan Institucional
              </button>
              <a
                href="#contacto"
                onClick={() => trackCommercialEvent('click_demo', { source: 'plans_secondary', plan: 'institutional' })}
                className="block rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-center text-xs font-extrabold uppercase tracking-wider text-med-muted transition hover:text-med-soft"
              >
                Agendar demo
              </a>
            </div>
          </motion.article>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mt-8 rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-center"
        >
          <p className="text-sm text-med-muted">
            ¿Necesitas más licencias o una implementación institucional a medida?{' '}
            <a
              href="mailto:contacto@monitoracls.com"
              className="font-semibold text-med-soft transition hover:text-white"
            >
              Escríbenos a contacto@monitoracls.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
