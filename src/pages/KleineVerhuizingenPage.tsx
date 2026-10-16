import { FadeIn } from '../components/FadeIn'
import { HourlyServicePricing } from '../components/HourlyServicePricing'
import { ServiceBeforeAfter } from '../components/ServiceBeforeAfter'
import { ServiceClosing } from '../components/ServiceClosing'
import { ServiceHero } from '../components/ServiceHero'
import { SectionLabel } from '../components/ui/SectionLabel'

const description = [
  'Niet elke verhuis hoeft groot te zijn. Wij helpen u met het verplaatsen van meubels, dozen, witgoed of enkele kamers — van adres A naar adres B.',
  'Handig bij een kleinere verhuis, studentenkamer, of wanneer u enkel de zwaarste items wilt laten vervoeren.',
]

const included = [
  'Transport van meubels en dozen',
  'Twee adressen (ophaling + aflevering)',
  'Zorgvuldige behandeling van uw spullen',
  'Flexibele planning op afspraak',
]

export function KleineVerhuizingenPage() {
  return (
    <div className="flex flex-1 flex-col">
      <ServiceHero
        num="04"
        title="Kleine verhuizingen"
        intro="Een paar meubels of dozen van A naar B — geen volledige verhuis, wel snel en correct geregeld."
        image="Werk/060"
        imageAlt="Medewerkers dragen een meubel naar buiten"
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
        title="Boek uw kleine verhuizing"
        image="Werk/050"
        imageAlt="Medewerker laadt spullen in de bestelwagen aan huis"
      />
    </div>
  )
}
