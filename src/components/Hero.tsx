import { motion } from 'framer-motion'
import { Button } from './ui/Button'
import { ImageFade, type FadeSlide } from './ImageFade'

const HERO_WIDTHS = [640, 1080, 1920]

const heroSlides: FadeSlide[] = [
  {
    name: 'Werk/026',
    alt: 'Twee medewerkers van wegdermee in werkkledij',
    imgClassName: 'h-full w-full object-cover object-[30%_42%]',
  },
  {
    name: 'Werk/040',
    alt: 'Medewerkers van wegdermee bij de bestelwagen',
    imgClassName: 'h-full w-full object-cover object-[66%_34%]',
  },
  {
    name: 'Werk/007',
    alt: 'Medewerker draagt een tegelplaat naast de bestelwagen',
    imgClassName: 'h-full w-full object-cover object-[72%_48%]',
  },
  {
    name: 'Werk/001',
    alt: 'Twee medewerkers laden een ontruiming in de bestelwagen',
    imgClassName: 'h-full w-full object-cover object-[48%_38%]',
  },
  {
    name: 'Werk/030',
    alt: 'Medewerker laadt huisraad in de bestelwagen',
    imgClassName: 'h-full w-full object-cover object-[34%_36%]',
  },
]

const ease = [0.16, 1, 0.3, 1] as const

export function Hero() {
  return (
    <section className="relative isolate min-h-svh overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 z-0" aria-hidden>
        <ImageFade
          images={heroSlides}
          intervalMs={5500}
          widths={HERO_WIDTHS}
          sizes="100vw"
          showDots={false}
          className="h-full w-full"
          pictureClassName="absolute inset-0 block h-full w-full"
          focusVeil
        />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-28 bg-gradient-to-b from-ink/75 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-7xl items-end px-5 pt-24 pb-8 sm:px-8 sm:pb-12 lg:items-center lg:pt-28 lg:pb-20">
        <div className="w-full min-w-0 max-w-xl lg:max-w-2xl">
          <motion.p
            className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-accent sm:text-sm"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.5, ease }}
          >
            Inboedel & rommelophaal
          </motion.p>

          <motion.h1
            className="mt-3 font-display text-[clamp(2.7rem,8vw,7.6rem)] font-extrabold uppercase leading-[0.84] tracking-tight sm:mt-4"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease }}
          >
            <span className="block">Uw rommel?</span>
            <span className="block text-accent italic">Weg der mee!</span>
          </motion.h1>

          <motion.p
            className="mt-4 max-w-md text-sm leading-relaxed text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.7)] sm:mt-6 sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.55, ease }}
          >
            Meubels, elektronica of volledige ontruimingen — wij halen alles op. U hoeft niet te
            sorteren.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap gap-3 sm:mt-10 sm:gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.55, ease }}
          >
            <Button
              href="/contact"
              className="!px-6 !py-3 !text-base !shadow-none hover:!translate-x-0 hover:!translate-y-0 hover:!shadow-none sm:!px-8 sm:!py-3.5 sm:!text-lg"
            >
              Boek ophaling
            </Button>
            <Button
              href="#diensten"
              variant="outline"
              className="!border-white/75 !px-6 !py-3 !text-base !text-white !shadow-none hover:!translate-x-0 hover:!translate-y-0 hover:!border-white hover:!bg-white hover:!text-ink hover:!shadow-none sm:!px-8 sm:!py-3.5 sm:!text-lg"
            >
              Diensten
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
