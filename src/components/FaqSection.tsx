import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionTitle } from './SectionTitle'

const faqs = [
  {
    q: '¿Qué es Monitor ACLS?',
    a: 'Monitor ACLS es un simulador clínico digital para entrenamiento en soporte vital cardiovascular avanzado. Permite practicar protocolos, tomar decisiones en escenarios realistas y revisar retroalimentación estructurada, sin necesidad de equipos físicos.',
  },
  {
    q: '¿El simulador sigue guías clínicas reales?',
    a: 'Los escenarios y algoritmos están diseñados siguiendo referencias de guías de soporte vital ampliamente reconocidas. El contenido es revisado periódicamente. No representa ni garantiza equivalencia formal con ningún programa de certificación.',
  },
  {
    q: '¿Necesito maniquíes o equipos físicos para usarlo?',
    a: 'No. Monitor ACLS opera completamente en navegador. No requiere hardware adicional, maniquíes ni instalaciones especializadas.',
  },
  {
    q: '¿Se puede utilizar en cursos BLS y ACLS?',
    a: 'Sí. Incluye escenarios orientados a soporte vital básico y avanzado. Cada institución puede definir qué módulos incorpora a su programa de entrenamiento.',
  },
  {
    q: '¿Funciona en computadores y tablets?',
    a: 'Sí. La plataforma es responsive y está optimizada para uso en computadores de escritorio, laptops y tablets. El diseño se adapta automáticamente a cada pantalla.',
  },
  {
    q: '¿Necesita conexión permanente a internet?',
    a: 'La plataforma requiere conexión a internet para iniciar sesión y sincronizar progreso. Una vez cargada, la experiencia de simulación es fluida incluso con conexiones moderadas.',
  },
  {
    q: '¿Existe modo instructor?',
    a: 'Sí. Los docentes pueden supervisar el avance de sus estudiantes, asignar escenarios específicos y revisar métricas de desempeño por sesión. El modo instructor está disponible en planes institucionales.',
  },
  {
    q: '¿Se pueden crear distintos escenarios clínicos?',
    a: 'La plataforma incluye una biblioteca de escenarios prediseñados. La personalización avanzada de casos está disponible en planes institucionales; contáctanos para coordinar los detalles según tu programa.',
  },
  {
    q: '¿Incluye sonidos y monitorización realista?',
    a: 'Sí. El simulador incorpora audio clínico contextual (alarmas, ritmos cardíacos, respiración) y un monitor de signos vitales en tiempo real que responde a las acciones del usuario.',
  },
  {
    q: '¿Cómo funciona la licencia?',
    a: 'Las licencias individuales son de acceso personal por período definido. Las licencias institucionales se estructuran por número de usuarios o sedes. Coordinamos el modelo que mejor se adapte a tu organización.',
  },
  {
    q: '¿Recibiré actualizaciones?',
    a: 'Sí. Las actualizaciones de contenido y plataforma están incluidas durante el período de licencia activa, sin costo adicional.',
  },
  {
    q: '¿Puedo usarlo para capacitación institucional?',
    a: 'Sí. Monitor ACLS está diseñado para operar en entornos institucionales: hospitales, universidades, OTEC y centros de simulación. El plan institucional incluye soporte dedicado y herramientas de gestión multiusuario.',
  },
  {
    q: '¿Incluye soporte técnico?',
    a: 'Sí. Todos los planes incluyen soporte por correo electrónico. Los planes institucionales cuentan con soporte prioritario y acompañamiento en el proceso de adopción.',
  },
  {
    q: '¿El simulador reemplaza el entrenamiento práctico presencial?',
    a: 'No. Monitor ACLS es una herramienta de entrenamiento complementaria. No reemplaza la práctica con maniquíes, el trabajo clínico supervisado ni los programas de certificación presenciales.',
  },
]

function FaqItem({ item, index, isOpen, onToggle }: {
  item: { q: string; a: string }
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  const answerId = `faq-answer-${index}`
  const buttonId = `faq-btn-${index}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.3) }}
      className="border-b border-white/8 last:border-b-0"
    >
      <button
        id={buttonId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-med-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-med-blue/50 focus-visible:ring-offset-2 focus-visible:ring-offset-med-panel"
      >
        <span className="text-sm font-semibold leading-snug text-med-text md:text-[15px]">{item.q}</span>
        <span
          className="flex-shrink-0 text-med-blue/70 transition-transform duration-300"
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
          aria-hidden="true"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="9" y1="2" x2="9" y2="16" />
            <line x1="2" y1="9" x2="16" y2="9" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={answerId}
            key="answer"
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-med-muted">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  function toggle(index: number) {
    setOpenIndex(prev => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="border-t border-white/8 bg-med-bg">
      <div className="mx-auto w-full max-w-5xl px-5 py-16 md:px-8 md:py-24">
        <SectionTitle
          eyebrow="Preguntas frecuentes"
          title="Todo lo que necesitas saber antes de decidir"
          subtitle="Respuestas directas a las dudas más comunes de equipos clínicos, coordinadores y encargados institucionales."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-white/10 bg-med-panel px-5 md:px-8"
        >
          {faqs.map((item, index) => (
            <FaqItem
              key={item.q}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-8 rounded-xl border border-med-blue/25 bg-med-blue/12 px-6 py-5 text-center"
        >
          <p className="text-sm font-semibold text-med-text">
            ¿Tienes dudas sobre licencias institucionales?{' '}
            <a
              href="#contacto"
              className="inline-flex items-center gap-1 font-bold text-med-blue underline-offset-4 transition-colors hover:text-med-cyan hover:underline"
            >
              Escríbenos y coordinamos una demo
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" />
              </svg>
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
