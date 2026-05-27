import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'

const cards = [
  { src: '/mockup-monitor.svg', title: 'Monitor ACLS', description: 'ECG, capnografía, signos vitales y eventos críticos en tiempo real.' },
  { src: '/mockup-instructor.svg', title: 'Dashboard Instructor', description: 'Control clínico, intervenciones, ritmo y decisiones durante el caso.' },
  { src: '/mockup-student.svg', title: 'Vista Alumno', description: 'Interacción guiada, propuestas y seguimiento de caso bajo supervisión.' },
]

export function MockupShowcase() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8" id="solucion">
      <SectionTitle
        eyebrow="Vista plataforma"
        title="Diseñado para operación docente real"
        subtitle="Monitor clínico, panel instructor y vista alumno sincronizados en una misma sesión."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((card, i) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="rounded-2xl border border-white/10 bg-med-card p-3"
          >
            <img
              src={card.src}
              alt={card.title}
              loading="lazy"
              className="h-auto w-full rounded-xl border border-white/10 bg-black/40"
            />
            <h3 className="mt-3 text-lg font-black text-med-text">{card.title}</h3>
            <p className="mt-1 text-sm text-med-muted">{card.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
