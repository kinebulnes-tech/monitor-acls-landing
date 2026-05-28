import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'

const layers = [
  {
    role: 'Instructor',
    description: 'Controla el caso: activa ritmos, escala la dificultad e interviene cuando el equipo lo necesita.',
  },
  {
    role: 'Participante',
    description: 'Ve el monitor clínico, toma decisiones y recibe feedback estructurado al cierre de la sesión.',
  },
  {
    role: 'Coordinación',
    description: 'Accede a los reportes de sesión para evidencia, seguimiento y evaluación del programa.',
  },
]

export function MultiUserArchitecture() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24" id="arquitectura">
      <SectionTitle
        eyebrow="Roles y accesos"
        title="Instructor, participante y coordinador. Cada uno ve lo que necesita ver."
        subtitle="Una sesión, tres perspectivas distintas. El instructor dirige. El equipo responde. Coordinación registra."
      />

      <div className="enterprise-surface rounded-[1.75rem] p-4 md:p-6">
        <div className="grid gap-3 md:grid-cols-3">
          {layers.map((layer, idx) => (
            <motion.article
              key={layer.role}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="rounded-2xl border border-white/10 bg-black/25 p-5"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-med-blue">Rol {idx + 1}</p>
              <h3 className="mt-2 text-lg font-extrabold text-med-text">{layer.role}</h3>
              <p className="mt-2 text-sm leading-relaxed text-med-muted">{layer.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
