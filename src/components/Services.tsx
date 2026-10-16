import { Link } from 'react-router-dom'
import { FadeIn } from './FadeIn'
import { PhotoSlot } from './ui/PhotoSlot'
import { SectionLabel } from './ui/SectionLabel'
import { VOOR_EN_NA_WIDTHS, WORK_WIDTHS } from './ResponsiveImage'

const services = [
  {
    num: '01',
    title: 'Rommelophaaldienst',
    description:
      'Te veel spullen, te weinig plaats? Wij halen uw rommel op — groot of klein, u sorteert niet, wij regelen alles.',
    href: '/diensten/rommelophaaldienst',
    image: 'Werk/010',
    imageAlt: 'Medewerker laadt rommel in de open bestelwagen',
    widths: [...WORK_WIDTHS],
    // Person + logo sit mid-low in the portrait frame
    objectPosition: 'object-[center_58%]',
  },
  {
    num: '02',
    title: 'Volledige ontruiming',
    description:
      'Moet een pand volledig leeg? Wij halen alles weg — van zolder tot kelder — zodat u verder kunt zonder zorgen.',
    href: '/diensten/volledige-ontruiming',
    image: 'Werk/035',
    imageAlt: 'Twee medewerkers halen een lamp weg in een woning',
    widths: [...WORK_WIDTHS],
    objectPosition: 'object-center',
  },
  {
    num: '03',
    title: 'Werf opruiming',
    description:
      'Verbouwing of renovatie? Wij ruimen uw werf op zodat u verder kunt bouwen aan iets nieuws.',
    href: '/diensten/werf-opruiming',
    image: 'Werf/balken',
    imageAlt: 'Balken en hout op een werf',
    widths: [...VOOR_EN_NA_WIDTHS],
    objectPosition: 'object-[center_45%]',
  },
  {
    num: '04',
    title: 'Kleine verhuizingen',
    description:
      'Een paar meubels of dozen van A naar B — geen volledige verhuis, wel snel en correct geregeld.',
    href: '/diensten/kleine-verhuizingen',
    image: 'Werk/060',
    imageAlt: 'Medewerkers dragen een meubel naar buiten',
    widths: [...WORK_WIDTHS],
    objectPosition: 'object-[center_42%]',
  },
  {
    num: '05',
    title: 'Transport',
    description:
      'Grote aankoop bij IKEA, Brico of een andere winkel? Wij halen het op en brengen het veilig naar u toe.',
    href: '/diensten/transport',
    image: 'Werk/020',
    imageAlt: 'Medewerker laadt een grote doos in de bestelwagen',
    widths: [...WORK_WIDTHS],
    // Workers + logo span mid to lower frame
    objectPosition: 'object-[center_55%]',
  },
]

export function Services() {
  return (
    <section id="diensten" className="relative -mt-px bg-cream pt-28 pb-24 sm:pt-36 sm:pb-32">
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8">
        <div className="border-b-2 border-ink pb-10">
          <FadeIn>
            <SectionLabel>Diensten</SectionLabel>
            <h2 className="mt-3 max-w-3xl font-display text-5xl font-extrabold uppercase leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Alles wat weg moet
            </h2>
          </FadeIn>
        </div>

        <ul className="mt-12 border-y-2 border-ink">
          {services.map((service, i) => {
            const inverted = i % 2 === 1
            return (
              <li key={service.num} className="border-b-2 border-ink last:border-b-0">
                <FadeIn>
                  <Link
                    to={service.href}
                    className="group grid focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
                  >
                    <figure
                      className={`relative aspect-[4/5] overflow-hidden ${
                        inverted ? 'lg:order-2' : ''
                      }`}
                    >
                      <PhotoSlot
                        name={service.image}
                        alt={service.imageAlt}
                        widths={service.widths}
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        fill
                        className={`${service.objectPosition} transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
                      />
                    </figure>
                    <div
                      className={`flex flex-col justify-center px-5 py-10 sm:px-10 lg:px-12 ${
                        inverted ? 'bg-ink text-cream' : 'bg-cream text-ink'
                      }`}
                    >
                      <span className="font-display text-6xl font-extrabold leading-none text-accent sm:text-7xl">
                        {service.num}
                      </span>
                      <h3 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
                        {service.title}
                      </h3>
                      <p className={`mt-3 max-w-md text-lg ${inverted ? 'text-white/70' : 'text-muted'}`}>
                        {service.description}
                      </p>
                      <span className="mt-8 font-display text-base font-bold uppercase tracking-widest text-accent underline-offset-4 group-hover:underline">
                        Meer info →
                      </span>
                    </div>
                  </Link>
                </FadeIn>
              </li>
            )
          })}
        </ul>

        <div className="mt-12">
          <FadeIn>
            <p className="border-l-4 border-accent bg-cream-dark px-6 py-5 text-ink">
              <strong className="font-display uppercase tracking-wide">Opgelet —</strong>{' '}
              wij verwerken geen gevaarlijk afval (asbest, vloeistoffen, gas, ...)
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
