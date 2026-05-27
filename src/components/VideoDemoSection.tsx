import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'

export function VideoDemoSection() {
  return (
    <section className="border-y border-white/10 bg-med-panel/55">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8">
        <SectionTitle
          eyebrow="Video demo"
          title="Demostración operacional de plataforma"
          subtitle="Bloque listo para incorporar video institucional de 60–90 segundos."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative overflow-hidden rounded-3xl border border-med-blue/30 bg-black/35 p-5"
        >
          <div className="aspect-video rounded-2xl border border-white/10 bg-gradient-to-br from-[#0e1a2e] via-[#0b1423] to-[#0b1018] p-6">
            <div className="flex h-full flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-white/20 bg-black/25">
              <span className="rounded-full border border-med-ecg/40 bg-med-ecg/10 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-med-ecg">
                Demo institucional
              </span>
              <p className="max-w-xl text-center text-sm text-med-muted">
                Reemplaza este bloque con video de plataforma en operación real: flujo instructor, ejecución de caso y debrief.
              </p>
              <button
                type="button"
                className="rounded-xl border border-med-blue/35 bg-med-blue/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-med-blue"
              >
                Ver demo guiada
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
