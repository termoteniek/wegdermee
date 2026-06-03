import { motion } from 'framer-motion'
import { FadeIn } from './FadeIn'
import { SectionLabel } from './ui/SectionLabel'
import { StripeBand } from './ui/StripeBand'

const services = [
  {
    num: '01',
    title: 'Rommelophaaldienst',
    description:
      'Oude meubels, defecte elektronica, groenafval — wij hebben alles al gezien en nemen het mee.',
    cta: 'Boek ophaling',
  },
  {
    num: '02',
    title: 'Volledige ontruiming',
    description:
      'Woning, appartement of bedrijfspand: een zorgeloze, complete leeghaling van A tot Z.',
    cta: 'Gratis offerte',
  },
  {
    num: '03',
    title: 'Werf opruiming',
    description:
      'Verbouwing? Alles verdwijnt zodat jij verder kunt bouwen aan iets nieuws.',
    cta: 'Contact',
  },
  {
    num: '04',
    title: 'Zakelijk',
    description:
      'Kantoorverhuizing, stockafval of grotere B2B-operaties — wij schalen mee.',
    cta: 'Offerte',
  },
]

export function Services() {
  return (
    <section id="diensten" className="relative bg-paper">
      <StripeBand />

      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        <FadeIn className="flex flex-col gap-6 border-b-[3px] border-ink pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel index="01">Diensten</SectionLabel>
            <h2 className="mt-4 font-display text-5xl font-extrabold leading-none tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Alles wat
              <br />
              <span className="italic text-heat">weg moet</span>
            </h2>
          </div>
          <p className="max-w-sm font-mono text-sm leading-relaxed text-muted lg:text-right">
            Van kleine ophaling tot volledige ontruiming — één team, één aanspreekpunt.
          </p>
        </FadeIn>

        <ul className="mt-0">
          {services.map((service, i) => (
            <FadeIn key={service.num} delay={i * 0.05}>
              <motion.li
                className={`group grid border-b-[3px] border-ink py-12 sm:grid-cols-[minmax(5rem,8rem)_1fr_auto] sm:items-center sm:gap-10 sm:py-16 ${
                  i === 0 ? 'border-t-[3px]' : ''
                }`}
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              >
                <span className="font-display text-[clamp(4rem,12vw,7rem)] font-black leading-none text-paper-dark transition-colors group-hover:text-punch">
                  {service.num}
                </span>
                <div>
                  <h3 className="font-display text-3xl font-bold text-ink sm:text-4xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-2xl font-mono text-sm leading-relaxed text-muted sm:text-base">
                    {service.description}
                  </p>
                </div>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 border-[3px] border-ink bg-punch px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-ink shadow-[4px_4px_0_0_#11100e] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#11100e] sm:mt-0"
                >
                  {service.cta}
                  <span aria-hidden>→</span>
                </a>
              </motion.li>
            </FadeIn>
          ))}
        </ul>

        <FadeIn className="mt-12">
          <p className="flex gap-4 border-[3px] border-ink bg-ink px-6 py-5 font-mono text-sm text-paper sm:items-center">
            <span className="shrink-0 bg-heat px-3 py-1 font-bold uppercase text-paper">
              Opgelet
            </span>
            <span>
              wij verwerken geen gevaarlijk afval (asbest, vloeistoffen, gas).
            </span>
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
