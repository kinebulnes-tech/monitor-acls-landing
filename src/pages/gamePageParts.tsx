import { useEffect, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { trackCommercialEvent, type CommercialEventName } from '../lib/commercial'

/** Enlace a un juego: a dónde va y qué evento registra el clic. */
export interface GameLink {
  href: string
  event: CommercialEventName
  /** Abrir en otra pestaña (Código Vital) o en la misma (Peques: un niño no se pierde entre pestañas). */
  newTab: boolean
}

/** Título de la pestaña mientras se ve la página, y vuelta arriba al entrar. */
export function usePageTitle(title: string) {
  useEffect(() => {
    window.scrollTo(0, 0)
    const previous = document.title
    document.title = title
    return () => {
      document.title = previous
    }
  }, [title])
}

export function Shot({ src, alt, caption, width = 1600, height = 900 }: { src: string; alt: string; caption?: string; width?: number; height?: number }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-white/10 bg-med-panel shadow-card">
      <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" className="block h-auto w-full" />
      {caption ? <figcaption className="border-t border-white/10 px-4 py-3 text-xs leading-relaxed text-med-muted">{caption}</figcaption> : null}
    </figure>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.26em] text-med-cyan/80">{children}</p>
}

export function PlayButton({ game, source, label = 'Jugar ahora' }: { game: GameLink; source: string; label?: string }) {
  return (
    <a
      href={game.href}
      target={game.newTab ? '_blank' : undefined}
      rel={game.newTab ? 'noreferrer' : undefined}
      onClick={() => trackCommercialEvent(game.event, { source })}
      className="inline-flex items-center gap-2 rounded-xl border border-med-red/50 bg-med-red/20 px-5 py-3 text-sm font-extrabold uppercase tracking-wider text-white transition duration-300 hover:-translate-y-0.5 hover:bg-med-red/30"
    >
      {label}
      <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M5 3l6 5-6 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )
}

export function GameHeader({ name, game }: { name: string; game: GameLink }) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-med-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-5 md:px-8">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-med-muted transition hover:text-med-soft">
            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Monitor ACLS
          </Link>
          <span className="text-white/20">·</span>
          <span className="text-xs font-semibold text-med-soft">{name}</span>
        </div>
        <a
          href={game.href}
          target={game.newTab ? '_blank' : undefined}
          rel={game.newTab ? 'noreferrer' : undefined}
          onClick={() => trackCommercialEvent(game.event, { source: 'page_header' })}
          className="rounded-lg border border-med-red/40 bg-med-red/15 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-white transition hover:bg-med-red/25"
        >
          Jugar
        </a>
      </div>
    </header>
  )
}

export function GameFooter({ name }: { name: string }) {
  return (
    <footer className="border-t border-white/8 bg-med-bg">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 py-8 text-xs text-white/50 md:flex-row md:items-center md:justify-between md:px-8">
        <p>© {new Date().getFullYear()} Monitor ACLS · {name}</p>
        <div className="flex flex-wrap gap-4">
          <Link to="/" className="transition hover:text-white">monitoracls.com</Link>
          <a href="mailto:contacto@monitoracls.com" className="transition hover:text-white">contacto@monitoracls.com</a>
          <Link to="/privacidad" className="transition hover:text-white">Política de Privacidad</Link>
        </div>
      </div>
    </footer>
  )
}
