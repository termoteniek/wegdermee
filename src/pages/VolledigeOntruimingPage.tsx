import { FadeIn } from '../components/FadeIn'
import { ServiceBeforeAfter } from '../components/ServiceBeforeAfter'
import { ServiceClosing } from '../components/ServiceClosing'
import { ServiceHero } from '../components/ServiceHero'
import { ServicePricing } from '../components/ServicePricing'
import { SectionLabel } from '../components/ui/SectionLabel'

const description = [
  'Woning, appartement, handelspand of magazijn: wij zorgen voor een complete leeghaling van A tot Z. Meubels, keukens en vloerbedekking — alles mag mee.',
  'Perfect bij verhuizing, verkoop van een pand of nalatenschap.',
]

const included = [
  'Volledige ontruiming van het pand',
  'Vaste en losse inboedel',
  'Eventuele kelder, zolder of garage',
  'Proper achtergelaten, klaar voor gebruik',
]

const beforeAfterPairs = [
  { before: 'Ontruiming/Voor1', after: 'Ontruiming/Na1', label: 'Raamhoek' },
  { before: 'Ontruiming/Voor2', after: 'Ontruiming/Na2', label: 'Tuinzijde' },
]

export function VolledigeOntruimingPage() {
  return (
    <div className="flex flex-1 flex-col">
      <ServiceHero
        num="02"
        title="Volledige ontruiming"
        intro="Moet een pand volledig leeg? Wij halen alles weg — van zolder tot kelder — zodat u verder kunt zonder zorgen."
        image="Werk/035"
        imageAlt="Twee medewerkers halen een lamp weg in een woning"
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

      <ServiceBeforeAfter pairs={beforeAfterPairs} />

      <ServicePricing />

      <ServiceClosing
        title="Boek uw volledige ontruiming"
        image="Werk/080"
        imageAlt="Medewerker veegt een ontruimde ruimte aan"
      />
    </div>
  )
}
