import { Link } from 'react-router-dom'
import { serviceShots, werkName } from '../data/werkImages'
import { FadeIn } from './FadeIn'
import { ResponsiveImage, WERK_WIDTHS } from './ResponsiveImage'
import { SectionLabel } from './ui/SectionLabel'

const services = [
  {
    title: 'Rommelophaaldienst',
    description:
      'Te veel spullen, te weinig plaats? Wij halen uw rommel op — groot of klein, u sorteert niet, wij regelen alles.',
    href: '/diensten/rommelophaaldienst',
    shot: serviceShots.rommel,
  },
  {
    title: 'Volledige ontruiming',
    description:
      'Moet een pand volledig leeg? Wij halen alles weg — van zolder tot kelder — zodat u verder kunt zonder zorgen.',
    href: '/diensten/volledige-ontruiming',
    shot: serviceShots.ontruiming,
  },
  {
    title: 'Werf opruiming',
    description:
      'Verbouwing of renovatie? Wij ruimen uw werf op zodat u verder kunt bouwen aan iets nieuws.',
    href: '/diensten/werf-opruiming',
    shot: serviceShots.werf,
  },
  {
    title: 'Kleine verhuizingen',
    description:
      'Een paar meubels of dozen van A naar B — geen volledige verhuis, wel snel en correct geregeld.',
    href: '/diensten/kleine-verhuizingen',
    shot: serviceShots.verhuizing,
  },
  {
    title: 'Transport',
    description:
      'Grote aankoop bij IKEA, Brico of een andere winkel? Wij halen het op en brengen het veilig naar u toe.',
    href: '/diensten/transport',
    shot: serviceShots.transport,
  },
]

export function Services() {
  return (
    <section id="diensten" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn>
          <SectionLabel>Diensten</SectionLabel>
          <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            Alles wat weg moet
          </h2>
        </FadeIn>

        <ul className="mt-10 border-t border-line">
          {services.map((service) => (
            <li key={service.href} className="border-b border-line">
              <Link
                to={service.href}
                className="group grid gap-5 py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:grid-cols-[11rem_1fr] sm:items-center sm:gap-8 sm:py-7 lg:grid-cols-[14rem_1fr_auto]"
              >
                <ResponsiveImage
                  name={werkName(service.shot.id)}
                  alt=""
                  widths={[...WERK_WIDTHS]}
                  sizes="(max-width: 640px) 100vw, 220px"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  pictureClassName="block overflow-hidden"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-lg leading-relaxed text-muted">{service.description}</p>
                </div>
                <span className="font-display text-base font-semibold text-accent group-hover:text-accent-hover">
                  Meer info
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-3xl border-l-2 border-accent pl-4 text-ink">
          <strong className="font-semibold">Opgelet —</strong> wij verwerken geen gevaarlijk afval
          (asbest, vloeistoffen, gas, ...)
        </p>
      </div>
    </section>
  )
}
