import { useLayoutEffect, useMemo, useRef, useState, type FormEvent } from 'react'
import { formatEuro } from '../../lib/pricing'
import {
  emptyBookingForm,
  pricedServiceValues,
  serviceOptions,
  volumeOptions,
  type BookingFormData,
} from '../../types/booking'
import { DateTimePicker } from './DateTimePicker'

const inputClassName =
  'mt-2 w-full min-w-0 border-b-2 border-ink bg-transparent py-2 text-ink outline-none focus:border-accent'
const selectClassName = `${inputClassName} max-w-full cursor-pointer`
const labelClassName =
  'font-display text-xs font-semibold uppercase tracking-widest text-muted'

const stepLabels = ['Gegevens', 'Dienst', 'Datum & tijd'] as const
type Step = 1 | 2 | 3 | 4

const stepActionsClassName =
  'flex shrink-0 flex-col gap-3 border-t border-ink/10 pt-8 sm:flex-row'

export function BookingForm() {
  const [step, setStep] = useState<Step>(1)
  const [form, setForm] = useState<BookingFormData>(emptyBookingForm)
  const [submitting, setSubmitting] = useState(false)
  const shellRef = useRef<HTMLDivElement>(null)
  const stepStackRef = useRef<HTMLDivElement>(null)
  const [lockedWidth, setLockedWidth] = useState<number | null>(null)
  const [stepAreaHeight, setStepAreaHeight] = useState(0)

  useLayoutEffect(() => {
    const parent = shellRef.current?.parentElement
    if (!parent) return

    const syncWidth = () => {
      const width = parent.clientWidth
      if (width > 0) {
        setLockedWidth(width)
      }
    }

    syncWidth()
    const observer = new ResizeObserver(syncWidth)
    observer.observe(parent)
    return () => observer.disconnect()
  }, [])

  useLayoutEffect(() => {
    setStepAreaHeight(0)
  }, [lockedWidth])

  useLayoutEffect(() => {
    const stack = stepStackRef.current
    if (!stack || stepAreaHeight > 0) return

    const height = stack.getBoundingClientRect().height
    if (height > 0) {
      setStepAreaHeight(height)
    }
  }, [stepAreaHeight])

  function stepPanelClass(active: boolean) {
    const base = 'flex w-full min-w-0 flex-col'

    if (stepAreaHeight > 0) {
      return `${base} absolute inset-0 ${active ? 'z-10' : 'hidden'}`
    }

    return `${base} col-start-1 row-start-1 ${active ? 'z-10' : 'pointer-events-none invisible z-0'}`
  }

  function updateField<K extends keyof BookingFormData>(key: K, value: BookingFormData[K]) {
    setForm((current) => ({ ...current, [key]: value }))
  }

  function handleStepOneSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStep(2)
  }

  function handleStepTwoSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStep(3)
  }

  function handleFinalSubmit() {
    setSubmitting(true)
    setStep(4)
    setSubmitting(false)
  }

  const estimatedPrice = useMemo(() => {
    const selectedService = serviceOptions.find((option) => option.label === form.service)
    const selectedVolume = volumeOptions.find((option) => option.label === form.volume)

    if (!selectedService || !selectedVolume) {
      return null
    }

    if (!pricedServiceValues.has(selectedService.value)) {
      return { type: 'custom' as const }
    }

    return {
      type: 'fixed' as const,
      amount: selectedVolume.priceInclVat,
    }
  }, [form.service, form.volume])

  return (
    <div
      ref={shellRef}
      className="w-full min-w-0 max-w-full overflow-x-hidden border-2 border-white/15 bg-cream p-8 text-ink sm:p-10"
      style={
        lockedWidth
          ? { width: lockedWidth, minWidth: lockedWidth, maxWidth: lockedWidth }
          : undefined
      }
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-3">
        {stepLabels.map((label, index) => {
          const value = index + 1
          const isComplete = step === 4
          return (
            <div key={label} className="flex min-w-0 flex-1 items-center gap-3">
              <span
                className={`flex size-9 shrink-0 items-center justify-center border-2 font-display text-sm font-bold ${
                  isComplete || step >= value
                    ? 'border-accent bg-accent text-white'
                    : 'border-ink/20 text-muted'
                }`}
              >
                {value}
              </span>
              <span className="min-w-0 truncate font-display text-xs font-semibold uppercase tracking-widest text-muted">
                {label}
              </span>
              {value < stepLabels.length && (
                <span className="hidden h-px flex-1 bg-ink/15 sm:block" aria-hidden />
              )}
            </div>
          )
        })}
      </div>

      <div
        ref={stepStackRef}
        className={`relative mt-8 w-full min-w-0 ${
          stepAreaHeight === 0 ? 'grid [&>*]:col-start-1 [&>*]:row-start-1' : ''
        }`}
        style={stepAreaHeight > 0 ? { minHeight: stepAreaHeight } : undefined}
      >
        <form
          onSubmit={handleStepOneSubmit}
          className={stepPanelClass(step === 1)}
          aria-hidden={step !== 1}
          inert={step !== 1 ? true : undefined}
        >
          <div className="flex min-h-0 flex-1 flex-col">
            <div className="grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className={labelClassName}>Voornaam</span>
              <input
                type="text"
                autoComplete="given-name"
                value={form.voornaam}
                onChange={(event) => updateField('voornaam', event.target.value)}
                className={inputClassName}
              />
            </label>

            <label className="block">
              <span className={labelClassName}>Familienaam</span>
              <input
                type="text"
                autoComplete="family-name"
                value={form.familienaam}
                onChange={(event) => updateField('familienaam', event.target.value)}
                className={inputClassName}
              />
            </label>

            <label className="block">
              <span className={labelClassName}>E-mail</span>
              <input
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(event) => updateField('email', event.target.value)}
                className={inputClassName}
              />
            </label>

            <label className="block">
              <span className={labelClassName}>Telefoon</span>
              <input
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={(event) => updateField('phone', event.target.value)}
                placeholder="+32 498 43 88 78"
                className={inputClassName}
              />
            </label>

            <label className="block sm:col-span-2">
              <span className={labelClassName}>Straatnaam</span>
              <input
                type="text"
                autoComplete="address-line1"
                value={form.straatnaam}
                onChange={(event) => updateField('straatnaam', event.target.value)}
                placeholder="Kerkstraat"
                className={inputClassName}
              />
            </label>

            <label className="block">
              <span className={labelClassName}>Huisnummer</span>
              <input
                type="text"
                autoComplete="address-line2"
                value={form.huisnummer}
                onChange={(event) => updateField('huisnummer', event.target.value)}
                placeholder="12"
                className={inputClassName}
              />
            </label>

            <label className="block">
              <span className={labelClassName}>Postcode</span>
              <input
                type="text"
                inputMode="numeric"
                autoComplete="postal-code"
                value={form.postcode}
                onChange={(event) => updateField('postcode', event.target.value)}
                placeholder="9000"
                className={inputClassName}
              />
            </label>

            <label className="block sm:col-span-2">
              <span className={labelClassName}>Gemeente</span>
              <input
                type="text"
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
                checked={form.privacyAccepted}
                onChange={(event) => updateField('privacyAccepted', event.target.checked)}
                className="mt-1 size-4 accent-accent"
              />
              <span>
                Ik ga akkoord met het verwerken van mijn gegevens conform het{' '}
                <a href="#" className="text-ink underline underline-offset-2 hover:text-accent">
                  privacybeleid
                </a>
                .
              </span>
            </label>
          </div>

          <div className={stepActionsClassName}>
            <button
              type="submit"
              className="w-full bg-accent py-4 font-display text-lg font-bold uppercase tracking-wide text-white transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-auto sm:px-12"
            >
              Volgende →
            </button>
          </div>
        </form>

        <form
          onSubmit={handleStepTwoSubmit}
          className={stepPanelClass(step === 2)}
          aria-hidden={step !== 2}
          inert={step !== 2 ? true : undefined}
        >
          <div className="flex min-h-0 flex-1 flex-col">
            <div className="grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className={labelClassName}>Gewenste dienst</span>
              <select
                value={form.service}
                onChange={(event) => updateField('service', event.target.value)}
                className={selectClassName}
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
              <span className={labelClassName}>Geschatte hoeveelheid</span>
              <select
                value={form.volume}
                onChange={(event) => updateField('volume', event.target.value)}
                className={selectClassName}
              >
                <option value="">Maak een keuze</option>
                {volumeOptions.map((option) => (
                  <option key={option.value} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <div className="sm:col-span-2 border-l-4 border-accent px-4 py-3">
              <p className={labelClassName}>Geschatte prijs</p>
              <p className="mt-2 font-display text-2xl font-bold text-ink">
                {!estimatedPrice ? (
                  <span className="text-muted">Maak een keuze</span>
                ) : estimatedPrice.type === 'custom' ? (
                  <span>Op maat — offerte na bezichtiging</span>
                ) : (
                  <span className="text-accent">
                    {formatEuro(estimatedPrice.amount)} incl. btw
                  </span>
                )}
              </p>
            </div>

            <label className="block sm:col-span-2">
              <span className={labelClassName}>Beschrijving</span>
              <textarea
                rows={4}
                value={form.description}
                onChange={(event) => updateField('description', event.target.value)}
                placeholder="Wat moet er weg? Bijv. oude meubels, groenafval, resten van een verbouwing…"
                className={`${inputClassName} resize-none placeholder:text-muted-light`}
              />
            </label>
          </div>
          </div>

          <div className={stepActionsClassName}>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="border-2 border-ink px-8 py-4 font-display text-lg font-bold uppercase tracking-wide transition-colors hover:bg-ink hover:text-cream sm:flex-1"
            >
              ← Terug
            </button>
            <button
              type="submit"
              className="bg-accent px-8 py-4 font-display text-lg font-bold uppercase tracking-wide text-white transition-colors hover:bg-accent-hover sm:flex-1"
            >
              Volgende →
            </button>
          </div>
        </form>

        <div
          className={stepPanelClass(step === 3)}
          aria-hidden={step !== 3}
          inert={step !== 3 ? true : undefined}
        >
          <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
            <DateTimePicker
              selectedDate={form.date}
              selectedTime={form.time}
              onDateChange={(date) => updateField('date', date)}
              onTimeChange={(time) => updateField('time', time)}
            />
          </div>

          <div className={stepActionsClassName}>
            <button
              type="button"
              onClick={() => setStep(2)}
              className="min-w-0 border-2 border-ink px-8 py-4 font-display text-lg font-bold uppercase tracking-wide transition-colors hover:bg-ink hover:text-cream sm:flex-1"
            >
              ← Terug
            </button>
            <button
              type="button"
              disabled={submitting}
              onClick={handleFinalSubmit}
              className="min-w-0 bg-accent px-8 py-4 font-display text-lg font-bold uppercase tracking-wide text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50 sm:flex-1"
            >
              {submitting ? 'Bezig…' : 'Afspraak aanvragen'}
            </button>
          </div>
        </div>

        <div
          className={`${stepPanelClass(step === 4)} items-center justify-center text-center`}
          aria-hidden={step !== 4}
          inert={step !== 4 ? true : undefined}
        >
          <div className="flex flex-1 flex-col items-center justify-center">
            <span className="font-display text-6xl font-extrabold text-accent">✓</span>
            <p className="mt-4 font-display text-2xl font-bold uppercase">Aanvraag ontvangen</p>
            <p className="mt-4 max-w-md text-muted">
              {form.voornaam ? `Bedankt ${form.voornaam}! ` : 'Bedankt! '}
              We hebben uw aanvraag ontvangen en nemen telefonisch contact op om uw afspraak
              definitief te bevestigen.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
