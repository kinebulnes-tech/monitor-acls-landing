import { motion } from 'framer-motion'

interface SectionTitleProps {
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  tone?: 'default' | 'compact'
}

export function SectionTitle({ eyebrow, title, subtitle, align = 'center', tone = 'default' }: SectionTitleProps) {
  const isLeft = align === 'left'
  const isCompact = tone === 'compact'
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45 }}
      className={`${isCompact ? 'mb-6' : 'mb-9'} max-w-3xl ${isLeft ? '' : 'mx-auto text-center'}`}
    >
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.26em] text-med-cyan/80">{eyebrow}</p>
      <h2 className={`${isCompact ? 'text-2xl md:text-3xl' : 'text-3xl md:text-5xl'} max-w-4xl font-extrabold leading-tight tracking-tight text-med-text`}>
        {title}
      </h2>
      {subtitle ? <p className="mt-4 max-w-2xl text-sm leading-relaxed text-med-muted md:text-base">{subtitle}</p> : null}
    </motion.div>
  )
}
