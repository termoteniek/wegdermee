import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Button } from './ui/Button'
import { ImageFade, type FadeSlide } from './ImageFade'
import { Swoosh } from './ui/Swoosh'
import { WORK_WIDTHS } from './ResponsiveImage'

const headlineWords = ['Uw', 'rommel?', 'Weg', 'ermee!']

const heroSlides: FadeSlide[] = [
  {
    name: 'Werk/040',
    alt: 'Het team bij de wegdermee-bestelwagen',
  },
  {
    name: 'Werk/030',
    alt: 'Medewerker tilt een mand in de geladen bestelwagen',
  },
  {
    name: 'Werk/001',
    alt: 'Twee medewerkers laden huisraad in de aanhangwagen',
  },
]

export function Hero() {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setSlide((current) => (current + 1) % heroSlides.length)
    }, 4500)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section className="relative isolate min-h-svh bg-ink text-cream">
      <ImageFade
        images={heroSlides}
        index={slide}
        widths={[...WORK_WIDTHS]}
        sizes="100vw"
        showDots={false}
        className="absolute inset-0 h-full w-full"
        imgClassName="h-full w-full object-cover object-[center_40%]"
      />

      <div className="hero-title-blur" aria-hidden>
        <div className="hero-title-blur__layer hero-title-blur__layer--soft" />
        <div className="hero-title-blur__layer hero-title-blur__layer--mid" />
        <div className="hero-title-blur__layer hero-title-blur__layer--strong" />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-28 bg-gradient-to-b from-ink/80 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-svh items-center px-6 sm:px-10 lg:pl-[16vw] lg:pr-10">
        <div className="w-full max-w-xl">
          <motion.p
            className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-accent"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            Inboedel & rommelophaal
          </motion.p>

          <h1 className="mt-4 max-w-xl font-display text-[clamp(2.75rem,10vw,6.5rem)] font-extrabold uppercase leading-[0.9] tracking-tight">
            {headlineWords.map((word, i) => (
              <motion.span
                key={word}
                className={`mr-[0.15em] inline-block ${i >= 2 ? 'text-accent italic' : ''}`}
                initial={{ opacity: 0, y: 60, rotate: i >= 2 ? -2 : 0 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{
                  delay: 0.25 + i * 0.1,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="mt-6 max-w-md text-lg leading-relaxed text-white/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Meubels, elektronica of volledige ontruimingen — wij halen alles op. U hoeft niet te sorteren.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
          >
            <Button href="/contact">Boek ophaling</Button>
            <Button
              href="#diensten"
              variant="outline"
              className="!border-white/40 !text-white hover:!bg-white hover:!text-ink"
            >
              Diensten
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 translate-y-full text-cream">
        <Swoosh />
      </div>
    </section>
  )
}
