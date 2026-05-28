import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'
import { getCheckoutHref, trackCommercialEvent } from '../lib/commercial'

const audience = [
  'Universidades',
  'OTEC',
  'Hospitales',
  'Centros de simulación',
  'Instructores ACLS/BLS',
]

const plans = [
  {
    key: 'individual',
    name: 'Plan Individual',
    description: 'Evaluación ejecutiva y técnica para validar ajuste institucional.',
    points: ['Revisión de caso de uso', 'Acceso preparado para licencia futura', 'Soporte de onboarding inicial'],
    cta: 'Comprar licencia',
    secondary: 'Elegir plan',
  },
  {
    key: 'institutional',
    name: 'Institucional',
    description: 'Implementación multiusuario para programas formales de entrenamiento.',
    points: ['Operación por equipo', 'Implementación por cohorte', 'Demo guiada para coordinación'],
    cta: 'Solicitar demo',
    secondary: 'Hablar con ventas',
  },
  {
    key: 'enterprise',
    name: 'Enterprise',
    description: 'Diseño comercial para sedes, alto volumen y acompañamiento técnico.',
    points: ['Cotización consultiva', 'Acompañamiento comercial/técnico', 'Preparado para flujo de compra futuro'],
    cta: 'Solicitar cotización',
    secondary: 'Hablar con ventas',
  },
] as const

export function AudiencePlans() {
  return (
    <section className="border-y border-white/10 bg-med-panel/52" id="planes">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <SectionTitle
          eyebrow="Público y planes"
          title="Modelos de adopción para instituciones de salud y educación"
          subtitle="La conversión se orienta a evaluación consultiva, no a compra impulsiva."
        />
        <div className="grid gap-5 lg:grid-cols-[1fr_1.6fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="enterprise-surface rounded-[1.5rem] p-5"
          >
            <h3 className="text-lg font-extrabold text-med-text">Público objetivo</h3>
            <ul className="mt-3 space-y-2">
              {audience.map((item) => (
                <li key={item} className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-med-soft/82">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="grid gap-3 md:grid-cols-3">
            {plans.map((plan, idx) => {
              const checkoutHref = getCheckoutHref(plan.key)
              const isBuyPlan = plan.key === 'individual'
              const eventName = plan.key === 'enterprise' ? 'click_request_quote' : isBuyPlan ? 'click_buy_plan' : 'click_demo'
              return (
              <motion.article
                key={plan.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`rounded-2xl border p-5 transition duration-300 hover:-translate-y-0.5 ${
                  plan.key === 'institutional'
                    ? 'border-med-blue/35 bg-med-blue/10 shadow-blue'
                    : 'border-white/10 bg-med-card/75'
                }`}
              >
                <h3 className="text-lg font-extrabold text-med-text">{plan.name}</h3>
                <p className="mt-2 min-h-20 text-sm leading-relaxed text-med-muted">{plan.description}</p>
                <ul className="space-y-1.5">
                  {plan.points.map((point) => (
                    <li key={point} className="text-xs leading-relaxed text-white/75">
                      • {point}
                    </li>
                  ))}
                </ul>
                <a
                  href={checkoutHref}
                  onClick={() => trackCommercialEvent(eventName, { source: 'plans', plan: plan.key })}
                  className="mt-4 inline-flex rounded-lg border border-med-blue/35 bg-med-blue/10 px-3 py-2 text-xs font-extrabold uppercase tracking-wider text-med-cyan transition hover:bg-med-blue/20"
                >
                  {plan.cta}
                </a>
                <a
                  href="#contacto"
                  onClick={() => trackCommercialEvent(plan.key === 'enterprise' ? 'click_request_quote' : 'click_demo', { source: 'plans_secondary', plan: plan.key })}
                  className="mt-2 inline-flex text-xs font-bold uppercase tracking-wider text-med-muted transition hover:text-white"
                >
                  {plan.secondary}
                </a>
              </motion.article>
            )})}
          </div>
        </div>
      </div>
    </section>
  )
}
