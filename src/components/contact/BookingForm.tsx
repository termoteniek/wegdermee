import { motion } from 'framer-motion'
import { useState, type FormEvent } from 'react'
import { emptyBookingForm, serviceOptions, volumeOptions, type BookingFormData } from '../../types/booking'
import { DateTimePicker } from './DateTimePicker'

const inputClassName =
  'mt-2 w-full border-b-2 border-ink bg-transparent py-2 text-ink outline-none focus:border-accent'
const labelClassName =
  'font-display text-xs font-semibold uppercase tracking-widest text-muted'

const stepLabels = ['Gegevens', 'Dienst', 'Datum & tijd'] as const
type Step = 1 | 2 | 3 | 4

export function BookingForm() {
  const [step, setStep] = useState<Step>(1)
  const [form, setForm] = useState<BookingFormData>(emptyBookingForm)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function updateField<K extends keyof BookingFormData>(key: K, value: BookingFormData[K]) {
    setForm((current) => ({ ...current, [key]: value }))
  }

  function handleStepOneSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    setStep(2)
  }

  function handleStepTwoSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    setStep(3)
  }

  function handleFinalSubmit() {
    if (!form.date || !form.time) {
      setError('Kies een datum en tijdstip.')
      return
    }

    setSubmitting(true)
    setError(null)
    setStep(4)
    setSubmitting(false)
  }

  if (step === 4) {
    return (
      <motion.div
        className="flex min-h-[420px] flex-col items-center justify-center border-2 border-white/15 bg-cream p-8 text-center text-ink sm:p-10"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <span className="font-display text-6xl font-extrabold text-accent">✓</span>
        <p className="mt-4 font-display text-2xl font-bold uppercase">Aanvraag ontvangen</p>
        <p className="mt-4 max-w-md text-muted">
          Bedankt {form.voornaam}! We hebben uw aanvraag ontvangen en nemen telefonisch
          contact op om uw afspraak definitief te bevestigen.
        </p>
      </motion.div>
    )
  }

  return (
    <div className="border-2 border-white/15 bg-cream p-8 text-ink sm:p-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-3">
        {stepLabels.map((label, index) => {
          const value = index + 1
          return (
            <div key={label} className="flex flex-1 items-center gap-3">
              <span
                className={`flex size-9 shrink-0 items-center justify-center border-2 font-display text-sm font-bold ${
                  step >= value
                    ? 'border-accent bg-accent text-white'
                    : 'border-ink/20 text-muted'
                }`}
              >
                {value}
              </span>
              <span className="font-display text-xs font-semibold uppercase tracking-widest text-muted">
                {label}
              </span>
              {value < stepLabels.length && (
                <span className="hidden h-px flex-1 bg-ink/15 sm:block" aria-hidden />
              )}
            </div>
          )
        })}
      </div>

      {step === 1 && (
        <form onSubmit={handleStepOneSubmit} className="mt-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className={labelClassName}>Voornaam *</span>
              <input
                type="text"
                required
                autoComplete="given-name"
                value={form.voornaam}
                onChange={(event) => updateField('voornaam', event.target.value)}
                className={inputClassName}
              />
            </label>

            <label className="block">
              <span className={labelClassName}>Familienaam *</span>
              <input
                type="text"
                required
                autoComplete="family-name"
                value={form.familienaam}
                onChange={(event) => updateField('familienaam', event.target.value)}
                className={inputClassName}
              />
            </label>

            <label className="block">
              <span className={labelClassName}>E-mail *</span>
              <input
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={(event) => updateField('email', event.target.value)}
                className={inputClassName}
              />
            </label>

            <label className="block">
              <span className={labelClassName}>Telefoon *</span>
              <input
                type="tel"
                required
                autoComplete="tel"
                value={form.phone}
                onChange={(event) => updateField('phone', event.target.value)}
                placeholder="+32 498 43 88 78"
                className={inputClassName}
              />
            </label>

            <label className="block sm:col-span-2">
              <span className={labelClassName}>Straatnaam *</span>
              <input
                type="text"
                required
                autoComplete="address-line1"
                value={form.straatnaam}
                onChange={(event) => updateField('straatnaam', event.target.value)}
                placeholder="Kerkstraat"
                className={inputClassName}
              />
            </label>

            <label className="block">
              <span className={labelClassName}>Huisnummer *</span>
              <input
                type="text"
                required
                autoComplete="address-line2"
                value={form.huisnummer}
                onChange={(event) => updateField('huisnummer', event.target.value)}
                placeholder="12"
                className={inputClassName}
              />
            </label>

            <label className="block">
              <span className={labelClassName}>Postcode *</span>
              <input
                type="text"
                required
                inputMode="numeric"
                autoComplete="postal-code"
                value={form.postcode}
                onChange={(event) => updateField('postcode', event.target.value)}
                placeholder="9000"
                className={inputClassName}
              />
            </label>

            <label className="block sm:col-span-2">
              <span className={labelClassName}>Gemeente *</span>
              <input
                type="text"
                required
                autoComplete="address-level2"
                value={form.gemeente}
                onChange={(event) => updateField('gemeente', event.target.value)}
                placeholder="Gent"
                className={inputClassName}
              />
            </label>
          </div>

          <label className="mt-6 flex items-start gap-3 text-sm leading-relaxed text-muted">
            <input
              type="checkbox"
              required
              checked={form.privacyAccepted}
              onChange={(event) => updateField('privacyAccepted', event.target.checked)}
              className="mt-1 size-4 accent-accent"
            />
            <span>
              Ik ga akkoord met het verwerken van mijn gegevens conform het{' '}
              <a href="#" className="text-ink underline underline-offset-2 hover:text-accent">
                privacybeleid
              </a>
              . *
            </span>
          </label>

          <button
            type="submit"
            className="mt-8 w-full bg-accent py-4 font-display text-lg font-bold uppercase tracking-wide text-white transition-all hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-auto sm:px-12"
          >
            Volgende →
          </button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleStepTwoSubmit} className="mt-8">
          <div className="grid gap-6">
            <label className="block">
              <span className={labelClassName}>Gewenste dienst *</span>
              <select
                required
                value={form.service}
                onChange={(event) => updateField('service', event.target.value)}
                className={`${inputClassName} cursor-pointer`}
              >
                <option value="">Maak een keuze</option>
                {serviceOptions.map((option) => (
                  <option key={option.value} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className={labelClassName}>Geschatte hoeveelheid *</span>
              <select
                required
                value={form.volume}
                onChange={(event) => updateField('volume', event.target.value)}
                className={`${inputClassName} cursor-pointer`}
              >
                <option value="">Maak een keuze</option>
                {volumeOptions.map((option) => (
                  <option key={option.value} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className={labelClassName}>Beschrijving *</span>
              <textarea
                required
                rows={4}
                value={form.description}
                onChange={(event) => updateField('description', event.target.value)}
                placeholder="Wat moet er weg? Bijv. oude meubels, groenafval, resten van een verbouwing…"
                className={`${inputClassName} resize-y placeholder:text-muted-light`}
              />
            </label>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="border-2 border-ink px-8 py-4 font-display text-lg font-bold uppercase tracking-wide transition-colors hover:bg-ink hover:text-cream"
            >
              ← Terug
            </button>
            <button
              type="submit"
              className="bg-accent px-8 py-4 font-display text-lg font-bold uppercase tracking-wide text-white transition-all hover:bg-accent-hover"
            >
              Volgende →
            </button>
          </div>
        </form>
      )}

      {step === 3 && (
        <div className="mt-8">
          <DateTimePicker
            selectedDate={form.date}
            selectedTime={form.time}
            onDateChange={(date) => updateField('date', date)}
            onTimeChange={(time) => updateField('time', time)}
          />

          {error && (
            <p className="mt-6 border-l-4 border-accent bg-cream-dark px-4 py-3 text-sm text-ink">
              {error}
            </p>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="border-2 border-ink px-8 py-4 font-display text-lg font-bold uppercase tracking-wide transition-colors hover:bg-ink hover:text-cream"
            >
              ← Terug
            </button>
            <button
              type="button"
              disabled={submitting || !form.date || !form.time}
              onClick={handleFinalSubmit}
              className="bg-accent px-8 py-4 font-display text-lg font-bold uppercase tracking-wide text-white transition-all hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting ? 'Bezig…' : 'Afspraak aanvragen'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
