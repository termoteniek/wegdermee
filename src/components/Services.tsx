import { FadeIn } from './FadeIn'
import { SectionLabel } from './ui/SectionLabel'

const services = [
  {
    num: '01',
    title: 'Rommelophaaldienst',
    description:
      'Oude meubels, defecte elektronica en groenafval — wij verzorgen een efficiënte ophaling volgens de geldende regelgeving.',
    cta: 'Afspraak aanvragen',
  },
  {
    num: '02',
    title: 'Volledige ontruiming',
    description:
      'Woning, appartement of bedrijfspand: een zorgvuldige, complete leeghaling van begin tot eind.',
    cta: 'Offerte aanvragen',
  },
  {
    num: '03',
    title: 'Werfopruiming',
    description:
      'Na een verbouwing ruimen wij het terrein op, zodat u ongestoord verder kunt werken.',
    cta: 'Contact opnemen',
  },
  {
    num: '04',
    title: 'Zakelijke dienstverlening',
    description:
      'Kantoorverhuizing, stockafval of grotere B2B-opdrachten — wij schalen mee met uw planning.',
    cta: 'Offerte aanvragen',
  },
]

export function Services() {
  return (
    <section id="diensten" className="section-rule py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_minmax(0,22rem)] lg:items-end lg:gap-16">
          <FadeIn>
            <SectionLabel>Diensten</SectionLabel>
            <h2 className="mt-3 font-serif text-3xl font-bold text-navy sm:text-4xl">
              Ons aanbod
            </h2>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="text-base leading-relaxed text-muted lg:text-right">
              Van een enkele ophaling tot een volledige ontruiming — één aanspreekpunt,
              duidelijke afspraken en een vaste werkwijze.
            </p>
          </FadeIn>
        </div>

        <ul className="mt-14 divide-y divide-line border-y border-line">
          {services.map((service, i) => (
            <FadeIn key={service.num} delay={i * 0.05}>
              <li className="group grid gap-6 py-10 transition-colors hover:bg-paper-alt/60 sm:grid-cols-[4.5rem_1fr_auto] sm:items-start sm:gap-10 sm:py-12 sm:px-4">
                <span className="font-serif text-2xl font-bold text-gold/80">
                  {service.num}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-navy sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
                <a
                  href="#contact"
                  className="self-center text-sm font-semibold text-accent transition-colors hover:text-accent-hover sm:self-start sm:pt-1 sm:text-right"
                >
                  {service.cta} →
                </a>
              </li>
            </FadeIn>
          ))}
        </ul>

        <FadeIn className="mt-12">
          <aside className="rounded-sm border border-line bg-paper-alt px-6 py-5 text-sm leading-relaxed text-ink-soft">
            <strong className="font-semibold text-navy">Let op:</strong> wij verwerken
            geen gevaarlijk afval (onder meer asbest, vloeistoffen en gasflessen).
            Voor dergelijk materiaal verwijzen wij u door naar een erkende instantie.
          </aside>
        </FadeIn>
      </div>
    </section>
  )
}
