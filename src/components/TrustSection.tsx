import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'

const trustItems = [
  'Diseño orientado a entrenamiento de equipos clínicos',
  'Flujo instructor/alumno para operación docente real',
  'Documentación de sesión con debrief y reporte exportable',
]

export function TrustSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8">
      <SectionTitle
        eyebrow="Confianza institucional"
        title="Preparado para evaluación técnica y académica"
      />
      <div className="grid gap-4 md:grid-cols-[1.2fr_1fr]">
        <motion.article
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="rounded-3xl border border-white/10 bg-med-card p-5"
        >
          <h3 className="text-xl font-black text-med-text">Estándar de implementación</h3>
          <p className="mt-2 text-sm text-med-muted">
            Estructura de adopción diseñada para procesos institucionales de capacitación, con foco en continuidad docente y trazabilidad.
          </p>
          <div className="mt-4 grid gap-2">
            {trustItems.map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-med-muted">
                {item}
              </div>
            ))}
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="rounded-3xl border border-med-blue/30 bg-med-card p-5"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-med-blue">Referencias</p>
          <h3 className="mt-2 text-xl font-black text-med-text">Evaluación comercial y técnica</h3>
          <p className="mt-2 text-sm text-med-muted">
            Disponible para evaluación por equipos académicos, coordinaciones clínicas e innovación educativa.
          </p>
          <a
            href="#contacto"
            className="mt-5 inline-flex rounded-xl border border-med-blue/35 bg-med-blue/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-med-blue transition hover:bg-med-blue/20"
          >
            Solicitar reunión técnica
          </a>
        </motion.article>
      </div>
    </section>
  )
}
