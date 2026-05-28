import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'
import { trackCommercialEvent } from '../lib/commercial'

type FormStatus = 'idle' | 'sending' | 'sent' | 'error'

interface DemoForm {
  name: string
  institution: string
  email: string
  phone: string
  institutionType: string
  message: string
}

const initialForm: DemoForm = {
  name: '',
  institution: '',
  email: '',
  phone: '',
  institutionType: '',
  message: '',
}

export function ContactSection() {
  const [form, setForm] = useState<DemoForm>(initialForm)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [error, setError] = useState('')

  function updateField(field: keyof DemoForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
    if (status === 'error') {
      setStatus('idle')
      setError('')
    }
  }

  function validateForm() {
    if (!form.name.trim()) return 'Ingresa tu nombre y cargo.'
    if (!form.institution.trim()) return 'Ingresa la institución.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) return 'Ingresa un correo institucional válido.'
    if (!form.phone.trim()) return 'Ingresa un teléfono de contacto.'
    if (!form.institutionType.trim()) return 'Selecciona el tipo de institución.'
    return ''
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const validationError = validateForm()

    if (validationError) {
      setStatus('error')
      setError(validationError)
      return
    }

    setStatus('sending')
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const result = await response.json().catch(() => ({}))

      if (!response.ok || !result.ok) {
        throw new Error(result.error || 'No se pudo enviar la solicitud.')
      }

      trackCommercialEvent('submit_demo', { source: 'contact_form', status: 'sent' })
      setStatus('sent')
      setForm(initialForm)
    } catch (submissionError) {
      trackCommercialEvent('submit_demo', { source: 'contact_form', status: 'error' })
      setStatus('error')
      setError(submissionError instanceof Error ? submissionError.message : 'No se pudo enviar la solicitud.')
    }
  }

  return (
    <section className="border-y border-white/10 bg-med-panel/60 pb-16 md:pb-0" id="contacto">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <SectionTitle
          eyebrow="Contacto"
          title="Inicia evaluación institucional"
          subtitle="Cuéntanos tu escenario docente y diseñamos una propuesta de implementación."
        />
        <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="enterprise-surface rounded-[1.5rem] p-5"
          >
            <h3 className="text-lg font-extrabold text-med-text">Canales directos</h3>
            <div className="mt-4 space-y-3">
              <a href="https://wa.me/56942139337" className="block rounded-xl border border-med-ecg/30 bg-med-ecg/10 p-3 text-sm font-semibold text-med-ecg transition hover:bg-med-ecg/20">
                WhatsApp comercial: +56 9 4213 9337
              </a>
              <a href="mailto:kinebulnes@gmail.com" className="block rounded-xl border border-med-blue/30 bg-med-blue/10 p-3 text-sm font-semibold text-med-blue transition hover:bg-med-blue/20">
                Correo institucional: kinebulnes@gmail.com
              </a>
            </div>
            <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-3 text-xs text-white/60">
              Tiempo de respuesta objetivo: dentro de 1 día hábil.
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[1.5rem] border border-med-blue/25 bg-med-card/82 p-5 shadow-enterprise"
          >
            <h3 className="text-lg font-extrabold text-med-text">Formulario consultivo enterprise</h3>
            <div className="mt-4 grid gap-3">
              <label className="grid gap-1.5 text-xs text-med-muted">
                Nombre y cargo
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={(event) => updateField('name', event.target.value)}
                  placeholder="Ej: Coordinador de simulación"
                  autoComplete="name"
                  required
                  className="rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 text-sm text-med-text outline-none placeholder:text-white/40 focus:border-med-blue/50"
                />
              </label>
              <label className="grid gap-1.5 text-xs text-med-muted">
                Correo institucional
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(event) => updateField('email', event.target.value)}
                  placeholder="nombre@institucion.cl"
                  autoComplete="email"
                  required
                  className="rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 text-sm text-med-text outline-none placeholder:text-white/40 focus:border-med-blue/50"
                />
              </label>
              <label className="grid gap-1.5 text-xs text-med-muted">
                Institución
                <input
                  name="institution"
                  type="text"
                  value={form.institution}
                  onChange={(event) => updateField('institution', event.target.value)}
                  placeholder="Ej: Universidad / OTEC / Hospital"
                  autoComplete="organization"
                  required
                  className="rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 text-sm text-med-text outline-none placeholder:text-white/40 focus:border-med-blue/50"
                />
              </label>
              <label className="grid gap-1.5 text-xs text-med-muted">
                Teléfono
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(event) => updateField('phone', event.target.value)}
                  placeholder="+56 9 1234 5678"
                  autoComplete="tel"
                  required
                  className="rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 text-sm text-med-text outline-none placeholder:text-white/40 focus:border-med-blue/50"
                />
              </label>
              <label className="grid gap-1.5 text-xs text-med-muted">
                Tipo de institución
                <select
                  name="institutionType"
                  value={form.institutionType}
                  onChange={(event) => updateField('institutionType', event.target.value)}
                  required
                  className="rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 text-sm text-med-text outline-none focus:border-med-blue/50"
                >
                <option value="">Selecciona una opción</option>
                <option value="Universidad">Universidad</option>
                <option value="OTEC">OTEC</option>
                <option value="Hospital / Clínica">Hospital / Clínica</option>
                <option value="Centro de simulación">Centro de simulación</option>
                <option value="Instructor independiente">Instructor independiente</option>
                </select>
              </label>
              <label className="grid gap-1.5 text-xs text-med-muted">
                Mensaje opcional
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={(event) => updateField('message', event.target.value)}
                  placeholder="Objetivo del programa, fecha estimada o requerimientos clave"
                  className="rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 text-sm text-med-text outline-none placeholder:text-white/40 focus:border-med-blue/50"
                />
              </label>
              {status === 'sent' ? (
                <div className="rounded-xl border border-med-ecg/30 bg-med-ecg/10 p-3 text-sm text-med-ecg">
                  Solicitud enviada. Te contactaremos dentro de 1 día hábil.
                </div>
              ) : null}
              {status === 'error' ? (
                <div className="rounded-xl border border-med-red/30 bg-med-red/10 p-3 text-sm text-med-red">
                  {error}
                </div>
              ) : null}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="rounded-xl border border-med-blue/35 bg-med-blue/12 px-4 py-2.5 text-sm font-extrabold uppercase tracking-wider text-med-cyan transition hover:bg-med-blue/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'sending' ? 'Enviando solicitud' : 'Solicitar evaluación'}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
