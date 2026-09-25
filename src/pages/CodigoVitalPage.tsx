import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { trackCommercialEvent } from '../lib/commercial'

const GAME_URL = 'https://codigovital.monitoracls.com'

function Shot({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-white/10 bg-med-panel shadow-card">
      <img src={src} alt={alt} width={1600} height={900} loading="lazy" decoding="async" className="block aspect-video w-full object-cover" />
      {caption ? <figcaption className="border-t border-white/10 px-4 py-3 text-xs leading-relaxed text-med-muted">{caption}</figcaption> : null}
    </figure>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.26em] text-med-cyan/80">{children}</p>
}

function PlayButton({ source, label = 'Jugar ahora' }: { source: string; label?: string }) {
  return (
    <a
      href={GAME_URL}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackCommercialEvent('click_codigo_vital', { source })}
      className="inline-flex items-center gap-2 rounded-xl border border-med-red/50 bg-med-red/20 px-5 py-3 text-sm font-extrabold uppercase tracking-wider text-white transition duration-300 hover:-translate-y-0.5 hover:bg-med-red/30"
    >
      {label}
      <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M5 3l6 5-6 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )
}

const MECHANICS = [
  {
    title: 'El reloj no se detiene',
    text: 'Cada acción consume segundos y, mientras se ejecuta, no se puede hacer otra cosa. Los signos vitales se conocen recién después de evaluarlos, y el paciente mejora o empeora según lo que se hace y lo que se deja de hacer.',
  },
  {
    title: 'Compresiones al ritmo',
    text: 'La RCP se realiza tocando la pantalla o la barra espaciadora. Un metrónomo marca 110 por minuto y el panel muestra la frecuencia y la fracción de compresión. Cuando hay alguien a quien pedirle relevo, el cansancio también cuenta: después de unos dos minutos las compresiones pierden profundidad.',
  },
  {
    title: 'El DEA funciona como el equipo real',
    text: 'Hay que encenderlo, pegar los parches y seguir sus instrucciones de voz. Si alguien toca al paciente durante el análisis, el equipo lo detecta y el análisis se reinicia.',
  },
  {
    title: 'Decisiones sin pistas',
    text: 'Todas las acciones del caso están disponibles desde el inicio. Elegir una que no corresponde cuesta tiempo, igual que en la calle. El diagnóstico no aparece escrito: hay que reconocerlo a partir de lo que se observa.',
  },
  {
    title: 'Entrega y revisión',
    text: 'Al entregar al paciente, quien lo recibe pregunta por datos de esa misma partida: la hora del torniquete, cuántas descargas se dieron o cuánto duró la crisis. La revisión final califica cada paso y cita la guía que lo respalda.',
  },
]

const MODES = [
  {
    name: 'Carrera',
    image: '/codigo-vital/mapa.webp',
    alt: 'Mapa de la carrera con los cinco casos del primer turno unidos por una ruta',
    text: 'Cuatro turnos que siguen el crecimiento del rol: de franco, sin más equipo que las propias manos; en servicio, con una ambulancia básica completa; en un equipo avanzado, liderando un paro con monitor y fármacos; y como jefe de escena, clasificando víctimas con START. Cada turno se abre con dos estrellas en tres casos del anterior.',
  },
  {
    name: 'Modo clase',
    image: '/codigo-vital/clase.webp',
    alt: 'Pregunta de alternativas del modo clase durante un paro presenciado',
    text: 'Todos los casos quedan abiertos y la pantalla está pensada para proyectar. La simulación se detiene en las decisiones clave con una pregunta de alternativas, muestra la respuesta correcta y la guía que la sustenta, y cada prólogo termina con una pregunta para abrir la conversación con el curso.',
  },
]

const TOPICS = [
  {
    level: 'Turno 1 · De franco',
    items: ['Obstrucción de la vía aérea por cuerpo extraño', 'Hemorragia exanguinante de extremidad', 'Paro cardiorrespiratorio presenciado y uso del DEA', 'Alteración de conciencia en una persona con diabetes', 'Crisis convulsiva en un lugar público'],
  },
  {
    level: 'Turno 2 · En servicio',
    items: ['Accidente cerebrovascular y hora de inicio', 'Dolor torácico que evoluciona a paro', 'Anafilaxia por picadura', 'Crisis asmática grave', 'Colisión vehicular con compromiso de la vía aérea'],
  },
  {
    level: 'Turno 3 · Equipo avanzado',
    items: ['Paro desfibrilable liderado con monitor', 'Politraumatizado con hemorragia, pelvis y neumotórax', 'Paro en lactante de causa respiratoria', 'Parto en domicilio y recién nacido'],
  },
  {
    level: 'Turno 4 · Jefe de escena',
    items: ['Múltiples víctimas y triage START', 'Adulta mayor anticoagulada que se complica con el paso de los minutos'],
  },
]

const TECH = [
  ['Dónde se juega', 'En el navegador de un computador, un celular, una tablet o un proyector. Se puede instalar como aplicación.'],
  ['Conexión', 'Después de la primera carga funciona sin internet, también en un cuartel o en un traslado sin señal.'],
  ['Cuenta', 'No requiere registro. El progreso se guarda solo en el dispositivo y no se envía a ningún servidor.'],
  ['Voz y sonido', 'Narración en español con las voces instaladas en el equipo, sonido clínico y música que acompaña la gravedad del caso. Las voces disponibles varían según el dispositivo.'],
  ['Accesibilidad', 'Alto contraste, control completo con teclado, respeto de la preferencia de reducir movimiento y vibración opcional en el celular.'],
  ['Costo', 'Gratuito.'],
]

export function CodigoVitalPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const previous = document.title
    document.title = 'Código Vital · Juego gratuito de emergencias prehospitalarias · Monitor ACLS'
    return () => {
      document.title = previous
    }
  }, [])

  return (
    <div className="min-h-screen bg-med-bg text-med-text">
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
            <span className="text-xs font-semibold text-med-soft">Código Vital</span>
          </div>
          <a
            href={GAME_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackCommercialEvent('click_codigo_vital', { source: 'page_header' })}
            className="rounded-lg border border-med-red/40 bg-med-red/15 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-white transition hover:bg-med-red/25"
          >
            Jugar
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/10 bg-clinical-radial">
          <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:28px_28px] opacity-[0.12]" />
          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pb-16 pt-12 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:pb-20 md:pt-16">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-med-red/35 bg-med-red/10 px-3.5 py-1.5">
                <span className="h-2 w-2 rounded-full bg-med-red" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-med-soft">Juego gratuito · Atención prehospitalaria</span>
              </div>
              <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">Código Vital</h1>
              <p className="max-w-xl text-base leading-8 text-med-soft/90 md:text-lg">
                Un juego de casos prehospitalarios en tiempo real. Quien juega llega a la escena, evalúa, decide y actúa mientras el paciente evoluciona según lo que hace. Al terminar, una revisión detallada muestra qué se hizo bien, qué faltó y en qué guía se sustenta cada punto.
              </p>
              <p className="max-w-xl text-sm leading-7 text-med-muted">
                Está desarrollado en Bulnes para la formación de bomberos, rescatistas y equipos de salud, y para cualquier persona que quiera aprender a responder mejor ante una emergencia.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <PlayButton source="page_hero" />
                <a href="#clases" className="rounded-xl border border-med-blue/40 bg-med-blue/10 px-5 py-3 text-sm font-extrabold uppercase tracking-wider text-med-cyan transition duration-300 hover:-translate-y-0.5 hover:bg-med-blue/20">
                  Uso en clases
                </a>
              </div>
              <ul className="grid max-w-xl grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
                {[
                  ['16', 'casos clínicos'],
                  ['4', 'turnos de carrera'],
                  ['Gratis', 'sin registro'],
                  ['Offline', 'tras la primera carga'],
                ].map(([value, label]) => (
                  <li key={label} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3">
                    <b className="block text-xl font-extrabold text-med-text">{value}</b>
                    <span className="text-[11px] leading-tight text-med-muted">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Shot src="/codigo-vital/portada.webp" alt="Portada de Código Vital: una ambulancia frente al cuartel en una noche de lluvia" />
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid items-start gap-10 md:grid-cols-[1.05fr_0.95fr]">
            <div className="md:sticky md:top-24">
              <Eyebrow>Cómo se juega</Eyebrow>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">Cada segundo tiene un costo</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-med-muted md:text-base">
                Las acciones toman el tiempo que toman en la realidad, y el estado del paciente lo calcula un motor fisiológico común a todos los casos.
              </p>
              <div className="mt-8">
                <Shot src="/codigo-vital/rcp.webp" alt="Caso en curso: reanimación en la feria con el panel de compresiones y el de acciones" caption="Paro presenciado en la feria: compresiones en rango, testigo en camino con el DEA y SAMU a menos de cinco minutos." />
              </div>
            </div>
            <ol className="space-y-4">
              {MECHANICS.map((item) => (
                <li key={item.title} className="rounded-2xl border border-white/10 bg-med-panel/70 p-5">
                  <h3 className="text-lg font-extrabold text-med-text">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-med-soft/85">{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-y border-white/10 bg-med-bg2">
          <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <div className="max-w-3xl">
              <Eyebrow>Antes y después del caso</Eyebrow>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">La historia también es parte del entrenamiento</h2>
              <p className="mt-4 text-sm leading-7 text-med-muted md:text-base">
                Cada caso comienza con un prólogo breve. En el primer turno es lo que el jugador alcanzó a ver; desde el segundo, la llamada al 131 y la radio de la central. Los personajes hablan con voces distintas, y lo que ocurre en esa escena, una hora en el reloj, un objeto o el comentario equivocado de un testigo, vuelve a ser necesario durante la atención.
              </p>
              <p className="mt-3 text-sm leading-7 text-med-muted md:text-base">
                Al cierre, el epílogo muestra cómo siguió la historia. Si la atención no alcanzó, el paciente fallece y el médico de turno da la noticia a la familia. La revisión muestra después los pasos que faltaron y los errores críticos.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <Shot src="/codigo-vital/prologo.webp" alt="Prólogo: un hombre mayor se frota el pecho mientras la casera le pregunta si se siente bien" caption="Prólogo: los signos de alarma aparecen antes del colapso y el jugador puede usarlos durante la atención." />
              <Shot src="/codigo-vital/epilogo.webp" alt="Epílogo: el médico de urgencia habla con la familia en el pasillo de reanimación" caption="Epílogo de un caso no resuelto: el médico de urgencia habla con la familia." />
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <Eyebrow>Modalidades</Eyebrow>
          <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">Para jugar solo o para enseñar frente a un curso</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {MODES.map((mode) => (
              <article key={mode.name} className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-med-panel/70 p-5">
                <Shot src={mode.image} alt={mode.alt} />
                <h3 className="text-xl font-extrabold text-med-text">{mode.name}</h3>
                <p className="text-sm leading-7 text-med-soft/85">{mode.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="text-base font-extrabold text-med-text">Guardia del día</h3>
              <p className="mt-2 text-sm leading-7 text-med-soft/80">Un caso y una variante asignados por la fecha, los mismos para todos los jugadores durante ese día.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="text-base font-extrabold text-med-text">Variantes numeradas</h3>
              <p className="mt-2 text-sm leading-7 text-med-soft/80">Cada partida cambia la edad, los hallazgos, el ritmo y los tiempos dentro de rangos definidos. Con el número de la variante, cualquier persona puede repetir exactamente el mismo caso.</p>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-med-bg2">
          <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <Eyebrow>Contenido</Eyebrow>
            <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">Dieciséis casos en cuatro turnos</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-med-muted md:text-base">
              Los temas que cubre cada turno. Dentro del juego el diagnóstico no se anuncia: el caso se presenta como lo vería un testigo o como lo informa la central.
            </p>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {TOPICS.map((group) => (
                <div key={group.level} className="rounded-2xl border border-white/10 bg-med-panel/70 p-5">
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-med-cyan">{group.level}</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-med-soft/85">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-med-red" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="clases" className="mx-auto w-full max-w-7xl scroll-mt-20 px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <Eyebrow>Uso en clases</Eyebrow>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">Una herramienta para el instructor</h2>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-med-soft/85">
                <li><strong className="text-med-text">Proyección:</strong> en modo clase el instructor controla el prólogo, puede pausarlo o volver a una escena, y conduce las preguntas con el curso antes de continuar.</li>
                <li><strong className="text-med-text">Discusión con datos:</strong> la revisión final entrega la línea de tiempo completa del caso, los errores críticos y la referencia de cada punto, lo que sirve como base para el debriefing.</li>
                <li><strong className="text-med-text">Grupos con casos distintos:</strong> cada grupo puede jugar una variante diferente, o todos la misma a partir de su número.</li>
                <li><strong className="text-med-text">Práctica antes y después:</strong> como no requiere cuenta ni conexión, los alumnos pueden repasar en su celular fuera del horario de clases.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-med-blue/25 bg-med-blue/[0.06] p-6">
              <h3 className="text-lg font-extrabold text-med-text">Código Vital y Monitor ACLS</h3>
              <p className="mt-3 text-sm leading-7 text-med-soft/85">
                Monitor ACLS está pensado para que un instructor conduzca escenarios de reanimación con su equipo, con roles y registro de la sesión. Código Vital cubre otra necesidad: que cada persona practique por su cuenta la primera respuesta, desde el testigo que presencia un colapso hasta el jefe de una escena con múltiples víctimas.
              </p>
              <p className="mt-3 text-sm leading-7 text-med-soft/85">El motor de ritmos cardíacos del juego es el mismo que usa Monitor ACLS.</p>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-med-bg2">
          <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <Eyebrow>Requisitos y características</Eyebrow>
            <dl className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {TECH.map(([term, detail]) => (
                <div key={term} className="rounded-2xl border border-white/10 bg-med-panel/70 p-5">
                  <dt className="text-sm font-extrabold text-med-text">{term}</dt>
                  <dd className="mt-2 text-sm leading-7 text-med-soft/80">{detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="mx-auto w-full max-w-4xl px-5 py-16 md:px-8 md:py-20">
          <div className="rounded-2xl border border-med-gold/30 bg-med-gold/[0.06] p-6">
            <h2 className="text-sm font-extrabold uppercase tracking-[0.16em] text-med-gold">Sobre el contenido clínico</h2>
            <p className="mt-3 text-sm leading-7 text-med-soft/85">
              Los casos se construyen a partir de las guías AHA 2025, ERC 2025 y PHTLS 10.ª edición, y se encuentran en revisión clínica por instructores. Algunos tiempos y umbrales son simplificaciones propias del juego y se identifican como tales en la revisión de cada caso.
            </p>
            <p className="mt-3 text-sm leading-7 text-med-soft/85">
              Código Vital es una herramienta de práctica. No reemplaza un curso certificado ni los protocolos de cada institución.
            </p>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Gratuito y sin registro</h2>
            <p className="mt-3 text-sm text-med-muted">Se abre en el navegador, en codigovital.monitoracls.com.</p>
            <div className="mt-6 flex justify-center">
              <PlayButton source="page_footer" label="Jugar Código Vital" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8 bg-med-bg">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 py-8 text-xs text-white/50 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Monitor ACLS · Código Vital</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/" className="transition hover:text-white">monitoracls.com</Link>
            <a href="mailto:contacto@monitoracls.com" className="transition hover:text-white">contacto@monitoracls.com</a>
            <Link to="/privacidad" className="transition hover:text-white">Política de Privacidad</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
