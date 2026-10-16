import { FadeIn } from '../components/FadeIn'
import { ServiceBeforeAfter } from '../components/ServiceBeforeAfter'
import { ServiceClosing } from '../components/ServiceClosing'
import { ServiceHero } from '../components/ServiceHero'
import { ServicePricing } from '../components/ServicePricing'
import { SectionLabel } from '../components/ui/SectionLabel'
import { VOOR_EN_NA_WIDTHS } from '../components/ResponsiveImage'

const description = [
  'Puin, hout, isolatie, oude ramen of restmaterialen: wij halen alles weg zodat uw werf weer veilig en overzichtelijk is.',
  "Voor aannemers, particulieren en VZW's — snel ter plaatse, stipt en correct.",
]

const included = [
  'Ophaling bouw- en sloopafval',
  'U hoeft geen container te regelen',
  'Flexibele timing rond uw werfplanning',
  'Correcte afvoer via erkende kanalen',
]

const beforeAfterPairs = [
  { before: 'Werf/balken', after: 'Werf/hout-mos' },
]

export function WerfOpruimingPage() {
  return (
    <div className="flex flex-1 flex-col">
      <ServiceHero
        num="03"
        title="Werf opruiming"
        intro="Verbouwing of renovatie? Wij ruimen uw werf op zodat u verder kunt bouwen aan iets nieuws."
        image="Werf/balken"
        imageAlt="Balken en hout op een werf"
        widths={[...VOOR_EN_NA_WIDTHS]}
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
        title="Boek uw werf opruiming"
        image="Werf/hout-mos"
        imageAlt="Hout en groenafval na een werfopruiming"
        widths={[...VOOR_EN_NA_WIDTHS]}
      />
    </div>
  )
}
