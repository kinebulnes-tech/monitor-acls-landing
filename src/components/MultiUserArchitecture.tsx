import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'

const layers = [
  {
    role: 'Instructor',
    description: 'Configura caso, dirige la simulación y valida decisiones durante la sesión.',
  },
  {
    role: 'Alumno',
    description: 'Participa bajo supervisión, ejecuta flujo clínico y recibe feedback estructurado.',
  },
  {
    role: 'Coordinación académica',
    description: 'Consolida resultados y evidencia de entrenamiento en informes por sesión.',
  },
]

export function MultiUserArchitecture() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24" id="arquitectura">
      <SectionTitle
        eyebrow="Arquitectura multiusuario"
        title="Diseño operativo para entrenamiento en equipo"
        subtitle="Modelo claro de roles clínicos y académicos dentro de la misma plataforma."
      />

      <div className="enterprise-surface rounded-[1.75rem] p-4 md:p-6">
        <div className="grid gap-3 md:grid-cols-3">
          {layers.map((layer, idx) => (
            <motion.article
              key={layer.role}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="rounded-2xl border border-white/10 bg-black/25 p-5"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-med-blue">Rol {idx + 1}</p>
              <h3 className="mt-2 text-lg font-extrabold text-med-text">{layer.role}</h3>
              <p className="mt-2 text-sm leading-relaxed text-med-muted">{layer.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
