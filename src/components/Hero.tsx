import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Button } from './ui/Button'
import { Sticker } from './ui/Sticker'
import { Swoosh } from './ui/Swoosh'

const headlineWords = ['Jouw', 'rommel?', 'Weg', 'ermee.']

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const imageRotate = useTransform(scrollYProgress, [0, 1], [2, -2])

  return (
    <section
      ref={ref}
      className="relative min-h-svh overflow-hidden bg-ink text-paper lg:h-svh lg:min-h-0"
    >
      <div className="pointer-events-none absolute inset-0 bg-halftone opacity-[0.08]" aria-hidden />
      <div
        className="pointer-events-none absolute -right-20 top-1/4 h-64 w-64 rounded-full bg-lime/30 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-10 bottom-1/3 h-48 w-48 rounded-full bg-hot/25 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-svh w-full items-center px-5 py-28 sm:px-8 lg:h-full lg:min-h-0 lg:py-0 lg:pt-28 lg:pb-16">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div className="lg:col-span-6">
            <div className="flex flex-wrap items-center gap-3">
              <Sticker variant="lime" rotate={-5}>
                Startup crew
              </Sticker>
              <Sticker variant="cyan" rotate={4}>
                Geen gedoe
              </Sticker>
            </div>

            <h1 className="mt-6 font-display text-[clamp(2.5rem,11vw,6.75rem)] uppercase leading-[0.88] tracking-tight">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={word}
                  className={`mr-[0.12em] inline-block ${
                    i >= 2 ? 'text-lime' : i === 1 ? 'text-accent' : ''
                  }`}
                  initial={{ opacity: 0, y: 80, rotate: i % 2 === 0 ? -8 : 8 }}
                  animate={{ opacity: 1, y: 0, rotate: i >= 2 ? -2 : 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 14,
                    delay: 0.1 + i * 0.08,
                  }}
                  whileHover={{ scale: 1.05, rotate: i >= 2 ? 2 : -2 }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              className="mt-6 max-w-md text-lg font-medium leading-relaxed text-white/80"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.55 }}
            >
              Jong team, grote bakwagens. Meubels, elektronica, volledige ontruimingen —
              jij gooit alles bij elkaar, wij rijden weg. Zo simpel.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, type: 'spring' }}
            >
              <Button href="#contact">Boek ophaling</Button>
              <Button href="#diensten" variant="ghost">
                Wat halen we op?
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative lg:col-span-6"
            style={{ y: imageY, rotate: imageRotate }}
            initial={{ opacity: 0, scale: 0.85, rotate: 6 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -inset-3 bg-lime blur-2xl opacity-40" aria-hidden />
              <div className="relative overflow-hidden border-[4px] border-lime bg-ink shadow-[12px_12px_0_0_#ccff00]">
                <img
                  src="/camionette.png"
                  alt="wegdermee bestelwagen"
                  className="aspect-[4/3] w-full object-cover object-center lg:aspect-[16/11] lg:max-h-[min(54vh,540px)]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-ink/70 via-transparent to-hot/20" />
              </div>

              <motion.div
                className="absolute -bottom-5 -left-3 sticker sm:-left-6"
                animate={{ rotate: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              >
                <img src="/logo.png" alt="" className="h-14 w-auto sm:h-16" aria-hidden />
              </motion.div>

              <Sticker
                variant="pink"
                rotate={8}
                className="absolute -right-2 -top-3 sm:-right-4 sm:-top-5 !text-base sm:!text-lg"
              >
                Snel!
              </Sticker>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 translate-y-full text-paper">
        <Swoosh />
      </div>
    </section>
  )
}
