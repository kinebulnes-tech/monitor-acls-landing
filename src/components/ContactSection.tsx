import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'

export function ContactSection() {
  return (
    <section className="border-y border-white/10 bg-med-panel/60" id="contacto">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8">
        <SectionTitle
          eyebrow="Contacto"
          title="Inicia evaluación institucional"
          subtitle="Cuéntanos tu escenario docente y diseñamos una propuesta de implementación."
        />
        <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-2xl border border-white/10 bg-med-card p-5"
          >
            <h3 className="text-lg font-black text-med-text">Canales directos</h3>
            <div className="mt-4 space-y-3">
              <a href="https://wa.me/56942139337" className="block rounded-xl border border-med-ecg/30 bg-med-ecg/10 p-3 text-sm font-semibold text-med-ecg transition hover:bg-med-ecg/20">
                WhatsApp comercial: +56 9 4213 9337
              </a>
              <a href="mailto:kinebulnes@gmail.com" className="block rounded-xl border border-med-blue/30 bg-med-blue/10 p-3 text-sm font-semibold text-med-blue transition hover:bg-med-blue/20">
                Correo institucional: kinebulnes@gmail.com
              </a>
            </div>
            <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-3 text-xs text-white/60">
              Tiempo de respuesta objetivo: dentro de 1 día hábil.
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-2xl border border-white/10 bg-med-card p-5"
          >
            <h3 className="text-lg font-black text-med-text">Formulario consultivo enterprise</h3>
            <div className="mt-4 grid gap-3">
              <label className="grid gap-1.5 text-xs text-med-muted">
                Nombre y cargo
                <input
                  type="text"
                  placeholder="Ej: Coordinador de simulación"
                  className="rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 text-sm text-med-text outline-none placeholder:text-white/40 focus:border-med-blue/50"
                />
              </label>
              <label className="grid gap-1.5 text-xs text-med-muted">
                Correo institucional
                <input
                  type="email"
                  placeholder="nombre@institucion.cl"
                  className="rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 text-sm text-med-text outline-none placeholder:text-white/40 focus:border-med-blue/50"
                />
              </label>
              <label className="grid gap-1.5 text-xs text-med-muted">
                Institución
                <input
                  type="text"
                  placeholder="Ej: Universidad / OTEC / Hospital"
                  className="rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 text-sm text-med-text outline-none placeholder:text-white/40 focus:border-med-blue/50"
                />
              </label>
              <label className="grid gap-1.5 text-xs text-med-muted">
                Tipo de institución
                <select className="rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 text-sm text-med-text outline-none focus:border-med-blue/50">
                <option>Tipo de institución</option>
                <option>Universidad</option>
                <option>OTEC</option>
                <option>Hospital / Clínica</option>
                <option>Centro de simulación</option>
                </select>
              </label>
              <label className="grid gap-1.5 text-xs text-med-muted">
                Volumen estimado de alumnos/año
                <select className="rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 text-sm text-med-text outline-none focus:border-med-blue/50">
                <option>Volumen estimado de alumnos/año</option>
                <option>1–50</option>
                <option>51–200</option>
                <option>201–500</option>
                <option>500+</option>
                </select>
              </label>
              <label className="grid gap-1.5 text-xs text-med-muted">
                Objetivo y requerimientos
                <textarea
                  rows={4}
                  placeholder="Objetivo del programa, fecha estimada y requerimientos clave"
                  className="rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 text-sm text-med-text outline-none placeholder:text-white/40 focus:border-med-blue/50"
                />
              </label>
              <button
                type="button"
                className="rounded-xl border border-med-blue/35 bg-med-blue/10 px-4 py-2.5 text-sm font-black uppercase tracking-wider text-med-blue transition hover:bg-med-blue/20"
              >
                Solicitar evaluación
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
