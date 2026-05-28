import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'

export function VideoDemoSection() {
  return (
    <section className="border-y border-white/10 bg-med-panel/50" id="demo">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <SectionTitle
          eyebrow="Demostración"
          title="Así se ve una sesión real"
          subtitle="Instructor configura el caso. Equipo responde en tiempo real. La sesión cierra con un resumen exportable."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="enterprise-surface relative overflow-hidden rounded-[1.75rem] p-3 md:p-5"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 rounded-full bg-med-blue/12 blur-3xl" />
          <div className="relative grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black/55">
              <img
                src="/monitor-real-2.jpg"
                alt="Preview de demo operacional Monitor ACLS"
                loading="lazy"
                className="h-full w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute left-4 top-4 rounded-full border border-med-ecg/35 bg-black/55 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-med-ecg">
                Demo guiada
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-extrabold text-med-text">Flujo instructor → equipo → debrief</p>
                  <p className="mt-1 max-w-xl text-xs leading-relaxed text-med-soft/75">
                    Flujo completo: caso clínico → decisiones del equipo → debrief documentado.
                  </p>
                </div>
                <a
                  href="#contacto"
                  className="inline-flex shrink-0 rounded-xl border border-med-blue/35 bg-med-blue/15 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-med-cyan transition hover:bg-med-blue/22"
                >
                  Agendar demo
                </a>
              </div>
            </div>

            <div className="grid content-between gap-3">
              {[
                ['01', 'Instructor activa el caso', 'Selecciona escenario, ritmo inicial y objetivos. En menos de dos minutos.'],
                ['02', 'El equipo responde', 'Decisiones clínicas en tiempo real, con intervención del instructor cuando corresponde.'],
                ['03', 'Sesión documentada', 'Resumen con acciones, tiempos y decisiones disponible al cerrar el caso.'],
              ].map(([step, title, text]) => (
                <div key={step} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-med-cyan">{step}</p>
                  <h3 className="mt-2 text-base font-extrabold text-med-text">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-med-muted">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
