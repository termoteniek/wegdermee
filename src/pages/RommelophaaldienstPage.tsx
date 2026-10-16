import { FadeIn } from '../components/FadeIn'
import { ServiceBeforeAfter } from '../components/ServiceBeforeAfter'
import { ServiceClosing } from '../components/ServiceClosing'
import { ServiceHero } from '../components/ServiceHero'
import { ServicePricing } from '../components/ServicePricing'
import { SectionLabel } from '../components/ui/SectionLabel'

const description = [
  'Oude meubels, defecte elektronica, groenafval of resten van een opruiming: wij nemen het allemaal mee. U hoeft niet te sorteren — alles mag door elkaar.',
  "Ideaal voor particulieren, VZW's of bedrijven die snel van overtollige spullen af willen.",
]

const included = [
  'Ophaling aan huis of op werf',
  'Sorteren niet vereist',
  'Correcte afvoer en verwerking',
  'Flexibele planning, 7 op 7 bereikbaar',
]

const beforeAfterPairs = [
  { before: 'VoorEnNa/Voor1', after: 'VoorEnNa/Na1' },
  { before: 'VoorEnNa/Voor2', after: 'VoorEnNa/Na2' },
  { before: 'VoorEnNa/Voor3', after: 'VoorEnNa/Na3' },
  { before: 'VoorEnNa/Voor4', after: 'VoorEnNa/Na4' },
]

export function RommelophaaldienstPage() {
  return (
    <div className="flex flex-1 flex-col">
      <ServiceHero
        num="01"
        title="Rommelophaaldienst"
        intro="Te veel spullen, te weinig plaats? Wij halen uw rommel op — groot of klein, u sorteert niet, wij regelen alles."
        image="Werk/010"
        imageAlt="Medewerker laadt rommel in de open bestelwagen"
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
        title="Boek uw rommelophaaldienst"
        image="Werk/001"
        imageAlt="Twee medewerkers laden huisraad in de aanhangwagen"
      />
    </div>
  )
}
