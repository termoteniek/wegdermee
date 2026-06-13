import { FadeIn } from '../components/FadeIn'
import { ServiceBeforeAfter } from '../components/ServiceBeforeAfter'
import { ServiceHero } from '../components/ServiceHero'
import { Button } from '../components/ui/Button'
import { SectionLabel } from '../components/ui/SectionLabel'

const description = [
  'Oude meubels, defecte elektronica, groenafval of resten van een opruiming: wij nemen het allemaal mee. U hoeft niet te sorteren — alles mag door elkaar.',
  "Ideaal voor particulieren, VME's of kleine bedrijven die snel van overtollige spullen af willen.",
]

const included = [
  'Ophaling aan huis of op werf',
  'Geen sorteren vereist',
  'Correcte afvoer en verwerking',
  'Flexibele planning, 7 op 7',
]

const beforeAfter = [
  {
    before: '/services/rommelophaaldienst-voor-1.jpg',
    after: '/services/rommelophaaldienst-na-1.jpg',
    caption: 'Garage volledig leeggehaald',
  },
  {
    before: '/services/rommelophaaldienst-voor-2.jpg',
    after: '/services/rommelophaaldienst-na-2.jpg',
    caption: 'Zolder ontruimd',
  },
]

export function RommelophaaldienstPage() {
  return (
    <div className="flex flex-1 flex-col">
      <ServiceHero
        num="01"
        title="Rommelophaaldienst"
        intro="Te veel spullen, te weinig plaats? Wij halen je rommel op — groot of klein, sorteer jij niet, wij regelen de rest."
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

      <ServiceBeforeAfter pairs={beforeAfter} />

      <section className="border-t-2 border-ink bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionLabel>Prijzen</SectionLabel>
            <p className="mt-4 font-display text-6xl font-extrabold uppercase leading-none text-accent sm:text-7xl">
              Vanaf €75
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Prijs afhankelijk van volume, type afval en locatie. Vrijblijvende offerte op
              aanvraag.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="border-t-2 border-ink bg-ink py-20 text-cream sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <FadeIn className="text-center">
            <SectionLabel light>Klaar om te starten?</SectionLabel>
            <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-none tracking-tight sm:text-5xl lg:text-6xl">
              Boek uw rommelophaaldienst
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
