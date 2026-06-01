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

        <Section title="1. Aceptación">
          <p>
            Al realizar una compra en <strong className="text-med-soft">monitoracls.com</strong> o al
            utilizar el servicio, el usuario acepta íntegramente estos Términos y Condiciones. Si no
            estás de acuerdo con alguno de ellos, no realices la contratación.
          </p>
          <p className="text-med-muted/70">
            Estos términos se rigen por la{' '}
            <span className="font-semibold text-med-soft/80">Ley N° 19.496</span> sobre Protección
            de los Derechos de los Consumidores y demás normativa vigente en Chile.
          </p>
        </Section>

        <Section title="2. Descripción del servicio">
          <p>
            Monitor ACLS es una plataforma de simulación clínica educativa orientada al entrenamiento
            en protocolos ACLS (Advanced Cardiovascular Life Support) y BLS (Basic Life Support).
            Está diseñada para instructores, equipos de salud, OTEC, universidades y centros de
            simulación que requieren práctica de escenarios clínicos.
          </p>
        </Section>

        <Section title="3. Uso educativo — limitación de responsabilidad">
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
            resultado del uso de esta plataforma. La responsabilidad máxima de Monitor ACLS ante
            el usuario, bajo cualquier circunstancia, no excederá el monto pagado por la
            licencia contratada.
          </p>
        </Section>

        <Section title="4. Licencias de uso">
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

        <Section title="5. Proceso de activación">
          <p>
            La activación de licencias es <span className="font-semibold text-med-soft">manual</span>.
            Una vez realizado el pago mediante Flow, el usuario debe completar el formulario de
            activación disponible en la página de confirmación de pago, o bien enviar la
            información a{' '}
            <a href="mailto:contacto@monitoracls.com" className="text-med-soft underline">
              contacto@monitoracls.com
            </a>:
          </p>
          <ul className="ml-4 space-y-1.5 list-disc">
            <li>Nombre completo</li>
            <li>Correo de contacto</li>
            <li>Plan contratado</li>
            <li>Número de operación o referencia de pago proporcionado por Flow</li>
            <li>Institución, si corresponde</li>
          </ul>
          <p>
            La licencia será generada por el equipo de Monitor ACLS dentro del horario laboral
            (lunes a viernes, 9–18 h, hora Chile) una vez verificado el pago en Flow.
          </p>
        </Section>

        <Section title="6. Pagos">
          <p>
            Los pagos son procesados por Flow (<span className="text-med-soft/80">www.flow.cl</span>),
            plataforma de pagos independiente con sus propias políticas de seguridad. Monitor ACLS
            no almacena datos de tarjetas ni medios de pago.
          </p>
          <p>
            Los precios están expresados en dólares estadounidenses (USD) e incluyen acceso al
            simulador según el plan elegido. Los precios pueden actualizarse; las licencias activas
            mantienen las condiciones del plan contratado durante su vigencia.
          </p>
        </Section>

        <Section title="7. Derecho a retracto y política de reembolsos">
          <p>
            Conforme al <span className="font-semibold text-med-soft/90">artículo 3 bis de la
            Ley N° 19.496</span>, el consumidor tiene derecho a retractarse de la compra dentro
            de <span className="font-semibold text-med-soft/90">10 días hábiles</span> contados
            desde la contratación, siempre que no haya hecho uso del servicio.
          </p>
          <p>
            El derecho a retracto <span className="font-semibold text-med-soft/90">no aplica</span>{' '}
            una vez que se han entregado las credenciales de acceso al simulador, ya que el servicio
            digital ha comenzado a ejecutarse a solicitud expresa del usuario.
          </p>
          <p>
            Para solicitar un reembolso dentro del plazo legal, envía tu solicitud a{' '}
            <a href="mailto:contacto@monitoracls.com" className="text-med-soft underline">
              contacto@monitoracls.com
            </a>{' '}
            indicando el número de operación Flow. El reembolso se tramita a través del mismo medio
            de pago utilizado en un plazo de hasta{' '}
            <span className="font-semibold text-med-soft/90">15 días hábiles</span>, sujeto a
            confirmación de Flow.
          </p>
        </Section>

        <Section title="8. Prohibiciones de uso">
          <p>Está expresamente prohibido:</p>
          <ul className="ml-4 space-y-1.5 list-disc">
            <li>Redistribuir, revender o sublicenciar el acceso a terceros</li>
            <li>Compartir credenciales de acceso fuera del número de licencias contratadas</li>
            <li>Reproducir, modificar o extraer contenido del simulador sin autorización escrita</li>
            <li>Usar la plataforma con fines distintos al entrenamiento educativo</li>
          </ul>
          <p>
            El incumplimiento de estas prohibiciones faculta a Monitor ACLS para suspender o
            cancelar la licencia sin reembolso.
          </p>
        </Section>

        <Section title="9. Propiedad intelectual">
          <p>
            Todo el contenido de Monitor ACLS — incluyendo el simulador, protocolos, interfaz,
            textos y materiales — es propiedad de Monitor ACLS o sus licenciantes. Queda prohibida
            su reproducción total o parcial sin autorización expresa por escrito.
          </p>
        </Section>

        <Section title="10. Fuerza mayor">
          <p>
            Monitor ACLS no será responsable por incumplimientos o retrasos causados por hechos
            fuera de su control razonable, incluyendo fallas de infraestructura de terceros, cortes
            de conectividad, desastres naturales, actos de autoridad o cualquier otro evento de
            fuerza mayor. Ante tales circunstancias, el plazo de cumplimiento se extenderá
            proporcionalmente.
          </p>
        </Section>

        <Section title="11. Modificaciones del servicio">
          <p>
            Monitor ACLS se reserva el derecho de modificar, actualizar o descontinuar funciones
            del servicio, notificando a los usuarios con licencias activas con al menos{' '}
            <span className="font-semibold text-med-soft/90">15 días de anticipación</span> cuando
            el cambio sea relevante o afecte las condiciones contratadas.
          </p>
        </Section>

        <Section title="12. Ley aplicable y tribunales competentes">
          <p>
            Estos términos se rigen por la legislación vigente en la República de Chile. Cualquier
            disputa derivada de estos términos será sometida a los{' '}
            <span className="font-semibold text-med-soft/90">tribunales ordinarios de justicia
            de Santiago, Chile</span>, salvo que la normativa de protección al consumidor disponga
            un fuero diferente en beneficio del usuario.
          </p>
        </Section>

        <Section title="13. Contacto">
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
