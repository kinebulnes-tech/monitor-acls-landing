import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'

const telemetry = [
  ['Ritmo', 'VF'],
  ['ETCO₂', '22 mmHg'],
  ['PA', '86/52'],
  ['RCP', 'Activa'],
]

export function RealtimeProductStage() {
  return (
    <section className="border-y border-white/10" id="como-funciona">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <SectionTitle
        eyebrow="Producto en vivo"
        title="Una sesión clínica que se percibe operativa, no decorativa"
        subtitle="El instructor controla el caso, el equipo responde al escenario y la plataforma conserva evidencia útil para el cierre académico."
      />

      <div className="grid items-center gap-6 lg:grid-cols-[1.46fr_0.9fr]">
        <motion.article
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="enterprise-surface relative overflow-hidden rounded-[1.75rem] p-3 md:p-4"
        >
          <div className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-med-blue/10 blur-3xl" />
          <div className="relative rounded-2xl border border-white/10 bg-black/40 p-3 md:p-4">
            <img
              src="/monitor-real-3.jpg"
              alt="Monitor ACLS en tiempo real"
              loading="lazy"
              className="h-auto w-full rounded-xl border border-white/10 object-cover shadow-[0_18px_40px_-30px_rgba(0,0,0,0.8)]"
            />
            <div className="mt-3 flex flex-wrap gap-2">
              {telemetry.map(([k, v], idx) => (
                <motion.div
                  key={k}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2"
                >
                  <p className="text-[9px] uppercase tracking-wider text-med-muted">{k}</p>
                  <p className="mt-1 text-xs font-extrabold text-med-text">{v}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.article>

        <div className="divide-y divide-white/8">
          {[
            {
              n: '01',
              title: 'Control instructor',
              text: 'Cambio de ritmo, intervenciones, pausa/reanudación y cierre de caso sin fricción operacional.',
            },
            {
              n: '02',
              title: 'Vista participante sincronizada',
              text: 'Seguimiento en tiempo real con dinámica docente guiada por el instructor.',
            },
            {
              n: '03',
              title: 'Debrief documentado',
              text: 'Resumen de caso y exportación PDF para trazabilidad académica e institucional.',
            },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="grid grid-cols-[2rem_1fr] gap-4 py-5 first:pt-0 last:pb-0"
            >
              <span className="mt-0.5 select-none text-2xl font-black leading-none tabular-nums text-white/[0.08]">
                {item.n}
              </span>
              <div>
                <h3 className="text-sm font-extrabold text-med-text">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-med-muted">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}
