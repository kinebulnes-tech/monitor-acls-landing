import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'

const trustItems = [
  'Implementación para universidades, OTEC, hospitales y centros de simulación',
  'Roles instructor/alumno para operación docente real',
  'Debrief y reporte exportable como evidencia de sesión',
]

const institutionalBlocks = [
  ['Adopción', 'Piloto guiado, revisión de caso de uso y recomendación de modalidad.'],
  ['Operación', 'Sesiones recurrentes con flujo docente consistente entre instructores.'],
  ['Evidencia', 'Registro del caso, cierre pedagógico y salida documentable para coordinación.'],
  ['Soporte', 'Acompañamiento comercial y técnico durante evaluación institucional.'],
]

export function TrustSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-med-panel/55">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px clinical-hairline" />
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.86fr_1.14fr]">
        <motion.article
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="enterprise-surface rounded-[1.75rem] p-6"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-med-cyan/80">Confianza institucional</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-med-text md:text-5xl">
            Preparado para evaluación técnica, académica y comercial.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-med-muted md:text-base">
            La landing debe vender seriedad antes que espectáculo. Esta sección comunica operación, trazabilidad y soporte sin inventar clientes ni certificaciones.
          </p>
          <div className="mt-6 grid gap-2">
            {trustItems.map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-black/22 px-3 py-2 text-sm text-med-soft/85">
                {item}
              </div>
            ))}
          </div>
        </motion.article>

        <div className="grid gap-3 sm:grid-cols-2">
          {institutionalBlocks.map(([title, text], idx) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="rounded-2xl border border-white/10 bg-med-card/75 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-med-cyan/30"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-med-blue">Enterprise</p>
              <h3 className="mt-2 text-xl font-extrabold text-med-text">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-med-muted">{text}</p>
            </motion.article>
          ))}
          <motion.a
            href="#contacto"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: 0.18 }}
            className="rounded-2xl border border-med-ecg/30 bg-med-ecg/10 p-5 text-med-ecg transition duration-300 hover:-translate-y-0.5 hover:bg-med-ecg/15 sm:col-span-2"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.24em]">Siguiente paso</span>
            <span className="mt-2 block text-xl font-extrabold text-med-text">Solicitar evaluación institucional</span>
            <span className="mt-2 block text-sm leading-relaxed text-med-soft/80">
              Conversación consultiva para definir piloto, volumen de alumnos y modalidad de adopción.
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
