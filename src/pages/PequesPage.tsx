import { Eyebrow, GameFooter, GameHeader, PlayButton, Shot, usePageTitle, type GameLink } from './gamePageParts'

// Peques se abre en la misma pestaña: en una tablet, un niño no se pierde entre pestañas.
const GAME: GameLink = { href: 'https://peques.monitoracls.com', event: 'click_peques', newTab: false }
const SHOT = { width: 1180, height: 820 }

const LEARNS = [
  {
    title: 'Pedir ayuda y llamar',
    text: 'Darse cuenta de que algo anda mal, avisar a un adulto y marcar el número correcto: 131 para la ambulancia, 132 para los bomberos y 133 para la policía. Desde los 6 años, además, qué decir: qué pasó y dónde están.',
  },
  {
    title: 'No ponerse en peligro',
    text: 'Mirar antes de acercarse. Salir agachado si hay humo y no volver a entrar, no tocar un enchufe con chispas, esperar en la vereda y quedarse quieto si se pierde en un supermercado.',
  },
  {
    title: 'Primeros auxilios simples',
    text: 'Agua fría de la llave sobre una quemadura (no hielo, no mantequilla), apretar una herida con un paño limpio y no mover a alguien que se cayó.',
  },
]

const MISSIONS: [string, string][] = [
  ['El abuelo Oso no despierta', 'SAMU'],
  ['Osito se quemó con la tetera', 'SAMU'],
  ['¡Hay humo en la casa!', 'Bombero'],
  ['El enchufe echa chispas', 'Bombero'],
  ['Conejita se perdió', 'Policía'],
  ['Zorrito se cayó de la bici', 'Policía'],
  ['Zorrito se cortó con una rama', 'Rescatista'],
  ['Una abeja picó a Conejita', 'Rescatista'],
]

const CALM = [
  ['Nadie muere y no hay sustos', 'Los pacientes son peluches y todas las misiones terminan bien. No hay imágenes fuertes ni escenas de hospital.'],
  ['Equivocarse no se castiga', 'Si elige algo que no ayuda, Pulsito le explica por qué y lo deja intentar de nuevo. Pedir ayuda nunca resta.'],
  ['Sin datos, publicidad ni compras', 'No hay cuentas. La edad y los stickers se guardan solo en el dispositivo y nada se envía a un servidor.'],
  ['Sesiones cortas', 'Después de tres misiones seguidas, el juego propone descansar y contarle a la familia lo que aprendió.'],
  ['El juego de adultos queda aparte', 'Desde Peques solo se llega a Código Vital para adultos con un botón que hay que mantener apretado 3 segundos.'],
  ['Funciona sin internet', 'Después de la primera visita se juega sin conexión, y se puede instalar como aplicación en el celular o la tablet.'],
]

const ACTIVITIES: [string, string][] = [
  ['El abuelo Oso no despierta', 'Con un peluche en el suelo, un niño toca los hombros y habla fuerte, otro grita «¡ayuda!» y un tercero hace la llamada con un teléfono de juguete.'],
  ['Osito se quemó', 'Mostrar un vaso de agua fría y conversar los mitos: ¿mantequilla?, ¿hielo?, ¿pasta de dientes?'],
  ['Humo en la casa', 'Ensayar la salida de la sala agachados, hasta el punto de encuentro, sin volver a entrar.'],
  ['El enchufe echa chispas', 'Recorrer la sala buscando enchufes y repetir la regla: se miran, no se tocan.'],
  ['Conejita se perdió', 'Mirar fotos de uniformes y credenciales. Cada niño practica su nombre completo y el de su mamá, papá o cuidador.'],
  ['Zorrito se cayó de la bici', 'Dibujar un casco y conversar dónde se espera cuando pasa algo en la calle: en la vereda.'],
  ['Zorrito se cortó', 'Practicar apretar con un paño limpio sobre un muñeco mientras el curso cuenta hasta ocho.'],
  ['Una abeja picó a Conejita', 'Conversar qué es una alergia y por qué la «lapicera» de los alérgicos la usa un adulto.'],
]

export function PequesPage() {
  usePageTitle('Código Vital Peques · Juego gratuito para niños de 5 a 7 años · Monitor ACLS')

  return (
    <div className="min-h-screen bg-med-bg text-med-text">
      <GameHeader name="Código Vital Peques" game={GAME} />

      <main>
        <section className="relative overflow-hidden border-b border-white/10 bg-clinical-radial">
          <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:28px_28px] opacity-[0.12]" />
          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pb-16 pt-12 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:pb-20 md:pt-16">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-med-ecg/35 bg-med-ecg/10 px-3.5 py-1.5">
                <span className="h-2 w-2 rounded-full bg-med-ecg" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-med-soft">Gratis · 5 a 7 años · Sin publicidad</span>
              </div>
              <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">Código Vital Peques</h1>
              <p className="max-w-xl text-2xl font-extrabold leading-snug text-med-text md:text-3xl">
                Si alguien se desmaya frente a tu hijo, <span className="text-med-ecg">¿sabe a qué número llamar?</span>
              </p>
              <p className="max-w-xl text-base leading-8 text-med-soft/90 md:text-lg">
                En Código Vital Peques, el niño elige ser bombero, SAMU, policía o rescatista y sale a ayudar a peluches en apuros. Jugando aprende lo que a su edad puede hacer: darse cuenta de que algo anda mal, no ponerse en peligro, avisar a un adulto y llamar al número correcto.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <PlayButton game={GAME} source="peques_hero" />
                <a href="#educadoras" className="rounded-xl border border-med-blue/40 bg-med-blue/10 px-5 py-3 text-sm font-extrabold uppercase tracking-wider text-med-cyan transition duration-300 hover:-translate-y-0.5 hover:bg-med-blue/20">
                  Para educadoras
                </a>
              </div>
            </div>
            <Shot src="/peques/uniformes.webp" alt="Pantalla para elegir uniforme: SAMU, bombero, policía o rescatista, cada uno con su número" {...SHOT} />
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <Eyebrow>Qué aprende</Eyebrow>
          <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">Lo que un niño de 5 a 7 años puede hacer bien</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-med-muted md:text-base">
            Los estudios muestran que desde los 4 o 5 años los niños aprenden a reconocer a alguien que no responde y a pedir ayuda, y lo recuerdan meses después. La reanimación se enseña más tarde, cuando el cuerpo alcanza la fuerza necesaria, alrededor de los 10 a 12 años. Por eso Peques no incluye reanimación y se concentra en pedir ayuda a tiempo.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {LEARNS.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-med-panel/70 p-5">
                <h3 className="text-lg font-extrabold text-med-text">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-med-soft/85">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Shot src="/peques/elegir.webp" alt="Misión del humo en la casa: tres opciones con dibujos y la de salir agachados marcada como correcta" caption="Hay humo en la casa. ¿Salir agachados, esconderse debajo de la cama o buscar los juguetes?" {...SHOT} />
            <Shot src="/peques/llamar.webp" alt="Teclado grande para marcar el número de emergencia" caption="Un adulto le presta el teléfono y marca el 132. A los 5 años, la tecla que sigue se ilumina." {...SHOT} />
          </div>
        </section>

        <section className="border-y border-white/10 bg-med-bg2">
          <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr]">
              <div>
                <Eyebrow>Cómo es una misión</Eyebrow>
                <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">Suena la alarma y sale a ayudar</h2>
                <p className="mt-4 text-sm leading-7 text-med-muted md:text-base">
                  Pulsito, un corazón con gorro de rescatista, lo acompaña y le habla durante toda la misión. Cada misión dura entre tres y cinco minutos: mirar si es seguro acercarse, revisar al peluche, pedir ayuda y llamar, y hacer lo que corresponde. Al final gana un sticker para su álbum, y una tarjeta le muestra lo mismo con personas.
                </p>
                <ul className="mt-6 grid gap-2 text-sm text-med-soft/85 sm:grid-cols-2">
                  {MISSIONS.map(([title, role]) => (
                    <li key={title} className="flex gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-med-ecg" aria-hidden="true" />
                      <span>{title} <span className="text-med-muted">· {role}</span></span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-5">
                <Shot src="/peques/apretar.webp" alt="Zorrito herido: el niño mantiene apretado el paño sobre la herida mientras avanza un contador" caption="Mantener apretado el paño sobre la herida de Zorrito mientras Pulsito cuenta." {...SHOT} />
                <Shot src="/peques/vida-real.webp" alt="Tarjeta final con un niño bombero y un adulto llamando por teléfono" caption="Al final, la misma situación con personas." {...SHOT} />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <Eyebrow>Hecho para su edad</Eyebrow>
          <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">El juego cambia según los años</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-med-panel/70 p-6">
              <h3 className="text-xl font-extrabold text-med-text">5 años</h3>
              <p className="mt-2 text-sm leading-7 text-med-soft/85">No necesita leer: todo se escucha y cada pantalla tiene un botón para volver a oírla. Dos opciones grandes con dibujos, la tecla que hay que marcar se ilumina y Pulsito da una pista si pasan unos segundos sin avanzar.</p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-med-panel/70 p-6">
              <h3 className="text-xl font-extrabold text-med-text">6 y 7 años</h3>
              <p className="mt-2 text-sm leading-7 text-med-soft/85">Frases cortas en pantalla, tres opciones, pasos para ordenar y un paso más en la llamada: elegir qué decirle al operador. Tiene que recordar el número de su uniforme.</p>
            </article>
          </div>
        </section>

        <section className="border-y border-white/10 bg-med-bg2">
          <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <Eyebrow>Para las familias</Eyebrow>
            <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">Seguro para su edad</h2>
            <dl className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {CALM.map(([term, detail]) => (
                <div key={term} className="rounded-2xl border border-white/10 bg-med-panel/70 p-5">
                  <dt className="text-sm font-extrabold text-med-text">{term}</dt>
                  <dd className="mt-2 text-sm leading-7 text-med-soft/80">{detail}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 rounded-2xl border border-med-ecg/25 bg-med-ecg/[0.05] p-6">
              <h3 className="text-lg font-extrabold text-med-text">Cómo acompañarlo</h3>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-med-soft/85">
                <li>Jueguen juntos la primera vez. A los 5 años, es la mejor forma de jugar siempre.</li>
                <li>Después de cada misión, pregúntele qué haría si le pasara a la abuela o a un compañero.</li>
                <li>Enséñele su dirección y el nombre completo de quienes lo cuidan: es lo que le van a preguntar al llamar.</li>
                <li>Practiquen la llamada con un teléfono de juguete. Nunca se llama de verdad al 131, 132 o 133 para practicar: esas líneas son para emergencias reales.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="educadoras" className="mx-auto w-full max-w-7xl scroll-mt-20 px-5 py-16 md:px-8 md:py-20">
          <Eyebrow>Para educadoras</Eyebrow>
          <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">Una actividad sin pantalla por misión</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-med-muted md:text-base">
            Peques se puede proyectar en la sala: los botones son grandes y todo se escucha. Después de cada misión, una actividad breve sirve para repetir lo aprendido con el grupo.
          </p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-white/[0.04] text-[11px] uppercase tracking-[0.16em] text-med-muted">
                <tr><th className="px-4 py-3 font-bold">Misión</th><th className="px-4 py-3 font-bold">Actividad</th></tr>
              </thead>
              <tbody>
                {ACTIVITIES.map(([mission, activity]) => (
                  <tr key={mission} className="border-t border-white/10 align-top">
                    <td className="px-4 py-3 font-bold text-med-text">{mission}</td>
                    <td className="px-4 py-3 leading-7 text-med-soft/85">{activity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mx-auto w-full max-w-4xl px-5 pb-16 md:px-8 md:pb-20">
          <div className="rounded-2xl border border-med-gold/30 bg-med-gold/[0.06] p-6">
            <h2 className="text-sm font-extrabold uppercase tracking-[0.16em] text-med-gold">Sobre el contenido</h2>
            <p className="mt-3 text-sm leading-7 text-med-soft/85">
              Lo que enseña cada misión se basa en la guía de primeros auxilios del European Resuscitation Council (2025) y en estudios sobre enseñanza de primeros auxilios a niños, y está en revisión. Peques complementa lo que el niño aprende con su familia y en el colegio; no reemplaza la supervisión de un adulto.
            </p>
          </div>
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">¿Qué quiere ser hoy?</h2>
            <div className="mt-6 flex justify-center">
              <PlayButton game={GAME} source="peques_footer" label="Jugar Código Vital Peques" />
            </div>
          </div>
        </section>
      </main>

      <GameFooter name="Código Vital Peques" />
    </div>
  )
}
