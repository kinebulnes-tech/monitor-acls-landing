import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'

const audience = [
  'Universidades',
  'OTEC',
  'Hospitales',
  'Centros de simulación',
  'Instructores ACLS/BLS',
]

const plans = [
  {
    name: 'Demo',
    description: 'Evaluación ejecutiva y técnica para validar ajuste institucional.',
    points: ['Revisión de caso de uso', 'Demo guiada', 'Recomendación de implementación'],
    cta: 'Agendar evaluación',
  },
  {
    name: 'Licencia Instructor',
    description: 'Operación individual para entrenamiento continuo y sesiones recurrentes.',
    points: ['Uso docente continuo', 'Acceso a escenarios', 'Soporte de onboarding inicial'],
    cta: 'Consultar modalidad',
  },
  {
    name: 'Licencia Institucional',
    description: 'Implementación multiusuario para programas formales de entrenamiento.',
    points: ['Operación por equipo', 'Implementación por cohorte', 'Acompañamiento comercial/técnico'],
    cta: 'Diseñar propuesta',
  },
]

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
            {plans.map((plan, idx) => (
              <motion.article
                key={plan.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`rounded-2xl border p-5 transition duration-300 hover:-translate-y-0.5 ${
                  plan.name === 'Licencia Institucional'
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
                  href="#contacto"
                  className="mt-4 inline-flex rounded-lg border border-med-blue/35 bg-med-blue/10 px-3 py-2 text-xs font-extrabold uppercase tracking-wider text-med-cyan transition hover:bg-med-blue/20"
                >
                  {plan.cta}
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
