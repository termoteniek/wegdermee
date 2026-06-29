import { FadeIn } from './FadeIn'
import { SectionLabel } from './ui/SectionLabel'
import { formatEuro, pricingTiers, PRICING_EXTRA_PER_KG, PRICING_BASE_INCL_VAT } from '../lib/pricing'

export function ServicePricing() {
  const startingPrice = pricingTiers[0].priceInclVat

  return (
    <section className="border-t-2 border-ink bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <SectionLabel>Prijzen</SectionLabel>
          <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-none tracking-tight text-ink sm:text-5xl">
            Transparante tarieven
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Uw prijs hangt af van volume en gewicht. Geen verrassingen — u weet vooraf waar u aan toe bent.
          </p>
        </FadeIn>

        <FadeIn delay={0.05} className="mt-12">
          <div className="relative border-2 border-ink bg-ink p-8 text-center text-cream sm:p-12">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              Vanaf
            </p>
            <p className="mt-2 font-display text-6xl font-extrabold uppercase leading-none sm:text-7xl">
              {formatEuro(startingPrice)}
            </p>
            <p className="mt-3 text-white/60">incl. btw · tot {pricingTiers[0].volumeM3} m³ · {pricingTiers[0].weightKg} kg</p>
            <div className="absolute -right-2 -top-2 h-full w-full border-2 border-accent" aria-hidden />
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <FadeIn key={tier.volumeM3} delay={0.08 + index * 0.04}>
              <article
                className={`group relative flex h-full flex-col border-2 border-ink bg-cream-dark p-6 transition-colors hover:bg-cream ${
                  index === 0 ? 'ring-2 ring-accent ring-offset-2 ring-offset-cream' : ''
                }`}
              >
                {index === 0 && (
                  <span className="absolute -top-px right-4 -translate-y-1/2 bg-accent px-3 py-1 font-display text-xs font-bold uppercase tracking-widest text-white">
                    Basis
                  </span>
                )}

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-5xl font-extrabold leading-none text-ink">
                      {tier.volumeM3}
                      <span className="ml-1 text-2xl text-muted">m³</span>
                    </p>
                    <p className="mt-2 font-display text-sm font-semibold uppercase tracking-widest text-muted">
                      {tier.duration}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-3xl font-extrabold text-accent">
                      {formatEuro(tier.priceInclVat)}
                    </p>
                    <p className="mt-1 text-xs text-muted">incl. btw</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-ink/15 pt-4">
                  <span className="border border-ink/20 bg-cream px-2.5 py-1 font-display text-xs font-semibold uppercase tracking-wide text-ink">
                    {tier.weightKg} kg
                  </span>
                  <span className="border border-ink/20 bg-cream px-2.5 py-1 font-display text-xs font-semibold uppercase tracking-wide text-muted">
                    {formatEuro(tier.priceExVat)} ex. btw
                  </span>
                </div>

                <div
                  className="mt-4 h-1.5 w-full bg-ink/10"
                  aria-hidden
                >
                  <div
                    className="h-full bg-accent transition-all group-hover:bg-accent-hover"
                    style={{ width: `${(tier.volumeM3 / pricingTiers[pricingTiers.length - 1].volumeM3) * 100}%` }}
                  />
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.15} className="mt-12">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
            <div className="border-l-4 border-accent bg-cream-dark px-6 py-5">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Hoe berekend?
              </p>
              <p className="mt-3 font-display text-2xl font-bold uppercase leading-snug text-ink sm:text-3xl">
                {formatEuro(PRICING_BASE_INCL_VAT)} minimum + {formatEuro(PRICING_EXTRA_PER_KG, 2)} per extra kilo
              </p>
              <p className="mt-3 text-muted">
                Tot {pricingTiers[0].weightKg} kg betaalt u het minimumbedrag. Daarboven rekenen wij{' '}
                {formatEuro(PRICING_EXTRA_PER_KG, 2)} per extra kilogram.
              </p>
            </div>

            <ul className="space-y-2 text-sm text-muted lg:max-w-xs">
              <li className="flex gap-2">
                <span className="text-accent" aria-hidden>→</span>
                Eerste 50 km rijden inclusief
              </li>
              <li className="flex gap-2">
                <span className="text-accent" aria-hidden>→</span>
                Offerte op maat bij grotere volumes
              </li>
              <li className="flex gap-2">
                <span className="text-accent" aria-hidden>→</span>
                Geen gevaarlijk afval (asbest, vloeistoffen, …)
              </li>
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
