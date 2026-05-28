import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'

const problemItems = [
  'Cada sesión requiere sala, maniquí y coordinación de agenda. Escalar es caro y lento.',
  'Cada instructor tiene su propio estilo. La estandarización entre sedes no existe.',
  'Al terminar la sesión, nadie sabe exactamente qué hizo cada participante.',
]

const solutionItems = [
  'Instructor activa el caso desde su dispositivo. El equipo responde en tiempo real desde los suyos.',
  'Mismo caso, mismo flujo, mismo criterio de evaluación. Siempre.',
  'Cada sesión genera un resumen exportable con acciones, tiempos y decisiones.',
]

export function ProblemSolution() {
  return (
    <section className="border-y border-white/10 bg-med-panel/50">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <SectionTitle
          eyebrow="El problema real"
          title="La mayoría de los equipos solo entrena cuando hay tiempo, espacio y equipamiento disponible. Eso no es suficiente."
          subtitle="Monitor ACLS no reemplaza la simulación presencial: la hace más continua, medible y fácil de coordinar entre instructores."
        />
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-[1.5rem] border border-med-red/20 bg-med-red/10 p-5 md:p-6"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-med-red/85">El problema</p>
            <h3 className="mt-2 text-2xl font-extrabold text-med-text">Por qué el entrenamiento no se repite</h3>
            <ul className="mt-5 space-y-3">
              {problemItems.map((item) => (
                <li key={item} className="rounded-xl border border-white/10 bg-black/20 p-3 text-sm leading-relaxed text-med-muted">{item}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="enterprise-surface rounded-[1.5rem] p-5 md:p-6"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-med-ecg">La solución</p>
            <h3 className="mt-2 text-2xl font-extrabold text-med-text">Entrenamiento que se puede repetir, medir y documentar</h3>
            <ul className="mt-5 space-y-3">
              {solutionItems.map((item) => (
                <li key={item} className="rounded-xl border border-med-ecg/15 bg-med-ecg/8 p-3 text-sm leading-relaxed text-med-soft/85">{item}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
