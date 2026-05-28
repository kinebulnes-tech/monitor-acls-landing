import { motion } from 'framer-motion'

const features = [
  {
    title: 'Ritmos ACLS y BLS completos',
    body: 'FV, AESP, asistolia, bradicardias, taquicardias. El instructor controla el ritmo durante la sesión.',
  },
  {
    title: 'Monitor clínico en tiempo real',
    body: 'ECG, ETCO₂ y signos vitales dinámicos. El equipo lee el monitor como en una reanimación real.',
  },
  {
    title: 'Registro de acciones y tiempos',
    body: 'Cada intervención queda documentada con su timestamp. El debrief no depende de la memoria del instructor.',
  },
  {
    title: 'Reporte exportable por sesión',
    body: 'Resumen disponible para el programa, el equipo o el expediente académico.',
  },
  {
    title: 'Múltiples instructores, acceso web',
    body: 'Sin instalación. Sin hardware adicional. Implementación en menos de una sesión de trabajo.',
  },
]

export function ClinicalCapabilities() {
  return (
    <section className="border-y border-white/8 bg-med-bg" id="funciones">
      <div className="mx-auto w-full max-w-7xl px-5 py-20 md:px-8 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="flex flex-col justify-start lg:sticky lg:top-28 lg:self-start"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-med-cyan">
              Qué incluye
            </p>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.06] tracking-tight text-med-text md:text-5xl lg:text-[3.25rem]">
              Cada sesión entrena bajo el mismo estándar clínico.
            </h2>
            <p className="mt-5 max-w-sm text-base leading-8 text-med-muted">
              Sin depender de sala específica, equipamiento físico o disponibilidad de espacio. Monitor ACLS opera desde cualquier navegador web.
            </p>
            <div className="mt-8 flex flex-col gap-3 text-sm text-med-muted/80">
              {[
                'Acceso completo incluido en toda licencia',
                'Funciona directamente desde navegador web',
                'Sin hardware especializado',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <span className="h-px w-5 bg-med-ecg/60" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="divide-y divide-white/8">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="group py-7 first:pt-0 last:pb-0"
              >
                <div className="flex items-start gap-5">
                  <span className="mt-1 shrink-0 text-[11px] font-bold tabular-nums text-med-muted/50">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold tracking-tight text-med-text transition duration-200 group-hover:text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-med-muted">
                      {feature.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
