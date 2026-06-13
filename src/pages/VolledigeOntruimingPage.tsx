import { FadeIn } from '../components/FadeIn'
import { ServiceBeforeAfter } from '../components/ServiceBeforeAfter'
import { ServiceHero } from '../components/ServiceHero'
import { Button } from '../components/ui/Button'
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

const beforeAfter = [
  {
    before: '/services/volledige-ontruiming-voor-1.jpg',
    after: '/services/volledige-ontruiming-na-1.jpg',
    caption: 'Appartement volledig ontruimd',
  },
  {
    before: '/services/volledige-ontruiming-voor-2.jpg',
    after: '/services/volledige-ontruiming-na-2.jpg',
    caption: 'Handelspand leeggehaald',
  },
]

export function VolledigeOntruimingPage() {
  return (
    <div className="flex flex-1 flex-col">
      <ServiceHero
        num="02"
        title="Volledige ontruiming"
        intro="Moet een pand volledig leeg? Wij halen alles weg — van zolder tot kelder — zodat u verder kunt zonder zorgen."
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
              Vanaf €450
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Prijs op maat na bezichtiging. Transparante offerte, geen verrassingen achteraf.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="border-t-2 border-ink bg-ink py-20 text-cream sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <FadeIn className="text-center">
            <SectionLabel light>Klaar om te starten?</SectionLabel>
            <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-none tracking-tight sm:text-5xl lg:text-6xl">
              Boek uw volledige ontruiming
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
