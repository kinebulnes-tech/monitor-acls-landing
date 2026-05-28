import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'

const cases = [
  {
    name: 'FV presenciada',
    focus: 'Desfibrilación temprana, secuencia ACLS y timing crítico.',
  },
  {
    name: 'AESP por hipoxia',
    focus: 'Reconocimiento de causa reversible y continuidad de RCP.',
  },
  {
    name: 'Post-ROSC inestable',
    focus: 'Decisiones hemodinámicas y vigilancia clínica estructurada.',
  },
  {
    name: 'TV sin pulso refractaria',
    focus: 'Estrategia de shocks, antiarrítmico y ritmo de equipo.',
  },
]

export function ClinicalUseCases() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24" id="casos">
      <SectionTitle
        eyebrow="Casos clínicos"
        title="Escenarios orientados a decisiones reales"
        subtitle="Entrenamiento enfocado en timing, coordinación y adherencia a algoritmo."
      />
      <div className="grid gap-3 md:grid-cols-2">
        {cases.map((item, idx) => (
          <motion.article
            key={item.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
            className="rounded-2xl border border-white/10 bg-med-card/72 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-med-blue/30"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-extrabold text-med-text">{item.name}</h3>
              <span className="rounded-full border border-med-ecg/30 bg-med-ecg/10 px-2 py-1 text-[10px] font-extrabold uppercase tracking-wider text-med-ecg">
                ACLS
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-med-muted">{item.focus}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
