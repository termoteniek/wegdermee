import { FadeIn } from './FadeIn'
import { SectionLabel } from './ui/SectionLabel'
import { formatEuro, largePricingTier, pricingTiers } from '../lib/pricing'

const maxVolumeM3 = 20
const displayTiers = pricingTiers.slice(1)

const pricingNotes = [
  'Eerste 50 km rijden inclusief (€0.50 per extra km)',
  'Offerte op maat bij grotere volumes',
  'Geen gevaarlijk afval (asbest, vloeistoffen, …)',
]

function PricingTierCard({
  tier,
  showBasisBadge,
}: {
  tier: (typeof pricingTiers)[number]
  showBasisBadge?: boolean
}) {
  return (
    <article
      className={`group relative flex h-full flex-col border-2 border-ink bg-cream-dark p-6 transition-colors hover:bg-cream ${
        showBasisBadge ? 'ring-2 ring-accent ring-offset-2 ring-offset-cream' : ''
      }`}
    >
      {showBasisBadge && (
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
        </div>
        <div className="text-right">
          <p className="font-display text-3xl font-extrabold text-accent">
            {formatEuro(tier.priceInclVat)}
          </p>
          <p className="mt-1 text-xs text-muted">incl. btw</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3 border-t border-ink/15 pt-4">
        <span className="border-2 border-ink/15 bg-cream px-4 py-2 font-display text-sm font-bold uppercase tracking-wide text-ink sm:text-base">
          {tier.weightKg} kg
        </span>
        <span className="border-2 border-ink/15 bg-cream px-4 py-2 font-display text-sm font-bold uppercase tracking-wide text-muted sm:text-base">
          {formatEuro(tier.priceExVat)} ex. btw
        </span>
      </div>

      <div className="mt-4 h-1.5 w-full bg-ink/10" aria-hidden>
        <div
          className="h-full bg-accent transition-all group-hover:bg-accent-hover"
          style={{ width: `${(tier.volumeM3 / maxVolumeM3) * 100}%` }}
        />
      </div>
    </article>
  )
}

export function ServicePricing() {
  const startingTier = pricingTiers[0]

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
              {formatEuro(startingTier.priceInclVat)}
            </p>
            <p className="mt-2 text-sm text-white/50">
              {formatEuro(startingTier.priceExVat)} ex. btw
            </p>
            <p className="mt-3 text-white/60">
              incl. btw · tot {startingTier.volumeM3} m³ · {startingTier.weightKg} kg
            </p>
            <div className="absolute -right-2 -top-2 h-full w-full border-2 border-accent" aria-hidden />
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {displayTiers.map((tier, index) => (
            <FadeIn key={tier.volumeM3} delay={0.08 + index * 0.04}>
              <PricingTierCard tier={tier} showBasisBadge={index === 0} />
            </FadeIn>
          ))}

          <FadeIn delay={0.08 + displayTiers.length * 0.04}>
            <article className="group relative flex h-full flex-col border-2 border-ink bg-cream-dark p-6 transition-colors hover:bg-cream">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-5xl font-extrabold leading-none text-ink">
                    {largePricingTier.volumeLabel}
                    <span className="ml-1 text-2xl text-muted">m³</span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-display text-2xl font-extrabold uppercase leading-tight text-accent sm:text-3xl">
                    {largePricingTier.priceLabel}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 border-t border-ink/15 pt-4">
                <span className="border-2 border-ink/15 bg-cream px-4 py-2 font-display text-sm font-bold uppercase tracking-wide text-ink sm:text-base">
                  {largePricingTier.weightLabel} kg
                </span>
              </div>

              <div className="mt-4 h-1.5 w-full bg-ink/10" aria-hidden>
                <div className="h-full w-full bg-accent transition-all group-hover:bg-accent-hover" />
              </div>
            </article>
          </FadeIn>

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
