import { motion } from 'framer-motion'
import { FadeIn } from './FadeIn'
import { SectionLabel } from './ui/SectionLabel'
import { Sticker } from './ui/Sticker'
import { Swoosh } from './ui/Swoosh'

const reasons = [
  {
    title: 'Licenties & verzekering',
    description: 'Alles in orde — jij hoeft niet te stressen.',
    emoji: '✓',
  },
  {
    title: 'Iedereen welkom',
    description: 'Particulier, VME of bedrijf — geen snobisme.',
    emoji: '★',
  },
  {
    title: 'Geen sorteren',
    description: 'Alles door elkaar gooien mag. Serieus.',
    emoji: '🔥',
  },
  {
    title: 'Snel ter plaatse',
    description: 'Geen "we bellen u terug over 2 weken".',
    emoji: '⚡',
  },
  {
    title: 'Volledig ontzorgd',
    description: 'Ophaling tot afvoer — jij doet niks meer.',
    emoji: '💪',
  },
]

export function WhyUs() {
  return (
    <section id="waarom" className="relative bg-ink text-paper">
      <div className="text-paper">
        <Swoosh flip />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <FadeIn direction="left">
            <SectionLabel variant="lime">Waarom wij</SectionLabel>
            <h2 className="mt-5 font-display text-5xl uppercase leading-[0.9] sm:text-6xl lg:text-7xl">
              Geen saaie
              <br />
              <span className="text-lime">corporate gezeik.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg font-medium text-white/70">
              Jong team dat wel serieus werk levert. Snel, eerlijk, en met een bakwagen
              die je niet mist.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Sticker variant="orange" rotate={-6}>
                No BS
              </Sticker>
              <Sticker variant="pink" rotate={5}>
                100% ontzorgd
              </Sticker>
            </div>
          </FadeIn>

          <ul className="grid gap-4">
            {reasons.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.05}>
                <motion.li
                  className="group flex gap-5 border-[3px] border-white/20 bg-white/5 p-6 transition-colors hover:border-lime hover:bg-lime/10"
                  whileHover={{ x: 8 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border-[3px] border-lime bg-lime font-display text-xl text-ink">
                    {item.emoji}
                  </span>
                  <div>
                    <h3 className="font-display text-xl uppercase sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-medium text-white/60">{item.description}</p>
                  </div>
                </motion.li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-paper">
        <Swoosh />
      </div>
    </section>
  )
}
