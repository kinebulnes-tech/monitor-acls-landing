import { motion } from 'framer-motion'

export function Hero() {
  const trustIndicators = [
    'Implementación institucional rápida',
    'Entrenamiento instructor/alumno',
    'Debrief y reporte PDF del equipo',
  ]

  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:24px_24px] opacity-20" />
      <div className="pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full bg-med-blue/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-16 h-80 w-80 rounded-full bg-med-ecg/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1fr_1fr] md:gap-14 md:px-8 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-med-blue/35 bg-med-blue/10 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-med-ecg" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-med-blue">Clinical Simulation SaaS</span>
          </div>

          <h1 className="text-4xl font-black leading-tight tracking-tight text-med-text md:text-6xl">
            Estandariza entrenamiento ACLS
            <span className="block text-med-ecg">con trazabilidad institucional</span>
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-med-muted md:text-lg">
            Plataforma clínica enterprise para universidades, OTEC, hospitales y centros de simulación.
            Ejecuta casos en tiempo real, evalúa desempeño del equipo y documenta resultados sin depender de hardware costoso.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contacto"
              className="rounded-xl border border-med-ecg/40 bg-med-ecg/20 px-5 py-3 text-sm font-black uppercase tracking-wider text-med-ecg transition hover:-translate-y-0.5 hover:bg-med-ecg/30"
            >
              Solicitar demo
            </a>
            <a
              href="https://app.monitoracls.com"
              className="rounded-xl border border-med-blue/40 bg-med-blue/10 px-5 py-3 text-sm font-black uppercase tracking-wider text-med-blue transition hover:-translate-y-0.5 hover:bg-med-blue/20"
            >
              Entrar al simulador
            </a>
          </div>

          <div className="space-y-2">
            {trustIndicators.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-med-muted">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-med-ecg" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="grid max-w-xl grid-cols-2 gap-3 pt-1 md:grid-cols-4">
            {[
              ['Modalidad', 'Web'],
              ['Flujo', 'Instructor/Alumno'],
              ['Debrief', 'Estructurado'],
              ['Salida', 'PDF Equipo'],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <p className="text-[10px] uppercase tracking-wider text-med-muted">{k}</p>
                <p className="mt-1 text-sm font-black text-med-text">{v}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="relative rounded-3xl border border-med-blue/30 bg-med-panel/95 p-4 shadow-blue"
        >
          <div className="absolute right-5 top-5 rounded-full border border-med-ecg/30 bg-med-ecg/10 px-2 py-1 text-[10px] font-black uppercase tracking-wider text-med-ecg">
            Realtime
          </div>
          <img
            src="/hero-monitor.svg"
            alt="Vista clínica de Monitor ACLS"
            loading="eager"
            className="h-auto w-full rounded-2xl border border-white/10 bg-black/40"
          />
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              ['Estado', 'Sesión activa'],
              ['Control', 'Instructor'],
              ['Salida', 'Debrief oficial'],
            ].map(([k, v]) => (
              <div key={k} className="rounded-lg border border-white/10 bg-black/30 p-2.5">
                <p className="text-[9px] uppercase tracking-wider text-med-muted">{k}</p>
                <p className="mt-1 text-xs font-bold text-med-text">{v}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
