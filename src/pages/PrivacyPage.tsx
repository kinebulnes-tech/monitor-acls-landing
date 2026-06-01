import { Link } from 'react-router-dom'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="mb-3 text-sm font-extrabold uppercase tracking-[0.15em] text-med-soft">{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-med-soft/80">{children}</div>
    </section>
  )
}

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-med-bg text-med-text">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-med-bg/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-3 px-5 md:px-8">
          <Link
            to="/"
            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-med-muted transition hover:text-med-soft"
          >
            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Volver al inicio
          </Link>
          <span className="text-white/20">·</span>
          <span className="text-xs text-med-muted">Monitor ACLS</span>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-5 py-12 md:px-8 md:py-16">
        <div className="mb-10">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-med-muted">Legal</p>
          <h1 className="text-2xl font-extrabold text-med-text md:text-3xl">Política de Privacidad</h1>
          <p className="mt-2 text-xs text-med-muted">Última actualización: junio 2025</p>
        </div>

        <div className="clinical-hairline mb-8 h-px w-full" aria-hidden="true" />

        <Section title="1. Responsable del tratamiento">
          <p>
            Monitor ACLS, operado por su equipo de desarrollo y comercialización, es responsable del
            tratamiento de los datos personales que se reciben a través de este sitio web y de las
            comunicaciones relacionadas con la contratación de licencias.
          </p>
          <p>Contacto: <a href="mailto:contacto@monitoracls.com" className="text-med-soft underline">contacto@monitoracls.com</a></p>
        </Section>

        <Section title="2. Datos que recopilamos">
          <p>Recopilamos únicamente los datos necesarios para gestionar tu licencia y brindarte soporte:</p>
          <ul className="ml-4 space-y-1.5 list-disc">
            <li>Nombre completo</li>
            <li>Correo electrónico de contacto</li>
            <li>Institución u organización, cuando corresponde</li>
            <li>Plan contratado (Individual o Institucional)</li>
            <li>Comprobante de pago proporcionado por el usuario</li>
            <li>Mensajes enviados por correo electrónico al equipo de soporte</li>
          </ul>
          <p>
            No recopilamos datos de pago directamente. Los pagos son procesados por Flow, plataforma
            externa de pagos, cuya política de privacidad es independiente de la nuestra.
          </p>
        </Section>

        <Section title="3. Finalidad del tratamiento">
          <p>Utilizamos tus datos exclusivamente para:</p>
          <ul className="ml-4 space-y-1.5 list-disc">
            <li>Verificar el pago y generar la licencia de acceso al simulador</li>
            <li>Enviarte tus credenciales de acceso</li>
            <li>Brindarte soporte técnico y comercial</li>
            <li>Gestión administrativa de licencias activas</li>
            <li>Comunicaciones relacionadas con tu plan contratado</li>
          </ul>
        </Section>

        <Section title="4. Compartición de datos">
          <p>
            No vendemos, cedemos ni comercializamos tus datos personales a terceros.
          </p>
          <p>
            Tus datos son tratados exclusivamente por el equipo de Monitor ACLS. No se comparten
            con plataformas de marketing ni con terceros no relacionados con la operación del servicio.
          </p>
        </Section>

        <Section title="5. Conservación de datos">
          <p>
            Conservamos tus datos durante el tiempo que tu licencia esté activa y por un período
            razonable posterior para efectos de soporte y respaldo. Puedes solicitar la eliminación
            de tus datos en cualquier momento escribiéndonos a{' '}
            <a href="mailto:contacto@monitoracls.com" className="text-med-soft underline">contacto@monitoracls.com</a>.
          </p>
        </Section>

        <Section title="6. Seguridad">
          <p>
            Adoptamos medidas técnicas y organizativas razonables para proteger tus datos contra
            accesos no autorizados, pérdida o alteración. Las comunicaciones con este sitio están
            protegidas mediante HTTPS.
          </p>
        </Section>

        <Section title="7. Tus derechos">
          <p>
            Tienes derecho a acceder, rectificar o solicitar la eliminación de tus datos personales.
            Para ejercer estos derechos, escríbenos a{' '}
            <a href="mailto:contacto@monitoracls.com" className="text-med-soft underline">contacto@monitoracls.com</a>.
          </p>
        </Section>

        <Section title="8. Cambios a esta política">
          <p>
            Podemos actualizar esta política de vez en cuando. Los cambios relevantes serán
            notificados por correo a los usuarios con licencias activas.
          </p>
        </Section>

        <div className="mt-10 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs text-med-muted">
          ¿Preguntas sobre privacidad?{' '}
          <a href="mailto:contacto@monitoracls.com" className="text-med-soft underline">
            contacto@monitoracls.com
          </a>
        </div>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-med-muted transition hover:text-med-soft"
          >
            Volver al inicio
          </Link>
        </div>
      </main>
    </div>
  )
}
