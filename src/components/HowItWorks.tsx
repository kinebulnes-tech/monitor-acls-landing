import { motion } from 'framer-motion'

const steps = [
  {
    n: '01',
    title: 'El instructor prepara el caso',
    detail:
      'Selecciona el escenario, define el ritmo inicial y activa la sesión. En menos de dos minutos desde cualquier navegador.',
    roles: ['Instructor'],
  },
  {
    n: '02',
    title: 'El equipo responde en tiempo real',
    detail:
      'Los participantes ven el monitor clínico y toman decisiones. El instructor puede intervenir, escalar el escenario o detener la sesión cuando decide.',
    roles: ['Instructor', 'Participantes'],
  },
  {
    n: '03',
    title: 'La sesión cierra con evidencia',
    detail:
      'El sistema genera un resumen con acciones, tiempos y decisiones. Disponible para el equipo, el instructor y coordinación académica.',
    roles: ['Instructor', 'Participantes', 'Coordinación'],
  },
]

export function HowItWorks() {
  return (
    <section className="border-y border-white/10 bg-med-panel/50">
      <span id="arquitectura" className="absolute -mt-20 block" aria-hidden="true" />

      <div className="mx-auto w-full max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl md:mb-16"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-med-cyan">
            Cómo funciona
          </p>
          <h2 className="mt-4 text-4xl font-extrabold leading-[1.06] tracking-tight text-med-text md:text-5xl">
            Una sesión coordinada,<br className="hidden sm:block" /> de principio a fin.
          </h2>
          <p className="mt-4 text-base text-med-muted">
            El instructor controla. El equipo responde. La plataforma registra.
          </p>
        </motion.div>

        <div className="divide-y divide-white/8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="group grid grid-cols-[3rem_1fr] gap-x-5 py-8 md:grid-cols-[3.5rem_1fr_auto] md:gap-x-8 first:pt-0 last:pb-0"
            >
              <span className="mt-0.5 select-none text-4xl font-black leading-none tabular-nums text-white/[0.07] transition duration-300 group-hover:text-white/12 md:text-5xl">
                {step.n}
              </span>

              <div className="min-w-0">
                <h3 className="text-lg font-extrabold tracking-tight text-med-text md:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-med-muted">
                  {step.detail}
                </p>
              </div>

              <div className="col-start-2 mt-3 flex flex-wrap gap-1.5 md:col-auto md:mt-0.5 md:flex-col md:items-end md:gap-1.5">
                {step.roles.map((role) => (
                  <span
                    key={role}
                    className="inline-block rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-med-muted/80"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
