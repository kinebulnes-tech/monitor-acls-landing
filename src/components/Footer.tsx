export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-med-bg">
      <div className="mx-auto w-full max-w-7xl px-5 py-10 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

          <div>
            <p className="text-sm font-extrabold tracking-wide text-med-text">Monitor ACLS</p>
            <p className="mt-1 text-xs text-med-muted">© {new Date().getFullYear()} Monitor ACLS. Todos los derechos reservados.</p>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-white/50">
              <a href="https://monitoracls.com" className="transition hover:text-white">monitoracls.com</a>
              <span aria-hidden="true">·</span>
              <a href="https://app.monitoracls.com" className="transition hover:text-white">app.monitoracls.com</a>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-xs text-white/50 md:items-end">
            <div className="flex flex-wrap gap-4">
              <a href="mailto:contacto@monitoracls.com" className="transition hover:text-white">
                contacto@monitoracls.com
              </a>
              <a href="https://wa.me/56942139337" className="transition hover:text-white">
                WhatsApp +56 9 4213 9337
              </a>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#contacto" className="transition hover:text-white">Política de Privacidad</a>
              <span aria-hidden="true">·</span>
              <a href="#contacto" className="transition hover:text-white">Términos de Uso</a>
            </div>
            <p className="text-white/35">Herramienta educativa. No dispositivo médico real.</p>
          </div>

        </div>
      </div>
    </footer>
  )
}
