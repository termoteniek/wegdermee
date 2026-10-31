import { Link } from 'react-router-dom'
import { FadeIn } from './FadeIn'
import { ResponsiveImage } from './ResponsiveImage'
import { SectionLabel } from './ui/SectionLabel'

const SERVICE_WIDTHS = [640, 1080]

type Service = {
  num: string
  title: string
  description: string
  href: string
  image: string
  alt: string
  imgClassName?: string
}

const services: Service[] = [
  {
    num: '01',
    title: 'Rommelophaaldienst',
    description:
      'Te veel spullen, te weinig plaats? Wij halen uw rommel op — groot of klein, u sorteert niet, wij regelen alles.',
    href: '/diensten/rommelophaaldienst',
    image: 'Werk/046',
    alt: 'Medewerker draagt een plaat en een zak rommel naar buiten',
    imgClassName: 'object-[center_35%]',
  },
  {
    num: '02',
    title: 'Volledige ontruiming',
    description:
      'Moet een pand volledig leeg? Wij halen alles weg — van zolder tot kelder — zodat u verder kunt zonder zorgen.',
    href: '/diensten/volledige-ontruiming',
    image: 'Werk/079',
    alt: 'Twee medewerkers laden een kast in een volle bestelwagen',
    imgClassName: 'object-center',
  },
  {
    num: '03',
    title: 'Werf opruiming',
    description:
      'Verbouwing of renovatie? Wij ruimen uw werf op zodat u verder kunt bouwen aan iets nieuws.',
    href: '/diensten/werf-opruiming',
    image: 'Werk/065',
    alt: 'Medewerker rijdt een steekwagen met platen uit een garage',
    imgClassName: 'object-[58%_center]',
  },
  {
    num: '04',
    title: 'Kleine verhuizingen',
    description:
      'Een paar meubels of dozen van A naar B — geen volledige verhuis, wel snel en correct geregeld.',
    href: '/diensten/kleine-verhuizingen',
    image: 'Werk/052',
    alt: 'Medewerker draagt een doos met spullen naar buiten',
    imgClassName: 'object-center',
  },
  {
    num: '05',
    title: 'Transport',
    description:
      'Grote aankoop bij IKEA, Brico of een andere winkel? Wij halen het op en brengen het veilig naar u toe.',
    href: '/diensten/transport',
    image: 'Werk/086',
    alt: 'De bestelwagen van wegdermee met een medewerker bij de cabine',
    imgClassName: 'object-center',
  },
]

export function Services() {
  return (
    <section id="diensten" className="relative -mt-px py-24 pt-28 sm:py-32 sm:pt-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="border-b-2 border-ink pb-10">
          <FadeIn>
            <SectionLabel>Diensten</SectionLabel>
            <h2 className="mt-3 max-w-xl font-display text-5xl font-extrabold uppercase leading-none tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Alles wat weg moet
            </h2>
          </FadeIn>
        </div>

        <div className="divide-y-2 divide-ink">
          {services.map((service, i) => {
            return (
              <FadeIn key={service.num} delay={i * 0.05}>
                <Link
                  to={service.href}
                  className="group flex w-full flex-col gap-4 py-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:flex-row sm:items-center sm:gap-8 sm:py-10 lg:gap-12 lg:py-12"
                >
                  <div className="relative aspect-[4/3] w-40 shrink-0 overflow-hidden sm:w-44 lg:w-52">
                    <ResponsiveImage
                      name={service.image}
                      alt={service.alt}
                      widths={SERVICE_WIDTHS}
                      sizes="(max-width: 640px) 160px, (max-width: 1024px) 176px, 208px"
                      className={`h-full w-full object-cover ${service.imgClassName ?? 'object-center'}`}
                      pictureClassName="absolute inset-0 block h-full w-full"
                    />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col justify-center">
                    <p className="font-display text-3xl font-extrabold leading-none text-accent sm:text-4xl">
                      {service.num}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold uppercase leading-none tracking-tight text-ink sm:text-3xl lg:text-4xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                      {service.description}
                    </p>
                    <span className="mt-4 font-display text-sm font-bold uppercase tracking-widest text-accent underline decoration-accent underline-offset-4 transition-colors group-hover:text-accent-hover">
                      Meer info →
                    </span>
                  </div>
                </Link>
              </FadeIn>
            )
          })}
        </div>

        <FadeIn className="mt-12">
          <p className="border-l-4 border-accent bg-cream-dark px-6 py-5 text-ink">
            <strong className="font-display uppercase tracking-wide">Opgelet —</strong>{' '}
            wij verwerken geen gevaarlijk afval (asbest, vloeistoffen, gas, ...)
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
