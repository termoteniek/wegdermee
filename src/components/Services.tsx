import { motion } from 'framer-motion'
import { FadeIn } from './FadeIn'
import { SectionLabel } from './ui/SectionLabel'

const services = [
  {
    num: '01',
    title: 'Rommelophaaldienst',
    description:
      'Oude meubels, defecte elektronica, groenafval — wij hebben alles al gezien en nemen het mee.',
  },
  {
    num: '02',
    title: 'Volledige ontruiming',
    description:
      'Woning, appartement of bedrijfspand: een zorgeloze, complete leeghaling van A tot Z.',
  },
  {
    num: '03',
    title: 'Werf opruiming',
    description:
      'Verbouwing? Alles verdwijnt zodat jij verder kunt bouwen aan iets nieuws.',
  },
  {
    num: '04',
    title: 'Kleine verhuizingen',
    description:
      'Een paar meubels of dozen van A naar B, snel en correct geregeld.'
  },
]

export function Services() {
  return (
    <section id="diensten" className="relative -mt-px py-24 pt-28 sm:py-32 sm:pt-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 border-b-2 border-ink pb-10 lg:flex-row lg:items-end lg:justify-between">
          <FadeIn>
            <SectionLabel>Diensten</SectionLabel>
            <h2 className="mt-3 max-w-xl font-display text-5xl font-extrabold uppercase leading-none tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Alles wat weg moet
            </h2>
          </FadeIn>
          {/* <FadeIn delay={0.1} className="max-w-sm">
            <p className="text-lg text-muted">
              Van kleine ophaling tot volledige ontruiming — één team, één aanspreekpunt.
            </p>
          </FadeIn> */}
        </div>

        <ul className="mt-0 divide-y-2 divide-ink">
          {services.map((service, i) => (
            <FadeIn key={service.num} delay={i * 0.06}>
              <motion.li
                className="group grid gap-6 py-10 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-10 sm:py-14"
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              >
                <span className="font-display text-6xl font-extrabold leading-none text-cream-dark transition-colors group-hover:text-accent sm:text-7xl">
                  {service.num}
                </span>
                <div>
                  <h3 className="font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-lg text-muted">{service.description}</p>
                </div>
                <a
                  href="/contact"
                  className="font-display text-base font-bold uppercase tracking-widest text-accent underline-offset-4 transition-colors hover:text-accent-hover hover:underline sm:text-right"
                >
                  MEER INFO →
                </a>
              </motion.li>
            </FadeIn>
          ))}
        </ul>

        <FadeIn className="mt-12">
          <p className="border-l-4 border-accent bg-cream-dark px-6 py-5 text-ink">
            <strong className="font-display uppercase tracking-wide">Opgelet —</strong>{' '}
            wij verwerken geen gevaarlijk afval (asbest, vloeistoffen, gas).
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
