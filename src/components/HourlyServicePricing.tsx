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
    <section className="border-t-2 border-ink bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <SectionLabel>Prijzen</SectionLabel>
          <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-none tracking-tight text-ink sm:text-5xl">
            Transparante tarieven
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Uw prijs hangt af van het aantal man en de afstand. Geen verrassingen — u weet vooraf
            waar u aan toe bent.
          </p>
        </FadeIn>

        <FadeIn delay={0.05} className="mt-12">
          <div className="relative border-2 border-ink bg-ink p-8 text-center text-cream sm:p-12">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              Vanaf
            </p>
            <div className="mt-2 flex flex-wrap items-baseline justify-center gap-x-3">
              <p className="font-display text-6xl font-extrabold uppercase leading-none sm:text-7xl">
                {formatEuro(startingRate.price)}
              </p>
              <p className="text-xs font-medium text-white/50 sm:text-sm">/uur</p>
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-white/60">
              <span>{startingRate.people} man</span>
              <span aria-hidden className="text-white/30">
                ·
              </span>
              <span>meubelbak (grote camionette)</span>
            </div>
            <div className="absolute -right-2 -top-2 h-full w-full border-2 border-accent" aria-hidden />
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {displayRates.map((rate, index) => (
            <FadeIn key={rate.people} delay={0.08 + index * 0.04}>
              <article className="group relative flex h-full flex-col border-2 border-ink bg-cream-dark p-6 transition-colors hover:bg-cream">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-5xl font-extrabold leading-none text-ink">
                      {rate.people}
                      <span className="ml-1 text-2xl text-muted">man</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-3xl font-extrabold text-accent">
                      {formatEuro(rate.price)}
                    </p>
                    <p className="mt-1 text-xs text-muted">/uur</p>
                  </div>
                </div>

                <div className="mt-6 h-1.5 w-full bg-ink/10" aria-hidden>
                  <div
                    className="h-full bg-accent transition-all group-hover:bg-accent-hover"
                    style={{ width: `${(rate.people / maxPeople) * 100}%` }}
                  />
                </div>
              </article>
            </FadeIn>
          ))}

          <FadeIn delay={0.15} className="col-span-full grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pricingNotes.map((note) => (
              <p key={note} className="px-2 text-center text-sm leading-relaxed text-muted">
                <span className="text-accent" aria-hidden>
                  →{' '}
                </span>
                {note}
              </p>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
