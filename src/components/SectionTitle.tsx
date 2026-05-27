import { motion } from 'framer-motion'

interface SectionTitleProps {
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionTitle({ eyebrow, title, subtitle, align = 'center' }: SectionTitleProps) {
  const isLeft = align === 'left'
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45 }}
      className={`mb-8 max-w-3xl ${isLeft ? '' : 'mx-auto text-center'}`}
    >
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-med-blue/80">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-med-text md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-sm text-med-muted md:text-base">{subtitle}</p> : null}
    </motion.div>
  )
}
