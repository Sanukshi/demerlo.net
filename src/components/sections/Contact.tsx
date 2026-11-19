import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { AlertCircle, CheckCircle2, Send } from 'lucide-react'
import { contact } from '../../data/content'
import { SectionShell } from '../ui/SectionShell'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'

type FormValues = {
  name: string
  company: string
  email: string
  message: string
}
type FormErrors = Partial<Record<keyof FormValues, string>>
type Status = 'idle' | 'submitting' | 'success' | 'error'

const initialValues: FormValues = { name: '', company: '', email: '', message: '' }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}
  const name = values.name.trim()
  const email = values.email.trim()
  const message = values.message.trim()

  if (!name) errors.name = 'Please enter your name.'
  else if (name.length < 2) errors.name = 'Name must be at least 2 characters.'

  if (values.company.trim().length > 120) errors.company = 'Company name is too long.'

  if (!email) errors.email = 'Please enter your email address.'
  else if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address.'

  if (!message) errors.message = 'Please enter a message.'
  else if (message.length < 10) errors.message = 'Message must be at least 10 characters.'
  else if (message.length > 2000) errors.message = 'Message must be 2000 characters or fewer.'

  return errors
}

const fieldClass = (hasError: boolean) =>
  [
    'mt-1.5 w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy placeholder:text-muted/70 transition-colors',
    'focus:outline-none focus:ring-2 focus:ring-strong/40',
    hasError ? 'border-red-500 focus:ring-red-500/30' : 'border-navy/15 focus:border-strong',
  ].join(' ')

export function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<Status>('idle')
  const formRef = useRef<HTMLFormElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)

  const handleChange =
    (field: keyof FormValues) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }))
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
      if (status === 'success' || status === 'error') setStatus('idle')
    }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status === 'submitting') return

    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      setStatus('idle')
      const first = (['name', 'company', 'email', 'message'] as const).find((k) => found[k])
      if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus()
      return
    }

    setStatus('submitting')
    try {
      // No backend yet: log the payload locally.
      const payload = {
        name: values.name.trim(),
        company: values.company.trim(),
        email: values.email.trim(),
        message: values.message.trim(),
      }
      await new Promise((resolve) => setTimeout(resolve, 500))
      console.log('Demerlo contact form submission:', payload)
      setValues(initialValues)
      setStatus('success')
    } catch (err) {
      console.error('Contact form submission failed:', err)
      setStatus('error')
    }
  }

  const focusForm = () => {
    nameRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    nameRef.current?.focus({ preventScroll: true })
  }

  return (
    <SectionShell id="contact" bare>
      <div className="surface-brand relative overflow-hidden rounded-panel p-8 text-white shadow-panel md:p-10 lg:p-14">
        <div aria-hidden="true" className="section-blobs" />
        <div aria-hidden="true" className="section-dots hidden md:block" />

        <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <span aria-hidden="true" className="heading-bar is-on-dark" />
            <h2 className="font-heading text-[26px] font-extrabold uppercase leading-tight tracking-tight md:text-4xl lg:text-5xl">
              {contact.title}
            </h2>
            <Button
              type="button"
              variant="secondary"
              size="lg"
              className="mt-8"
              onClick={focusForm}
            >
              {contact.cta}
            </Button>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
              className="rounded-card bg-white p-5 text-navy shadow-lift md:p-7"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="text-sm font-semibold">
                    Name <span aria-hidden="true" className="text-strong">*</span>
                  </label>
                  <input
                    ref={nameRef}
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={values.name}
                    onChange={handleChange('name')}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    className={fieldClass(!!errors.name)}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p id="contact-name-error" role="alert" className="mt-1.5 text-xs text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-company" className="text-sm font-semibold">
                    Company
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={values.company}
                    onChange={handleChange('company')}
                    aria-invalid={!!errors.company}
                    aria-describedby={errors.company ? 'contact-company-error' : undefined}
                    className={fieldClass(!!errors.company)}
                    placeholder="Company name"
                  />
                  {errors.company && (
                    <p id="contact-company-error" role="alert" className="mt-1.5 text-xs text-red-600">
                      {errors.company}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="contact-email" className="text-sm font-semibold">
                  Email <span aria-hidden="true" className="text-strong">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={values.email}
                  onChange={handleChange('email')}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  className={fieldClass(!!errors.email)}
                  placeholder="you@company.com"
                />
                {errors.email && (
                  <p id="contact-email-error" role="alert" className="mt-1.5 text-xs text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="contact-message" className="text-sm font-semibold">
                  Message <span aria-hidden="true" className="text-strong">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={values.message}
                  onChange={handleChange('message')}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  className={[fieldClass(!!errors.message), 'resize-y'].join(' ')}
                  placeholder="Tell us about your catalogue and what you'd like to see"
                />
                {errors.message && (
                  <p id="contact-message-error" role="alert" className="mt-1.5 text-xs text-red-600">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Button type="submit" disabled={status === 'submitting'} className="sm:w-auto">
                  <Send size={16} aria-hidden="true" />
                  {status === 'submitting' ? 'Sending…' : 'Send message'}
                </Button>

                <div aria-live="polite" className="text-sm">
                  {status === 'success' && (
                    <p className="flex items-center gap-2 font-medium text-emerald-700">
                      <CheckCircle2 size={18} aria-hidden="true" />
                      Thank you! Your message has been recorded.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="flex items-center gap-2 font-medium text-red-600">
                      <AlertCircle size={18} aria-hidden="true" />
                      Something went wrong. Please try again.
                    </p>
                  )}
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  )
}
