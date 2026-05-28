import { useState } from 'react'
import { getSimulatorHref, isExternalHref, trackCommercialEvent } from '../lib/commercial'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const simulatorHref = getSimulatorHref()
  const simulatorIsExternal = isExternalHref(simulatorHref)
  const links = [
    { href: '#como-funciona', label: 'Cómo funciona' },
    { href: '#micro-caso', label: 'Simulación' },
    { href: '#arquitectura', label: 'Proceso' },
    { href: '#planes', label: 'Planes' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-med-bg/88 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <div className="flex items-center gap-2.5">
          <div className="h-2.5 w-2.5 rounded-full bg-med-ecg shadow-glow" />
          <p className="text-sm font-extrabold tracking-wide text-med-text md:text-base">Monitor ACLS</p>
        </div>

        <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-wider text-med-muted md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
          <a
            href={simulatorHref}
            target={simulatorIsExternal ? '_blank' : undefined}
            rel={simulatorIsExternal ? 'noreferrer' : undefined}
            onClick={() => trackCommercialEvent('click_simulator', { source: 'navbar' })}
            className="rounded-lg border border-white/15 bg-white/[0.04] px-3 py-2 text-[11px] font-extrabold text-med-soft transition hover:border-med-cyan/35 hover:text-white"
          >
            Acceder al simulador
          </a>
          <a
            href="#contacto"
            onClick={() => trackCommercialEvent('click_demo', { source: 'navbar' })}
            className="rounded-lg border border-med-blue/35 bg-med-blue/10 px-3 py-2 text-[11px] font-extrabold text-med-cyan transition hover:bg-med-blue/20"
          >
            Agendar demo
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-med-text md:hidden"
        >
          Menú
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {links.map((link) => (
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
          </nav>
        </div>
      ) : null}
    </header>
  )
}
