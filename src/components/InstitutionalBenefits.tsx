import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'

const benefits = [
  {
    title: 'Más sesiones, sin más salas',
    value: 'Entrena grupos simultáneos sin duplicar infraestructura.',
  },
  {
    title: 'Registro por sesión',
    value: 'Cada caso queda documentado: acciones, tiempos y equipo.',
  },
  {
    title: 'El mismo entrenamiento en todas tus sedes',
    value: 'Sin depender del criterio de cada instructor.',
  },
  {
    title: 'Menor costo por sesión',
    value: 'Sin consumibles, sin sala dedicada, sin logística adicional.',
  },
]

export function InstitutionalBenefits() {
  return (
    <section className="border-y border-white/10 bg-med-bg">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <SectionTitle
          eyebrow="Beneficios institucionales"
          title="Resultados que importan a coordinación académica"
          subtitle="Lo que importa no es el monitor. Es que el equipo sepa qué hacer cuando el ritmo cambia."
        />
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, idx) => (
            <motion.article
              key={benefit.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-med-elevated/75 to-med-card/65 p-5 shadow-card transition duration-300 hover:-translate-y-0.5 hover:border-med-blue/30"
            >
              <div className="mb-5 h-1 w-10 rounded-full bg-med-cyan/65" />
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-med-cyan">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-med-muted">{benefit.value}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
