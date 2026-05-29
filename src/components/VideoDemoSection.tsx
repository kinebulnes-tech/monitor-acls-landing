import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'
import { getSimulatorHref, isExternalHref, trackCommercialEvent } from '../lib/commercial'

export function VideoDemoSection() {
  const simulatorHref = getSimulatorHref()
  const simulatorIsExternal = isExternalHref(simulatorHref)

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
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
          className="enterprise-surface relative overflow-hidden rounded-[1.75rem] p-3 md:p-5"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 rounded-full bg-med-blue/12 blur-3xl" />

          <div className="relative grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
            {/* Video principal */}
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
                aria-label="Demostración de sesión clínica Monitor ACLS"
              >
                <source src="/videos/acls-video-convertido.mp4" type="video/mp4" />
              </video>

              {/* Overlay gradiente — legibilidad sin oscurecer el video */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

              {/* Badge superior */}
              <div className="absolute left-4 top-4 rounded-full border border-med-ecg/35 bg-black/55 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-med-ecg backdrop-blur-sm">
                Demo guiada
              </div>

              {/* CTA inferior */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-extrabold text-med-text">
                    Flujo instructor → equipo → debrief
                  </p>
                  <p className="mt-1 max-w-xl text-xs leading-relaxed text-med-soft/75">
                    Caso clínico en tiempo real con cierre documentado y exportable.
                  </p>
                </div>
                <div className="flex shrink-0 gap-2">
                  <a
                    href={simulatorHref}
                    target={simulatorIsExternal ? '_blank' : undefined}
                    rel={simulatorIsExternal ? 'noreferrer' : undefined}
                    onClick={() => trackCommercialEvent('click_simulator', { source: 'video_demo' })}
                    className="inline-flex rounded-xl border border-med-ecg/40 bg-med-ecg/20 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-med-ecg transition hover:bg-med-ecg/30"
                  >
                    Probar ahora
                  </a>
                  <a
                    href="#contacto"
                    onClick={() => trackCommercialEvent('click_demo', { source: 'video_demo' })}
                    className="inline-flex rounded-xl border border-med-blue/35 bg-med-blue/15 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-med-cyan transition hover:bg-med-blue/22"
                  >
                    Agendar demo
                  </a>
                </div>
              </div>
            </div>

            {/* Pasos laterales */}
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
