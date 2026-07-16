import { FadeIn } from '../components/FadeIn'
import { HourlyServicePricing } from '../components/HourlyServicePricing'
import { ServiceBeforeAfter } from '../components/ServiceBeforeAfter'
import { ServiceHero } from '../components/ServiceHero'
import { Button } from '../components/ui/Button'
import { SectionLabel } from '../components/ui/SectionLabel'

const description = [
  'Grote aankoop bij IKEA, Brico, Hubo of een andere winkel — maar geen bestelwagen om het zelf te verplaatsen? Wij rijden voor u naar de winkel, laden alles in en brengen het veilig naar uw adres.',
  'Ideaal voor meubels, keukenapparatuur, bouwmaterialen of een grote bestelling die niet in uw eigen wagen past.',
]

const included = [
  'Ophaling bij winkel of leverancier',
  'Transport naar uw adres',
  'Hulp bij laden en lossen',
  'Flexibele planning op afspraak',
]

export function TransportPage() {
  return (
    <div className="flex flex-1 flex-col">
      <ServiceHero
        num="05"
        title="Transport"
        intro="Iets groots gekocht bij IKEA, Brico of een andere winkel? Wij halen het op en brengen het veilig naar u toe."
      />

      <section className="border-t-2 border-ink bg-cream-dark py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <SectionLabel>Wat wij doen</SectionLabel>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
                {description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <SectionLabel>Inbegrepen</SectionLabel>
              <ul className="mt-4 space-y-3">
                {included.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border-l-4 border-accent pl-4 font-display text-lg font-semibold uppercase tracking-tight text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      <ServiceBeforeAfter />

      <HourlyServicePricing />

      <section className="border-t-2 border-ink bg-ink py-20 text-cream sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <FadeIn className="text-center">
            <SectionLabel light>Klaar om te starten?</SectionLabel>
            <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-none tracking-tight sm:text-5xl lg:text-6xl">
              Boek uw transport
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-lg text-white/60">
              Vraag een vrijblijvende offerte aan of plan direct een afspraak. Wij nemen snel
              contact op.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/contact">Offerte aanvragen</Button>
              <Button
                href="tel:+32498438878"
                variant="ghost"
                className="!border-white/25 !bg-white/10 !text-white hover:!bg-white/20"
              >
                Bel +32 498 43 88 78
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
