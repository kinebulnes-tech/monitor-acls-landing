import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'

const steps = [
  {
    title: '1. El instructor prepara el caso',
    detail: 'Selecciona el escenario, define el ritmo inicial y activa la sesión. En menos de dos minutos.',
  },
  {
    title: '2. El equipo responde en tiempo real',
    detail: 'El equipo toma decisiones clínicas mientras el instructor puede intervenir o escalar el escenario.',
  },
  {
    title: '3. La sesión cierra con evidencia',
    detail: 'Todos reciben un resumen con lo que ocurrió, lo que se decidió y lo que mejorar.',
  },
]

export function HowItWorks() {
  return (
    <section className="border-y border-white/10 bg-med-panel/50" id="como-funciona">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <SectionTitle
          eyebrow="Cómo funciona"
          title="Una sesión completa en tres pasos"
          subtitle="Desde que el instructor configura el caso hasta que el equipo recibe el resumen documentado."
        />
        <div className="grid gap-3 md:grid-cols-3">
          {steps.map((step, idx) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-med-card/72 p-5"
            >
              <div className="absolute -right-7 -top-7 h-20 w-20 rounded-full bg-med-blue/8 blur-2xl" />
              <h3 className="relative text-lg font-extrabold tracking-tight text-med-text">{step.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-med-muted">{step.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
