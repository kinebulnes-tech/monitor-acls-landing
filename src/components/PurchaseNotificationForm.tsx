import { useState, useRef, type FormEvent } from 'react'

type Plan = 'individual' | 'institutional'

interface FormState {
  name: string
  email: string
  plan: Plan | ''
  institution: string
  reference: string
  comment: string
}

interface FieldErrors {
  name?: string
  email?: string
  plan?: string
  institution?: string
  reference?: string
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const INITIAL: FormState = {
  name: '',
  email: '',
  plan: '',
  institution: '',
  reference: '',
  comment: '',
}

function validate(f: FormState): FieldErrors {
  const e: FieldErrors = {}
  if (f.name.trim().length < 3) e.name = 'Ingresa tu nombre completo (mínimo 3 caracteres).'
  if (!EMAIL_RE.test(f.email.trim())) e.email = 'Ingresa un correo electrónico válido.'
  if (!f.plan) e.plan = 'Selecciona el plan que contrataste.'
  if (f.plan === 'institutional' && !f.institution.trim()) {
    e.institution = 'Ingresa el nombre de tu institución o empresa.'
  }
  if (f.reference.trim().length < 3) {
    e.reference = 'Ingresa el número de operación o referencia de tu pago Flow.'
  }
  return e
}

interface ApiResponse {
  ok: boolean
  error?: string
}

export interface Props {
  variant: 'success' | 'pending'
}

export function PurchaseNotificationForm({ variant }: Props) {
  const [fields, setFields] = useState<FormState>(INITIAL)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')
  const [apiError, setApiError] = useState<string | null>(null)
  const submittingRef = useRef(false)

  function setField(key: keyof FormState, value: string) {
    setFields(prev => ({ ...prev, [key]: value }))
  }

  function clearError(key: keyof FieldErrors) {
    setErrors(prev => { const n = { ...prev }; delete n[key]; return n })
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (submittingRef.current || submitStatus === 'success') return

    const errs = validate(fields)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    submittingRef.current = true
    setSubmitStatus('loading')
    setApiError(null)

    try {
      const res = await fetch('/api/notify-purchase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fields.name.trim(),
          email: fields.email.trim(),
          plan: fields.plan,
          institution: fields.institution.trim(),
          reference: fields.reference.trim(),
          comment: fields.comment.trim(),
          website: '',
        }),
      })

      const data = (await res.json()) as ApiResponse

      if (data.ok) {
        setSubmitStatus('success')
      } else {
        setApiError(data.error ?? 'No se pudo enviar. Intenta de nuevo.')
        setSubmitStatus('error')
        submittingRef.current = false
      }
    } catch {
      setApiError('Error de conexión. Verifica tu internet e intenta de nuevo.')
      setSubmitStatus('error')
      submittingRef.current = false
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="rounded-2xl border border-med-ecg/25 bg-med-ecg/8 p-6 text-center">
        <div className="mb-3 flex justify-center">
          <svg className="h-10 w-10 text-med-ecg" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
            <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M13 20.5l4 4 9-9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="text-base font-extrabold text-med-ecg">Solicitud enviada</h3>
        <p className="mt-2 text-sm leading-relaxed text-med-soft/90">
          Recibimos tus datos. Verificaremos el pago en Flow y activaremos tu licencia dentro del
          horario laboral (lun–vie, 9–18 h Chile).
        </p>
        <p className="mt-2 text-xs text-med-muted">
          Te enviamos una confirmación a{' '}
          <span className="font-semibold text-med-soft">{fields.email}</span>
        </p>
      </div>
    )
  }

  const inputBase =
    'w-full rounded-xl border px-4 py-3 text-sm text-med-text placeholder:text-med-muted/60 bg-white/[0.04] focus:outline-none focus:bg-white/[0.06] transition'
  const inputOk = 'border-white/10 focus:border-med-ecg/50'
  const inputErr = 'border-red-400/50 focus:border-red-400/70 bg-red-400/[0.03]'

  function fieldClass(key: keyof FieldErrors) {
    return `${inputBase} ${errors[key] ? inputErr : inputOk}`
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <p className="text-xs leading-relaxed text-med-soft/80">
        {variant === 'success'
          ? 'Completa estos datos para que verifiquemos tu pago y activemos tu licencia.'
          : 'Tu pago está siendo verificado por Flow. Envíanos tus datos ahora — activaremos tu licencia en cuanto el pago sea confirmado.'}
      </p>

      {/* Nombre */}
      <div>
        <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.15em] text-med-muted">
          Nombre completo <span className="text-red-400/80">*</span>
        </label>
        <input
          type="text"
          value={fields.name}
          onChange={e => { setField('name', e.target.value); clearError('name') }}
          placeholder="Tu nombre completo"
          autoComplete="name"
          className={fieldClass('name')}
        />
        {errors.name && (
          <p role="alert" className="mt-1 text-xs text-red-400">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.15em] text-med-muted">
          Correo electrónico <span className="text-red-400/80">*</span>
        </label>
        <input
          type="email"
          value={fields.email}
          onChange={e => { setField('email', e.target.value); clearError('email') }}
          placeholder="correo@ejemplo.com"
          autoComplete="email"
          className={fieldClass('email')}
        />
        {errors.email && (
          <p role="alert" className="mt-1 text-xs text-red-400">{errors.email}</p>
        )}
      </div>

      {/* Plan */}
      <div>
        <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.15em] text-med-muted">
          Plan contratado <span className="text-red-400/80">*</span>
        </label>
        <select
          value={fields.plan}
          onChange={e => {
            setField('plan', e.target.value)
            clearError('plan')
            if (e.target.value !== 'institutional') {
              setField('institution', '')
              clearError('institution')
            }
          }}
          className={`${fieldClass('plan')} appearance-none cursor-pointer`}
        >
          <option value="">Selecciona un plan…</option>
          <option value="individual">Plan Individual</option>
          <option value="institutional">Plan Empresas / Institucional</option>
        </select>
        {errors.plan && (
          <p role="alert" className="mt-1 text-xs text-red-400">{errors.plan}</p>
        )}
      </div>

      {/* Institución — solo si plan institucional */}
      {fields.plan === 'institutional' && (
        <div>
          <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.15em] text-med-muted">
            Institución o empresa <span className="text-red-400/80">*</span>
          </label>
          <input
            type="text"
            value={fields.institution}
            onChange={e => { setField('institution', e.target.value); clearError('institution') }}
            placeholder="Nombre de tu institución o empresa"
            autoComplete="organization"
            className={fieldClass('institution')}
          />
          {errors.institution && (
            <p role="alert" className="mt-1 text-xs text-red-400">{errors.institution}</p>
          )}
        </div>
      )}

      {/* Referencia */}
      <div>
        <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.15em] text-med-muted">
          N° de operación / referencia de pago <span className="text-red-400/80">*</span>
        </label>
        <input
          type="text"
          value={fields.reference}
          onChange={e => { setField('reference', e.target.value); clearError('reference') }}
          placeholder="Número que aparece en tu comprobante Flow"
          className={fieldClass('reference')}
        />
        <p className="mt-1 text-[10px] text-med-muted/70">
          Encuéntralo en el correo de confirmación de Flow o en el comprobante de pago.
        </p>
        {errors.reference && (
          <p role="alert" className="mt-1 text-xs text-red-400">{errors.reference}</p>
        )}
      </div>

      {/* Comentario */}
      <div>
        <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.15em] text-med-muted">
          Comentario <span className="text-med-muted/50">(opcional)</span>
        </label>
        <textarea
          value={fields.comment}
          onChange={e => setField('comment', e.target.value)}
          placeholder="Información adicional que quieras hacernos llegar"
          rows={3}
          className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-med-text placeholder:text-med-muted/60 transition focus:border-med-ecg/50 focus:bg-white/[0.06] focus:outline-none"
        />
      </div>

      {/* Error de API */}
      {submitStatus === 'error' && apiError && (
        <div role="alert" className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-xs text-red-400">
          {apiError}
        </div>
      )}

      <button
        type="submit"
        disabled={submitStatus === 'loading'}
        aria-busy={submitStatus === 'loading'}
        className="w-full rounded-xl border border-med-ecg/50 bg-med-ecg/20 px-4 py-4 text-center text-sm font-extrabold uppercase tracking-wider text-med-ecg transition hover:bg-med-ecg/30 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitStatus === 'loading' ? 'Enviando…' : 'Enviar solicitud de activación'}
      </button>
    </form>
  )
}
