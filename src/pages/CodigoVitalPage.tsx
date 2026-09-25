import { Link } from 'react-router-dom'
import { Eyebrow, GameFooter, GameHeader, PlayButton, Shot, usePageTitle, type GameLink } from './gamePageParts'

const GAME: GameLink = { href: 'https://codigovital.monitoracls.com', event: 'click_codigo_vital', newTab: true }

const MECHANICS = [
  {
    title: 'El tiempo corre de verdad',
    text: 'Evaluar la respiración toma segundos; llamar al 131, también. Mientras haces una cosa no puedes hacer otra, y el paciente sigue su curso. Un motor fisiológico calcula su pulso, su saturación y su conciencia según lo que hiciste y lo que no.',
  },
  {
    title: 'La RCP la haces tú',
    text: 'Comprimes tocando la pantalla o la barra espaciadora, al ritmo del metrónomo. El juego mide tu frecuencia y cuánto tiempo pasó el paciente sin compresiones. Si no pides relevo, a los dos minutos tus brazos se cansan y las compresiones pierden profundidad.',
  },
  {
    title: 'El DEA da las órdenes',
    text: 'Lo enciendes, pegas los parches y haces lo que dice. Si alguien toca al paciente mientras analiza, el equipo se detiene y vuelve a empezar.',
  },
  {
    title: 'Nada viene marcado',
    text: 'Todas las acciones están disponibles desde el primer segundo, también las equivocadas, y elegir mal cuesta tiempo. Nadie te dice qué tiene el paciente; lo descubres mirando la escena, preguntando y evaluando.',
  },
  {
    title: 'Al entregarlo, te preguntan',
    text: 'Cuando llega la ambulancia, quien recibe al paciente te pregunta por lo que pasó en tu partida: a qué hora apretaste el torniquete, cuántas descargas dio el DEA, cuánto duró la crisis. Después, la revisión califica cada paso y te muestra en qué guía se apoya.',
  },
]

const MODES = [
  {
    name: 'Carrera',
    image: '/codigo-vital/mapa.webp',
    alt: 'Mapa de la carrera con los cinco casos del primer turno unidos por una ruta',
    text: 'Empiezas de franco, con tus manos y lo que haya en la escena. Después subes a la ambulancia básica, lideras un paro con monitor y fármacos, y terminas como jefe de escena clasificando víctimas con START. Para abrir cada turno necesitas dos estrellas en tres casos del anterior.',
  },
  {
    name: 'Modo clase',
    image: '/codigo-vital/clase.webp',
    alt: 'Pregunta de alternativas del modo clase durante un paro presenciado',
    text: 'Todos los casos quedan abiertos y la pantalla se ve bien en el proyector. En los momentos clave el caso se detiene con una pregunta de alternativas para discutir con el curso, y después muestra la respuesta con su fundamento. El prólogo se puede pausar y retroceder, y termina con una pregunta para abrir la conversación.',
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
  ['Dónde se juega', 'En el navegador del computador, el celular o la tablet, y en el proyector de la sala. También se instala como aplicación.'],
  ['Conexión', 'Solo para abrirlo la primera vez. Después funciona sin internet, también en el cuartel o en un traslado sin señal.'],
  ['Cuenta', 'No hay registro. Tu progreso se guarda en tu dispositivo y no se envía a ningún lado.'],
  ['Voz y sonido', 'Los personajes hablan con las voces instaladas en tu equipo, así que suenan distinto según el dispositivo. Juégalo con audífonos o parlante: el sonido es parte del caso.'],
  ['Accesibilidad', 'Alto contraste, control completo con teclado, menos movimiento si tu equipo lo pide y vibración opcional en el celular.'],
  ['Costo', 'Gratis y sin publicidad.'],
]

export function CodigoVitalPage() {
  usePageTitle('Código Vital · Juego gratuito de emergencias · Monitor ACLS')

  return (
    <div className="min-h-screen bg-med-bg text-med-text">
      <GameHeader name="Código Vital" game={GAME} />

      <main>
        <section className="relative overflow-hidden border-b border-white/10 bg-clinical-radial">
          <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:28px_28px] opacity-[0.12]" />
          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pb-16 pt-12 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:pb-20 md:pt-16">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-med-red/35 bg-med-red/10 px-3.5 py-1.5">
                <span className="h-2 w-2 rounded-full bg-med-red" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-med-soft">Gratis · En el navegador · Sin registro</span>
              </div>
              <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">Código Vital</h1>
              <p className="max-w-xl text-2xl font-extrabold leading-snug text-med-text md:text-3xl">
                Un hombre cae en la feria. <span className="text-med-red">Tienes segundos para saber si respira.</span>
              </p>
              <p className="max-w-xl text-base leading-8 text-med-soft/90 md:text-lg">
                Código Vital es un juego de emergencias que se juega contra el reloj. Cada acción toma los segundos que toma en la calle, lo que dejas de hacer también cuenta y el paciente mejora o empeora según tus decisiones. Al final ves, paso a paso, qué lo ayudó y qué lo puso en riesgo.
              </p>
              <p className="max-w-xl text-sm leading-7 text-med-muted">
                Empiezas de franco, sin más equipo que tus manos, y terminas a cargo de una micro volcada con víctimas por todos lados. Sacar tres estrellas en los dieciséis casos no es fácil.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <PlayButton game={GAME} source="page_hero" />
                <a href="#clases" className="rounded-xl border border-med-blue/40 bg-med-blue/10 px-5 py-3 text-sm font-extrabold uppercase tracking-wider text-med-cyan transition duration-300 hover:-translate-y-0.5 hover:bg-med-blue/20">
                  Para instructores
                </a>
              </div>
              <ul className="grid max-w-xl grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
                {[
                  ['16', 'casos clínicos'],
                  ['4', 'turnos de carrera'],
                  ['Gratis', 'sin registro'],
                  ['Sin internet', 'después de la primera carga'],
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
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">Nadie te va a decir qué hacer</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-med-muted md:text-base">
                Los signos vitales los conoces evaluando, y cada minuto que pasa se nota en el paciente.
              </p>
              <div className="mt-8">
                <Shot src="/codigo-vital/rcp.webp" alt="Caso en curso: reanimación en la feria con el panel de compresiones y el de acciones" caption="Minuto uno en la feria: compresiones en rango, la vecina salió a buscar el DEA y la ambulancia está a menos de cinco minutos." />
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
              <Eyebrow>Antes y después</Eyebrow>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">Cada paciente tiene un nombre y una historia</h2>
              <p className="mt-4 text-sm leading-7 text-med-muted md:text-base">
                Antes de intervenir ves lo que pasó. En la feria, un hombre mayor se seca la frente, le dice a la casera que es el calor y se frota el pecho mientras paga. Medio minuto después está en el suelo. La hora del reloj, ese gesto y lo que grita un testigo los vas a necesitar.
              </p>
              <p className="mt-3 text-sm leading-7 text-med-muted md:text-base">
                Al final, el epílogo cuenta cómo siguió. Si lo lograste, te enteras de que llegó al hospital con pulso. Si no, estás en el pasillo de urgencias cuando el médico sale a hablar con la familia.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <Shot src="/codigo-vital/prologo.webp" alt="Prólogo: un hombre mayor se frota el pecho mientras la casera le pregunta si se siente bien" caption="Las señales aparecen antes de que caiga." />
              <Shot src="/codigo-vital/epilogo.webp" alt="Epílogo: el médico de urgencia habla con la familia en el pasillo de reanimación" caption="Cuando la atención no alcanzó." />
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <Eyebrow>Modalidades</Eyebrow>
          <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">Para jugar solo o para proyectar en la sala</h2>
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
              <p className="mt-2 text-sm leading-7 text-med-soft/80">Un caso nuevo cada día, el mismo para todos. Sirve para comparar estrellas con tu compañía o con tu curso.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="text-base font-extrabold text-med-text">Ningún caso sale igual</h3>
              <p className="mt-2 text-sm leading-7 text-med-soft/80">En cada partida cambian la edad, los hallazgos, el ritmo y los tiempos. Si un caso te costó, puedes pedir revancha con la misma variante.</p>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-med-bg2">
          <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <Eyebrow>Contenido</Eyebrow>
            <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">Dieciséis emergencias en cuatro turnos</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-med-muted md:text-base">
              Estos son los temas. Dentro del juego nadie los anuncia: cada caso empieza como lo vería un testigo o como lo informa la central.
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
              <Eyebrow>Para instructores</Eyebrow>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">Cómo usarlo en un curso</h2>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-med-soft/85">
                <li><strong className="text-med-text">En el proyector:</strong> en modo clase controlas el prólogo, lo pausas o vuelves a una escena, y conduces las preguntas antes de seguir.</li>
                <li><strong className="text-med-text">Debriefing con datos:</strong> la revisión trae la línea de tiempo completa del caso, los errores críticos y la referencia de cada punto.</li>
                <li><strong className="text-med-text">Un caso distinto por grupo:</strong> cada partida sale con su propia variante, así que cada grupo resuelve su caso. Con la guardia del día, en cambio, todos juegan el mismo.</li>
                <li><strong className="text-med-text">Práctica fuera de la sala:</strong> no pide cuenta ni conexión, así que tus alumnos pueden repasar en el celular antes o después de la clase.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-med-blue/25 bg-med-blue/[0.06] p-6">
              <h3 className="text-lg font-extrabold text-med-text">Código Vital y Monitor ACLS</h3>
              <p className="mt-3 text-sm leading-7 text-med-soft/85">
                Monitor ACLS sirve para que un instructor conduzca escenarios de reanimación con su equipo, con roles y registro de la sesión. Código Vital está pensado para la práctica individual de la primera respuesta, desde el testigo que ve caer a alguien hasta el jefe de una escena con múltiples víctimas.
              </p>
              <p className="mt-3 text-sm leading-7 text-med-soft/85">Los ritmos cardíacos del juego salen del mismo motor que usa Monitor ACLS.</p>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-med-bg2">
          <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <Eyebrow>Lo que necesitas</Eyebrow>
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
              Los casos se basan en las guías AHA 2025, ERC 2025 y PHTLS 10.ª edición y están en revisión clínica por instructores. Algunos tiempos y umbrales son simplificaciones propias del juego y se marcan como tales en la revisión de cada caso.
            </p>
            <p className="mt-3 text-sm leading-7 text-med-soft/85">
              Código Vital sirve para practicar. No reemplaza un curso certificado ni los protocolos de tu institución.
            </p>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">¿Llegarías a tiempo?</h2>
            <div className="mt-6 flex justify-center">
              <PlayButton game={GAME} source="page_footer" label="Jugar Código Vital" />
            </div>
          </div>
        </section>
      </main>

      <GameFooter name="Código Vital" />
    </div>
  )
}
