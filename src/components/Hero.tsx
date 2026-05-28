import { motion } from 'framer-motion'
import { getSimulatorHref, isExternalHref, trackCommercialEvent } from '../lib/commercial'

export function Hero() {
  const simulatorHref = getSimulatorHref()
  const simulatorIsExternal = isExternalHref(simulatorHref)
  const trustIndicators = [
    'Sesiones en equipo con roles instructor y participante',
    'Casos clínicos controlados por el instructor en tiempo real',
    'Cierre documentado con resumen exportable por sesión',
  ]

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-clinical-radial">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:28px_28px] opacity-[0.16]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[76rem] -translate-x-1/2 clinical-hairline" />
      <div className="pointer-events-none absolute -left-20 top-24 h-80 w-80 rounded-full bg-med-blue/16 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-96 w-96 rounded-full bg-med-ecg/8 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pb-16 pt-12 md:grid-cols-[0.96fr_1.04fr] md:gap-12 md:px-8 md:pb-20 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-med-cyan/30 bg-med-blue/10 px-3.5 py-1.5 shadow-blue">
            <span className="h-2 w-2 rounded-full bg-med-ecg shadow-glow" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-med-cyan">Simulador clínico para equipos de salud</span>
          </div>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.04] tracking-tight text-med-text md:text-5xl lg:text-6xl">
            Entrena equipos de reanimación.
            <span className="block bg-gradient-to-r from-med-ecg via-med-cyan to-med-blue bg-clip-text text-transparent">
              Documenta cada sesión.
            </span>
          </h1>

          <p className="max-w-2xl text-base leading-8 text-med-soft/88 md:text-lg">
            Universidades, OTEC y centros de simulación usan Monitor ACLS para ejecutar casos clínicos en equipo, con rol instructor y evidencia de sesión exportable. Sin hardware adicional.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={simulatorHref}
              target={simulatorIsExternal ? '_blank' : undefined}
              rel={simulatorIsExternal ? 'noreferrer' : undefined}
              onClick={() => trackCommercialEvent('click_simulator', { source: 'hero' })}
              className="group rounded-xl border border-med-ecg/40 bg-med-ecg/20 px-5 py-3 text-sm font-extrabold uppercase tracking-wider text-med-ecg shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-med-ecg/30"
            >
              Acceder al simulador
            </a>
            <a
              href="#contacto"
              onClick={() => trackCommercialEvent('click_demo', { source: 'hero' })}
              className="rounded-xl border border-med-blue/40 bg-med-blue/10 px-5 py-3 text-sm font-extrabold uppercase tracking-wider text-med-cyan transition duration-300 hover:-translate-y-0.5 hover:bg-med-blue/20"
            >
              Agendar demo
            </a>
            <a
              href="#como-funciona"
              className="rounded-xl border border-med-blue/40 bg-med-blue/10 px-5 py-3 text-sm font-extrabold uppercase tracking-wider text-med-cyan transition duration-300 hover:-translate-y-0.5 hover:bg-med-blue/20"
            >
              Ver cómo funciona
            </a>
          </div>

          <div className="grid gap-2">
            {trustIndicators.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-med-muted">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-med-ecg shadow-glow" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="grid max-w-2xl grid-cols-2 gap-3 pt-1 sm:grid-cols-4">
            {[
              ['Modalidad', 'Web clínica'],
              ['Roles', 'Instructor/alumno'],
              ['Evidencia', 'Debrief PDF'],
              ['Adopción', 'Institucional'],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl border border-white/10 bg-white/[0.04] p-3 shadow-card">
                <p className="text-[10px] uppercase tracking-wider text-med-muted">{k}</p>
                <p className="mt-1 text-sm font-extrabold text-med-text">{v}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="relative"
        >
          <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-med-blue/12 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-med-blue/30 bg-med-panel/95 p-3 shadow-enterprise md:p-4">
            <div className="absolute right-5 top-5 z-10 rounded-full border border-med-ecg/30 bg-black/55 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-med-ecg">
              Realtime
            </div>
            <div className="absolute left-5 top-5 z-10 hidden rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-med-soft/80 sm:block">
              Sesión ACLS
            </div>
            <picture>
              <source srcSet="/monitor-real-1.webp" type="image/webp" />
              <img
                src="/monitor-real-1.jpg"
                alt="Vista clínica de Monitor ACLS"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width="1280"
                height="720"
                className="h-auto w-full rounded-2xl border border-white/10 bg-black/40 object-cover shadow-[0_20px_70px_-38px_rgba(86,214,255,0.58)]"
              />
            </picture>
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
              {[
                ['Estado', 'Sesión activa'],
                ['Control', 'Instructor'],
                ['Salida', 'Debrief oficial'],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-white/10 bg-black/30 p-3">
                  <p className="text-[9px] uppercase tracking-wider text-med-muted">{k}</p>
                  <p className="mt-1 text-xs font-bold text-med-text">{v}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-6 left-5 hidden w-60 rounded-2xl border border-med-ecg/25 bg-med-bg/85 p-4 shadow-card backdrop-blur-md 2xl:block">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-med-ecg">Trazabilidad</p>
            <p className="mt-2 text-sm leading-relaxed text-med-soft">Registro de acciones, tiempos críticos y cierre pedagógico por sesión.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
