import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'

const benefits = [
  {
    title: 'Escalabilidad académica',
    value: 'Amplía práctica sin multiplicar hardware físico.',
  },
  {
    title: 'Trazabilidad docente',
    value: 'Debrief y reportes estructurados por sesión de equipo.',
  },
  {
    title: 'Estandarización operativa',
    value: 'Mismo marco de entrenamiento entre sedes e instructores.',
  },
  {
    title: 'Costo de entrenamiento controlado',
    value: 'Reduce dependencia de simulación presencial de alta fricción.',
  },
]

export function InstitutionalBenefits() {
  return (
    <section className="border-y border-white/10 bg-med-panel/55">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8">
        <SectionTitle
          eyebrow="Beneficios institucionales"
          title="Resultados que importan a coordinación académica"
        />
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, idx) => (
            <motion.article
              key={benefit.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="rounded-2xl border border-white/10 bg-med-card p-4"
            >
              <h3 className="text-sm font-black uppercase tracking-wider text-med-blue">{benefit.title}</h3>
              <p className="mt-2 text-sm text-med-muted">{benefit.value}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
