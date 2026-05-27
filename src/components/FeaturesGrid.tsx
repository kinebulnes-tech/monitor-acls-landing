import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'

const features = [
  ['Ritmos clínicos', 'Manejo de ritmos ACLS/BLS para entrenamiento de decisiones en contexto.'],
  ['Terapias eléctricas', 'Desfibrilación y cardioversión simuladas en secuencia docente controlada.'],
  ['Monitor operativo', 'ECG y vitales dinámicos con estética clínica de alto nivel.'],
  ['Escenarios dirigidos', 'Casos reutilizables para práctica escalonada por complejidad.'],
  ['Evaluación del equipo', 'Registro de acciones, tiempos críticos y desempeño grupal.'],
  ['Debrief estructurado', 'Cierre pedagógico consistente por caso y por sesión.'],
  ['Reporte exportable', 'Salida PDF para trazabilidad institucional y académica.'],
  ['Licenciamiento institucional', 'Modelo operativo para programas formales de entrenamiento.'],
]

export function FeaturesGrid() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8" id="funciones">
      <SectionTitle
        eyebrow="Funcionalidades"
        title="Capacidades clínicas y operacionales"
        subtitle="Diseñadas para equipos que necesitan continuidad docente y calidad de ejecución."
      />
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        {features.map(([title, description], idx) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.03 }}
            className="rounded-xl border border-white/10 bg-med-card p-4 transition hover:border-med-blue/35 hover:bg-med-card/90"
          >
            <h3 className="text-sm font-black uppercase tracking-wider text-med-blue">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-med-muted">{description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
