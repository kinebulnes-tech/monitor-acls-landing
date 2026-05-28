import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'

const faqs = [
  {
    q: '¿Monitor ACLS reemplaza certificaciones oficiales?',
    a: 'No. Es una plataforma educativa para entrenamiento y práctica guiada que complementa programas formales.',
  },
  {
    q: '¿Se puede implementar por cohorte o por sede?',
    a: 'Sí. Está orientado a operación institucional por equipos, con estructura multiusuario y flujo docente repetible.',
  },
  {
    q: '¿Qué necesito para empezar?',
    a: 'Una conversación de 30 minutos para entender tu programa. Nosotros configuramos el acceso.',
  },
]

export function TestimonialsFaq() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="enterprise-surface rounded-[1.5rem] p-6"
        >
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-med-cyan/80">Evaluación</p>
          <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-med-text">Confianza para decisión institucional</h3>
          <p className="mt-3 text-sm text-med-muted">
            Preparado para procesos de evaluación académica, técnica y comercial en entornos de simulación clínica.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {['Universidades', 'OTEC', 'Hospitales', 'Centros de simulación'].map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-black/25 px-3 py-2 text-xs font-semibold text-white/70">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-white/55">
            Referencias institucionales y casos de adopción disponibles durante proceso de evaluación comercial.
          </p>
        </motion.div>

        <div>
          <SectionTitle eyebrow="Antes de la demo" title="Lo que suelen preguntar antes de conocer la plataforma" align="left" />
          <div className="space-y-3">
            {faqs.map((item) => (
              <motion.article
                key={item.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-xl border border-white/10 bg-med-card/75 p-4"
              >
                <h4 className="text-sm font-extrabold text-med-text">{item.q}</h4>
                <p className="mt-2 text-sm text-med-muted">{item.a}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
