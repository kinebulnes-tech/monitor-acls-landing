import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { getSimulatorHref, isExternalHref, trackCommercialEvent } from '../lib/commercial'

const LINKS = [
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#micro-caso', label: 'Simulación' },
  // En pantallas medianas se ocultan para que la barra quepa en una línea.
  { href: '#arquitectura', label: 'Proceso', wide: true },
  { href: '#planes', label: 'Planes' },
  { href: '#faq', label: 'FAQ', wide: true },
  { href: '#contacto', label: 'Contacto' },
]

const GAMES = [
  { to: '/codigo-vital', name: 'Código Vital', detail: 'Emergencias en tiempo real', dot: 'bg-med-red' },
  { to: '/peques', name: 'Código Vital Peques', detail: 'Para niños de 5 a 7 años', dot: 'bg-med-ecg' },
]

/** Menú «Juegos»: se abre con clic o teclado y se cierra con Esc o al hacer clic fuera. */
function GamesMenu() {
  const [open, setOpen] = useState(false)
  const box = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const outside = (e: MouseEvent) => {
      if (box.current && !box.current.contains(e.target as Node)) setOpen(false)
    }
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', outside)
    document.addEventListener('keydown', esc)
    return () => {
      document.removeEventListener('mousedown', outside)
      document.removeEventListener('keydown', esc)
    }
  }, [open])

  return (
    <div ref={box} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className="flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider transition hover:text-white"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-med-red" aria-hidden="true" />
        Juegos
        <svg className={`h-3 w-3 transition ${open ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open ? (
        <div className="absolute right-0 top-full mt-3 w-64 rounded-xl border border-white/10 bg-med-panel p-2 normal-case tracking-normal shadow-enterprise">
          {GAMES.map((g) => (
            <Link key={g.to} to={g.to} onClick={() => setOpen(false)} className="flex items-start gap-2.5 rounded-lg px-3 py-2.5 transition hover:bg-white/[0.06]">
              <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${g.dot}`} aria-hidden="true" />
              <span>
                <span className="block text-sm font-bold text-med-text">{g.name}</span>
                <span className="block text-xs font-medium text-med-muted">{g.detail}</span>
              </span>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const simulatorHref = getSimulatorHref()
  const simulatorIsExternal = isExternalHref(simulatorHref)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-med-bg/88 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8">
        <div className="flex shrink-0 items-center gap-2.5">
          <div className="h-2.5 w-2.5 rounded-full bg-med-ecg shadow-glow" />
          <p className="text-sm font-extrabold tracking-wide text-med-text md:text-base">Monitor ACLS</p>
        </div>

        <nav className="hidden items-center gap-5 text-xs font-semibold uppercase tracking-wider text-med-muted lg:flex xl:gap-6">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className={`whitespace-nowrap transition hover:text-white ${link.wide ? 'hidden xl:inline' : ''}`}>
              {link.label}
            </a>
          ))}
          <GamesMenu />
          <a
            href={simulatorHref}
            target={simulatorIsExternal ? '_blank' : undefined}
            rel={simulatorIsExternal ? 'noreferrer' : undefined}
            onClick={() => trackCommercialEvent('click_simulator', { source: 'navbar' })}
            className="whitespace-nowrap rounded-lg border border-white/15 bg-white/[0.04] px-3 py-2 text-[11px] font-extrabold text-med-soft transition hover:border-med-cyan/35 hover:text-white"
          >
            Acceder al simulador
          </a>
          <a
            href="#contacto"
            onClick={() => trackCommercialEvent('click_demo', { source: 'navbar' })}
            className="whitespace-nowrap rounded-lg border border-med-blue/35 bg-med-blue/10 px-3 py-2 text-[11px] font-extrabold text-med-cyan transition hover:bg-med-blue/20"
          >
            Agendar demo
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="rounded-md border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-med-text lg:hidden"
        >
          Menú
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-2">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-semibold uppercase tracking-wider text-med-muted"
              >
                {link.label}
              </a>
            ))}
            <a
              href={simulatorHref}
              target={simulatorIsExternal ? '_blank' : undefined}
              rel={simulatorIsExternal ? 'noreferrer' : undefined}
              onClick={() => {
                setOpen(false)
                trackCommercialEvent('click_simulator', { source: 'mobile_nav' })
              }}
              className="rounded-lg border border-med-ecg/35 bg-med-ecg/10 px-3 py-2 text-xs font-extrabold uppercase tracking-wider text-med-ecg"
            >
              Acceder al simulador
            </a>
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="rounded-lg border border-med-blue/35 bg-med-blue/10 px-3 py-2 text-xs font-extrabold uppercase tracking-wider text-med-cyan"
            >
              Agendar demo
            </a>
            <p className="px-1 pt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-med-muted">Juegos gratuitos</p>
            {GAMES.map((g) => (
              <Link
                key={g.to}
                to={g.to}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-extrabold uppercase tracking-wider text-white"
              >
                <span className={`h-1.5 w-1.5 rounded-full ${g.dot}`} aria-hidden="true" />
                {g.name}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}
