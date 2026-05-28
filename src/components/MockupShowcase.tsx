import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'

const cards = [
  { src: '/monitor-real-2.jpg', title: 'Monitoreo estable', description: 'ECG, capnografía y signos vitales en operación continua de caso.' },
  { src: '/monitor-real-4.jpg', title: 'Escenario crítico VT', description: 'Parámetros críticos y soporte docente en un caso taquicárdico inestable.' },
  { src: '/monitor-real-3.jpg', title: 'Escenario VF desfibrilable', description: 'Alarma de paro y flujo de desfibrilación con checklist pre-shock.' },
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
            <picture>
              <source srcSet={card.src.replace('.jpg', '.webp')} type="image/webp" />
              <img
                src={card.src}
                alt={card.title}
                loading="lazy"
                decoding="async"
                width="800"
                height="500"
                className="h-auto w-full rounded-xl border border-white/10 bg-black/40 object-cover"
              />
            </picture>
            <h3 className="mt-3 text-lg font-extrabold text-med-text">{card.title}</h3>
            <p className="mt-1 text-sm text-med-muted">{card.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
