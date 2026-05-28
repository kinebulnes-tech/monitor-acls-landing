import { motion } from 'framer-motion'

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
      <div className="mx-auto w-full max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-med-cyan">El problema real</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-[1.06] tracking-tight text-med-text md:text-5xl">
            La mayoría de los equipos solo entrena cuando hay tiempo, espacio y equipamiento disponible.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-med-muted">
            Monitor ACLS no reemplaza la simulación presencial: la hace más continua, medible y fácil de coordinar entre instructores.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-med-red/20 bg-med-red/8 px-5 py-6 md:px-6"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-med-red/80">El problema</p>
            <h3 className="mt-3 text-xl font-extrabold tracking-tight text-med-text">Por qué el entrenamiento no se repite</h3>
            <div className="mt-5 divide-y divide-white/8">
              {problemItems.map((item, idx) => (
                <motion.p
                  key={item}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.35, delay: idx * 0.07 }}
                  className="py-4 text-sm leading-relaxed text-med-muted/90 first:pt-4"
                >
                  {item}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="rounded-2xl border border-med-ecg/18 bg-med-ecg/10 px-5 py-6 md:px-6"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-med-ecg/80">La solución</p>
            <h3 className="mt-3 text-xl font-extrabold tracking-tight text-med-text">Entrenamiento que se puede repetir, medir y documentar</h3>
            <div className="mt-5 divide-y divide-white/8">
              {solutionItems.map((item, idx) => (
                <motion.p
                  key={item}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.35, delay: idx * 0.07 }}
                  className="py-4 text-sm leading-relaxed text-med-soft/88 first:pt-4"
                >
                  {item}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
