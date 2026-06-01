import { Link } from 'react-router-dom'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="mb-3 text-sm font-extrabold uppercase tracking-[0.15em] text-med-soft">{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-med-soft/80">{children}</div>
    </section>
  )
}

export function TermsPage() {
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
          <h1 className="text-2xl font-extrabold text-med-text md:text-3xl">Términos y Condiciones</h1>
          <p className="mt-2 text-xs text-med-muted">Última actualización: junio 2025</p>
        </div>

        <div className="clinical-hairline mb-8 h-px w-full" aria-hidden="true" />

        <Section title="1. Descripción del servicio">
          <p>
            Monitor ACLS es una plataforma de simulación clínica educativa orientada al entrenamiento
            en protocolos ACLS (Advanced Cardiovascular Life Support) y BLS (Basic Life Support).
            Está diseñada para instructores, equipos de salud, OTEC, universidades y centros de
            simulación que requieren práctica de escenarios clínicos.
          </p>
        </Section>

        <Section title="2. Uso educativo — limitación de responsabilidad">
          <p>
            Monitor ACLS es una herramienta exclusivamente educativa y de entrenamiento. No es un
            dispositivo médico certificado ni reemplaza la atención clínica real.
          </p>
          <p>
            El uso del simulador no constituye por sí solo certificación oficial en ACLS, BLS ni
            ningún otro protocolo de emergencia. La certificación oficial requiere programas
            acreditados por las instituciones competentes.
          </p>
          <p>
            Monitor ACLS no asume responsabilidad por decisiones clínicas reales tomadas como
            resultado del uso de esta plataforma.
          </p>
        </Section>

        <Section title="3. Licencias de uso">
          <p>
            Al contratar un plan, Monitor ACLS otorga al usuario o institución una licencia de uso
            personal, no exclusiva e intransferible para acceder al simulador según las condiciones
            del plan contratado:
          </p>
          <ul className="ml-4 space-y-1.5 list-disc">
            <li>
              <span className="font-semibold text-med-soft">Plan Individual:</span> acceso para un
              instructor. No incluye cesión a terceros.
            </li>
            <li>
              <span className="font-semibold text-med-soft">Plan Institucional:</span> acceso para
              2 instructores incluidos, con posibilidad de licencias adicionales según condiciones
              vigentes.
            </li>
          </ul>
        </Section>

        <Section title="4. Proceso de activación">
          <p>
            La activación de licencias es <span className="font-semibold text-med-soft">manual</span>.
            Una vez realizado el pago mediante Flow, el usuario debe enviar a{' '}
            <a href="mailto:contacto@monitoracls.com" className="text-med-soft underline">contacto@monitoracls.com</a>:
          </p>
          <ul className="ml-4 space-y-1.5 list-disc">
            <li>Comprobante de pago emitido por Flow</li>
            <li>Nombre completo</li>
            <li>Correo de contacto</li>
            <li>Plan contratado</li>
            <li>Institución, si corresponde</li>
          </ul>
          <p>
            La licencia será generada por el equipo de Monitor ACLS dentro del horario laboral
            (lunes a viernes, 9–18 h, hora Chile) una vez verificado el pago.
          </p>
        </Section>

        <Section title="5. Pagos">
          <p>
            Los pagos son procesados por Flow, plataforma de pagos independiente. Monitor ACLS no
            almacena datos de tarjetas ni medios de pago. Los precios están expresados en dólares
            estadounidenses (USD) e incluyen acceso al simulador según el plan elegido.
          </p>
          <p>
            Los precios pueden actualizarse. Las licencias activas mantienen las condiciones del
            plan contratado durante su vigencia.
          </p>
        </Section>

        <Section title="6. Prohibiciones de uso">
          <p>Está expresamente prohibido:</p>
          <ul className="ml-4 space-y-1.5 list-disc">
            <li>Redistribuir, revender o sublicenciar el acceso a terceros</li>
            <li>Compartir credenciales de acceso fuera del número de licencias contratadas</li>
            <li>Reproducir, modificar o extraer contenido del simulador sin autorización escrita</li>
            <li>Usar la plataforma con fines distintos al entrenamiento educativo</li>
          </ul>
        </Section>

        <Section title="7. Propiedad intelectual">
          <p>
            Todo el contenido de Monitor ACLS — incluyendo el simulador, protocolos, interfaz,
            textos y materiales — es propiedad de Monitor ACLS o sus licenciantes. Queda prohibida
            su reproducción total o parcial sin autorización expresa por escrito.
          </p>
        </Section>

        <Section title="8. Modificaciones del servicio">
          <p>
            Monitor ACLS se reserva el derecho de modificar, actualizar o descontinuar funciones
            del servicio, notificando a los usuarios con licencias activas con anticipación
            razonable cuando el cambio sea relevante.
          </p>
        </Section>

        <Section title="9. Ley aplicable">
          <p>
            Estos términos se rigen por la legislación vigente en la República de Chile. Cualquier
            disputa será sometida a los tribunales ordinarios de justicia correspondientes.
          </p>
        </Section>

        <Section title="10. Contacto">
          <p>
            Para consultas sobre estos términos, escríbenos a{' '}
            <a href="mailto:contacto@monitoracls.com" className="text-med-soft underline">
              contacto@monitoracls.com
            </a>.
          </p>
        </Section>

        <div className="mt-10 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs text-med-muted">
          ¿Preguntas sobre estos términos?{' '}
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
