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
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8">
      <SectionTitle
        eyebrow="Producto en vivo"
        title="Interfaz clínica con sensación realtime"
        subtitle="Un entorno de simulación que se percibe operativo, no estático."
      />

      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <motion.article
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-3xl border border-med-blue/25 bg-med-card/80 p-4"
        >
          <div className="rounded-2xl border border-white/10 bg-black/45 p-4">
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
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2"
                >
                  <p className="text-[9px] uppercase tracking-wider text-med-muted">{k}</p>
                  <p className="mt-1 text-xs font-black text-med-text">{v}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.article>

        <div className="space-y-3">
          {[
            {
              title: 'Control instructor',
              text: 'Cambio de ritmo, intervenciones, pausa/reanudación y cierre de caso sin fricción operacional.',
            },
            {
              title: 'Vista alumno sincronizada',
              text: 'Seguimiento en tiempo real con dinámica docente guiada por el instructor.',
            },
            {
              title: 'Debrief documentado',
              text: 'Resumen de caso y exportación PDF para trazabilidad académica e institucional.',
            },
          ].map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="rounded-2xl border border-white/10 bg-med-card p-4"
            >
              <h3 className="text-sm font-black uppercase tracking-wider text-med-blue">{item.title}</h3>
              <p className="mt-2 text-sm text-med-muted">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
