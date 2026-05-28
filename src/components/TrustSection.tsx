import { motion } from 'framer-motion'

const items = [
  ['Adopción', 'Piloto guiado con tu equipo para validar el ajuste al programa.'],
  ['Operación', 'Flujo consistente que cualquier instructor puede ejecutar sin capacitación extensa.'],
  ['Evidencia', 'Resumen exportable por sesión para auditoría académica o institucional.'],
]

export function TrustSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-med-panel/55">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px clinical-hairline" />
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-med-cyan/80">
            Confianza institucional
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-med-text md:text-4xl">
            Preparado para evaluación técnica, académica y comercial.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-med-muted md:text-base">
            Monitor ACLS opera en programas formales de entrenamiento. Sin hardware adicional, con roles definidos y evidencia documentable por sesión.
          </p>
        </motion.div>

        <div className="flex flex-col gap-0">
          <div className="divide-y divide-white/8">
            {items.map(([title, text], idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.38, delay: idx * 0.06 }}
                className="py-6 first:pt-0"
              >
                <p className="text-sm font-extrabold text-med-text">{title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-med-muted">{text}</p>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#contacto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.38, delay: 0.18 }}
            className="mt-6 block rounded-2xl border border-med-ecg/30 bg-med-ecg/10 p-5 text-med-ecg transition duration-300 hover:bg-med-ecg/15"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.24em]">Siguiente paso</span>
            <span className="mt-2 block text-xl font-extrabold text-med-text">
              Agendar demo con tu equipo
            </span>
            <span className="mt-2 block text-sm leading-relaxed text-med-soft/80">
              Conversamos sobre tu programa y mostramos cómo funciona con tu institución.
            </span>
          </motion.a>
        </div>

      </div>
    </section>
  )
}
