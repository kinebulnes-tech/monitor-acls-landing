export function Footer() {
  return (
    <footer className="bg-med-bg">
      <div className="mx-auto w-full max-w-7xl px-5 py-10 md:px-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-black tracking-wide text-med-text">Monitor ACLS</p>
            <p className="mt-1 text-xs text-med-muted">© {new Date().getFullYear()} Monitor ACLS. Todos los derechos reservados.</p>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-white/55">
              <a href="https://monitoracls.com" className="hover:text-white">monitoracls.com</a>
              <a href="https://app.monitoracls.com" className="hover:text-white">app.monitoracls.com</a>
            </div>
          </div>
          <div className="text-xs text-white/55">
            Herramienta educativa. No dispositivo médico real.
          </div>
        </div>
      </div>
    </footer>
  )
}
