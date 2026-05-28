import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'

const features = [
  ['Ritmos ACLS/BLS', 'FV, AESP, asistolia, taquicardias. El instructor cambia el ritmo cuando decide.'],
  ['Desfibrilación y cardioversión', 'Simuladas con secuencia correcta y feedback de timing.'],
  ['Monitor clínico dinámico', 'ECG, ETCO₂ y signos vitales actualizados durante el caso.'],
  ['Casos reutilizables', 'El mismo escenario puede repetirse con distintos grupos o configuraciones.'],
  ['Registro de acciones', 'Qué intervención hizo el equipo, en qué momento y en qué orden.'],
  ['Debrief estructurado', 'Cierre pedagógico que no depende de la memoria del instructor.'],
  ['Reporte exportable', 'Resumen del caso disponible para el programa, el equipo o el expediente académico.'],
  ['Licencia institucional', 'Operación para programas formales, cohortes y múltiples instructores.'],
]

export function FeaturesGrid() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24" id="funciones">
      <SectionTitle
        eyebrow="Funcionalidades"
        title="Lo que incluye cada sesión"
        subtitle="Diseñado con criterio clínico, no solo con criterio de software."
      />
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        {features.map(([title, description], idx) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.03 }}
            className="rounded-2xl border border-white/10 bg-med-card/70 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-med-blue/35 hover:bg-med-elevated/85"
          >
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-med-cyan">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-med-muted">{description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
