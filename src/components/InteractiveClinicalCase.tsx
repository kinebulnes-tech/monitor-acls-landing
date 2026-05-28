import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'

type DecisionKey = 'shock' | 'epi' | 'wait'

interface DecisionState {
  label: string
  short: string
  status: string
  rhythm: string
  pressure: string
  etco2: string
  pulse: string
  tone: 'success' | 'warning' | 'danger'
  feedback: string
  debrief: string[]
  trace: string
}

const baselineTrace = '0,46 14,28 30,60 45,24 60,58 76,30 92,63 108,22 124,57 140,34 156,66 172,25 188,60 204,29 220,55 236,37 252,61 268,26 284,57 300,34 316,63 332,24 348,58 364,31 380,60 396,28 412,56 428,34 444,62 460,26 476,58 492,32 508,60 524,29 540,56 556,35 572,61 588,27 604,58 620,34 636,60 652,30 668,56 684,36 700,62 716,28 732,58 748,34 764,60 780,32 796,57 812,38 828,61 844,31 860,58 876,36 892,60 908,34 924,57 940,39 956,60 972,36 988,58 1000,42'
const shockTrace = '0,56 28,56 45,55 58,18 70,72 82,56 120,56 138,55 151,22 164,70 178,56 220,56 238,55 252,20 266,70 280,56 324,56 342,55 356,22 370,70 384,56 428,56 446,55 460,20 474,70 488,56 532,56 550,55 564,22 578,70 592,56 636,56 654,55 668,20 682,70 696,56 740,56 758,55 772,22 786,70 800,56 844,56 862,55 876,22 890,70 904,56 948,56 966,55 980,22 994,70 1000,56'
const deteriorateTrace = '0,40 20,72 42,30 64,78 84,36 110,80 132,28 152,76 178,34 204,82 230,38 258,76 288,40 320,82 352,36 388,78 424,44 462,82 500,46 542,78 584,48 628,82 672,50 718,78 764,52 812,82 860,54 910,80 960,56 1000,84'

const decisionStates: Record<DecisionKey, DecisionState> = {
  shock: {
    label: 'Desfibrilar ahora',
    short: 'Shock aplicado',
    status: 'ROSC simulado',
    rhythm: 'Ritmo organizado',
    pressure: '104/68',
    etco2: '36 mmHg',
    pulse: 'Pulso palpable',
    tone: 'success',
    feedback: 'Decisión prioritaria en FV presenciada sin pulso: shock temprano, RCP continua y reevaluación estructurada.',
    debrief: ['Shock indicado sin demora', 'RCP se mantiene entre intervenciones', 'Cierre con reevaluación y registro del caso'],
    trace: shockTrace,
  },
  epi: {
    label: 'Administrar adrenalina',
    short: 'Medicación registrada',
    status: 'FV persiste',
    rhythm: 'VF',
    pressure: 'Sin pulso',
    etco2: '21 mmHg',
    pulse: 'No palpable',
    tone: 'warning',
    feedback: 'Acción posible dentro del algoritmo, pero en FV presenciada la prioridad educativa inmediata es desfibrilar.',
    debrief: ['Medicamento documentado', 'Persisten ritmo desfibrilable y ausencia de pulso', 'Se recomienda shock y continuidad de RCP'],
    trace: baselineTrace,
  },
  wait: {
    label: 'Esperar reevaluación',
    short: 'Demora crítica',
    status: 'Deterioro',
    rhythm: 'VF irregular',
    pressure: 'Sin pulso',
    etco2: '16 mmHg',
    pulse: 'No palpable',
    tone: 'danger',
    feedback: 'La demora prolonga el tiempo hasta desfibrilación. El simulador destaca timing crítico y coordinación del equipo.',
    debrief: ['Tiempo crítico perdido', 'No hay intervención correctiva', 'Debrief enfocado en prioridad y liderazgo del caso'],
    trace: deteriorateTrace,
  },
}

const toneClasses = {
  success: 'border-med-ecg/35 bg-med-ecg/10 text-med-ecg',
  warning: 'border-med-gold/35 bg-med-gold/10 text-med-gold',
  danger: 'border-med-red/35 bg-med-red/10 text-med-red',
}

const telemetryLabels = [
  ['Ritmo', 'rhythm'],
  ['PA', 'pressure'],
  ['ETCO2', 'etco2'],
  ['Pulso', 'pulse'],
] as const

export function InteractiveClinicalCase() {
  const [decision, setDecision] = useState<DecisionKey>('shock')
  const state = decisionStates[decision]

  const decisions = useMemo(
    () =>
      (Object.keys(decisionStates) as DecisionKey[]).map((key) => ({
        key,
        label: decisionStates[key].label,
      })),
    [],
  )

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-med-panel/50" id="micro-caso">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px clinical-hairline" />
      <div className="pointer-events-none absolute -right-20 top-24 h-80 w-80 rounded-full bg-med-blue/10 blur-3xl" />

      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <SectionTitle
          eyebrow="Micro caso interactivo"
          title="Toma una decisión ACLS y observa el impacto clínico"
          subtitle="Una experiencia breve para mostrar cómo Monitor ACLS convierte acciones, timing y feedback en entrenamiento documentable."
        />

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="enterprise-surface relative overflow-hidden rounded-[1.75rem] p-3 md:p-5"
          >
            <div className="rounded-2xl border border-white/10 bg-black/55 p-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-med-cyan">Caso 01 · FV presenciada</p>
                  <h3 className="mt-1 text-xl font-extrabold text-med-text">Paciente sin pulso · RCP activa</h3>
                </div>
                <span className={`rounded-full border px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider ${toneClasses[state.tone]}`}>
                  {state.status}
                </span>
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-[#02060a] p-3 shadow-card">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-med-muted">Monitor clínico</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-med-ecg">{state.short}</p>
                </div>
                <svg className="h-40 w-full overflow-visible md:h-52" viewBox="0 0 1000 112" role="img" aria-label={`Trazado ECG: ${state.rhythm}`}>
                  <defs>
                    <linearGradient id="caseTraceGradient" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0%" stopColor="#2cff88" />
                      <stop offset="58%" stopColor="#56d6ff" />
                      <stop offset="100%" stopColor="#3ea0ff" />
                    </linearGradient>
                  </defs>
                  <g opacity="0.18">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <line key={`v-${i}`} x1={i * 125} x2={i * 125} y1="0" y2="112" stroke="white" strokeWidth="1" />
                    ))}
                    {Array.from({ length: 5 }).map((_, i) => (
                      <line key={`h-${i}`} x1="0" x2="1000" y1={i * 28} y2={i * 28} stroke="white" strokeWidth="1" />
                    ))}
                  </g>
                  <polyline
                    key={decision}
                    className="clinical-ecg-trace"
                    points={state.trace}
                    fill="none"
                    stroke="url(#caseTraceGradient)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                  />
                </svg>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-4">
                {telemetryLabels.map(([label, key]) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                    <p className="text-[9px] uppercase tracking-wider text-med-muted">{label}</p>
                    <p className="mt-1 text-sm font-extrabold text-med-text">{state[key]}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>

          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="grid gap-4"
          >
            <div className="rounded-[1.5rem] border border-white/10 bg-med-card/75 p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-med-blue">Decisión del instructor</p>
              <h3 className="mt-2 text-xl font-extrabold text-med-text">Selecciona la primera acción</h3>
              <div className="mt-4 grid gap-2">
                {decisions.map((item) => {
                  const active = item.key === decision
                  return (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setDecision(item.key)}
                      aria-pressed={active}
                      className={`rounded-xl border px-4 py-3 text-left text-sm font-extrabold transition duration-300 hover:-translate-y-0.5 ${
                        active
                          ? 'border-med-cyan/40 bg-med-blue/15 text-med-text shadow-blue'
                          : 'border-white/10 bg-black/20 text-med-muted hover:border-med-blue/30 hover:text-med-soft'
                      }`}
                    >
                      {item.label}
                    </button>
                  )
                })}
              </div>
            </div>

            <motion.div
              key={decision}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28 }}
              className={`rounded-[1.5rem] border p-5 ${toneClasses[state.tone]}`}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.24em]">Feedback educativo</p>
              <p className="mt-2 text-sm leading-relaxed text-med-soft">{state.feedback}</p>
            </motion.div>

            <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-med-cyan">Mini debrief</p>
              <ul className="mt-3 space-y-2">
                {state.debrief.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-med-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-med-ecg" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className="mt-5 inline-flex rounded-xl border border-med-blue/35 bg-med-blue/12 px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-med-cyan transition hover:bg-med-blue/20"
              >
                Solicitar demo institucional
              </a>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
