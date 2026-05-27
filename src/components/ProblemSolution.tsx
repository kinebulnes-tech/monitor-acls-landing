import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'

const problemItems = [
  'Sesiones ACLS con alta dependencia de infraestructura física y cupos limitados.',
  'Dificultad para estandarizar entrenamiento entre instructores y cohortes.',
  'Escasa trazabilidad posterior para evaluación académica o institucional.',
]

const solutionItems = [
  'Simulador web clínico con operación instructor/alumno en entorno realtime.',
  'Escenarios, ritmo y decisiones terapéuticas en flujo docente estructurado.',
  'Debrief y reporte exportable para consolidar evidencias de aprendizaje.',
]

export function ProblemSolution() {
  return (
    <section className="border-y border-white/10 bg-med-panel/60">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8">
        <SectionTitle
          eyebrow="Problema vs solución"
          title="De operación compleja a entrenamiento escalable"
          subtitle="Transforma simulación de alta fricción en una práctica continua y documentable."
        />
        <div className="grid gap-5 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-2xl border border-med-red/25 bg-med-red/10 p-5"
          >
            <h3 className="text-xl font-black text-med-text">Problema</h3>
            <ul className="mt-3 space-y-3">
              {problemItems.map((item) => (
                <li key={item} className="rounded-lg border border-white/10 bg-black/20 p-3 text-sm text-med-muted">{item}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-2xl border border-med-ecg/25 bg-med-ecg/10 p-5"
          >
            <h3 className="text-xl font-black text-med-text">Solución</h3>
            <ul className="mt-3 space-y-3">
              {solutionItems.map((item) => (
                <li key={item} className="rounded-lg border border-white/10 bg-black/20 p-3 text-sm text-med-muted">{item}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
