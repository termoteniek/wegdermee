import { FadeIn } from './FadeIn'
import { SectionLabel } from './ui/SectionLabel'
import { formatEuro } from '../lib/pricing'

const hourlyRates = [
  {
    people: 2,
    price: 80,
  },
  {
    people: 3,
    price: 115,
  },
  {
    people: 4,
    price: 150,
  },
]

const pricingNotes = [
  'Kilometervergoeding: €1 per km. Vanaf 150 km: 50 km gratis',
  'Afstand gerekend van vertrek depot tot aankomst depot (Sint-Amandsberg)',
  'Toeslag van €30 voor remork (meer laadruimte)',
]

const maxPeople = 4
const startingRate = hourlyRates[0]
const displayRates = hourlyRates.slice(1)

export function HourlyServicePricing() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="max-w-3xl">
          <SectionLabel>Prijzen</SectionLabel>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            Transparante tarieven
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Uw prijs hangt af van het aantal man en de afstand. Geen verrassingen — u weet vooraf
            waar u aan toe bent.
          </p>
        </FadeIn>

        <FadeIn className="mt-12">
          <div className="bg-ink p-8 text-cream sm:p-12">
            <p className="font-display text-sm font-semibold text-white/70">Vanaf</p>
            <div className="mt-2 flex flex-wrap items-baseline gap-x-3">
              <p className="font-display text-6xl font-semibold tabular-nums leading-none sm:text-7xl">
                {formatEuro(startingRate.price)}
              </p>
              <p className="text-sm text-white/60">/uur</p>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/70">
              <span>{startingRate.people} man</span>
              <span aria-hidden className="text-white/30">
                ·
              </span>
              <span>meubelbak (grote camionette)</span>
            </div>
          </div>
        </FadeIn>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {displayRates.map((rate) => (
            <article
              key={rate.people}
              className="flex h-full flex-col border border-line bg-surface p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="font-display text-5xl font-semibold tabular-nums leading-none text-ink">
                  {rate.people}
                  <span className="ml-1 text-2xl text-muted">man</span>
                </p>
                <div className="text-right">
                  <p className="font-display text-3xl font-semibold tabular-nums text-accent">
                    {formatEuro(rate.price)}
                  </p>
                  <p className="mt-1 text-xs text-muted">/uur</p>
                </div>
              </div>
              <div className="mt-6 h-1.5 w-full bg-ink/10" aria-hidden>
                <div
                  className="h-full bg-accent"
                  style={{ width: `${(rate.people / maxPeople) * 100}%` }}
                />
              </div>
            </article>
          ))}
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pricingNotes.map((note) => (
            <li key={note} className="text-sm leading-relaxed text-muted">
              {note}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
