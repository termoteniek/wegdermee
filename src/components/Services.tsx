import { motion } from 'framer-motion'
import { FadeIn } from './FadeIn'
import { SectionLabel } from './ui/SectionLabel'

const services = [
  {
    num: '01',
    title: 'Rommelophaal',
    description:
      "Oude meubels, kapotte tv's, groenafval — dump alles bij elkaar, wij laden in.",
    cta: 'Boek nu',
    color: 'bg-lime',
  },
  {
    num: '02',
    title: 'Volledige ontruiming',
    description:
      'Woning leeg? Pand leeg? Wij maken er een blanco canvas van.',
    cta: 'Gratis offerte',
    color: 'bg-accent text-white',
  },
  {
    num: '03',
    title: 'Werf opruiming',
    description:
      'Na de verbouwing? Puin en rommel verdwijnt — jij bouwt verder.',
    cta: 'Stuur bericht',
    color: 'bg-cyan',
  },
  {
    num: '04',
    title: 'Zakelijk',
    description:
      'Kantoor, stock, grotere klus — wij schalen mee. Geen corporate traagheid.',
    cta: 'Offerte',
    color: 'bg-hot text-white',
  },
]

export function Services() {
  return (
    <section id="diensten" className="relative -mt-px bg-paper py-20 pt-28 sm:py-28 sm:pt-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn>
          <SectionLabel variant="orange">Diensten</SectionLabel>
          <h2 className="mt-5 max-w-3xl font-display text-5xl uppercase leading-[0.9] text-ink sm:text-6xl lg:text-7xl">
            Alles wat weg moet{' '}
            <span className="text-accent">— punt.</span>
          </h2>
          <p className="mt-5 max-w-lg text-lg font-medium text-muted">
            Klein of groot, particulier of zaak. Eén crew, één vibe.
          </p>
        </FadeIn>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <FadeIn key={service.num} delay={i * 0.06}>
              <motion.li
                className={`group relative border-[3px] border-ink p-8 shadow-[8px_8px_0_0_#0a0a0a] transition-shadow hover:shadow-[4px_4px_0_0_#0a0a0a] ${service.color}`}
                whileHover={{ y: -4, rotate: i % 2 === 0 ? 1 : -1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <span className="font-display text-5xl text-ink/25">{service.num}</span>
                <h3 className="mt-2 font-display text-2xl uppercase text-ink sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-3 font-medium leading-relaxed text-ink/80">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-block font-display text-sm uppercase text-ink underline decoration-[3px] underline-offset-4 transition-colors hover:text-accent"
                >
                  {service.cta} →
                </a>
              </motion.li>
            </FadeIn>
          ))}
        </ul>

        <FadeIn className="mt-12">
          <p className="border-[3px] border-ink bg-paper-dark px-6 py-5 font-medium shadow-[5px_5px_0_0_#ff5500]">
            <strong className="font-display uppercase text-accent">Heads up —</strong>{' '}
            geen gevaarlijk spul (asbest, vloeistoffen, gas). Da&apos;s voor de grote jongens.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
