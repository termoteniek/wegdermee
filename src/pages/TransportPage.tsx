import { FadeIn } from '../components/FadeIn'
import { HourlyServicePricing } from '../components/HourlyServicePricing'
import { ServiceBeforeAfter } from '../components/ServiceBeforeAfter'
import { ServiceClosing } from '../components/ServiceClosing'
import { ServiceHero } from '../components/ServiceHero'
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
        image="Werk/020"
        imageAlt="Medewerker laadt een grote doos in de bestelwagen"
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

      <ServiceClosing
        title="Boek uw transport"
        image="Werk/030"
        imageAlt="Medewerker tilt een mand in de geladen bestelwagen"
      />
    </div>
  )
}
