import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Button } from './ui/Button'
import { Swoosh } from './ui/Swoosh'

const headlineWords = ['Uw', 'rommel?', 'Weg', 'ermee!']

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '6%'])

  return (
    <section
      ref={ref}
      className="relative min-h-svh overflow-hidden bg-ink text-cream lg:h-svh lg:min-h-0"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <div className="relative z-10 flex min-h-svh w-full items-center px-5 py-24 sm:px-8 lg:h-full lg:min-h-0 lg:py-0 lg:pt-24 lg:pb-12">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div className="lg:col-span-6" style={{ y: textY }}>
            <motion.p
              className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-accent"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              Inboedel & rommelophaal
            </motion.p>

            <h1 className="mt-4 font-display text-[clamp(2.75rem,10vw,6.5rem)] font-extrabold uppercase leading-[0.9] tracking-tight">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={word}
                  className={`mr-[0.15em] inline-block ${
                    i >= 2 ? 'text-accent italic' : ''
                  }`}
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
              className="mt-6 max-w-md text-lg leading-relaxed text-white/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Meubels, elektronica of volledige ontruimingen — wij halen alles op. U hoeft niet te sorteren.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap gap-4"
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
          </motion.div>

          <motion.div
            className="relative md:mx-auto md:max-w-xl lg:col-span-6 lg:col-start-7 lg:mx-0 lg:max-w-none"
            style={{ y: imageY }}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 blur-3xl" aria-hidden />
              <div className="relative overflow-hidden border-2 border-white/10">
                <img
                  src="/ImageWithLargeLogo.png"
                  alt="Team van wegdermee aan het werk met de aanhangwagen"
                  className="aspect-[3/4] w-full object-cover object-center md:max-h-[min(50vh,500px)] lg:aspect-[4/5] lg:max-h-[min(52vh,520px)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent lg:bg-gradient-to-l lg:from-ink/60 lg:via-transparent lg:to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave sits below the viewport so the hero stays full-screen dark */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 translate-y-full text-cream">
        <Swoosh />
      </div>
    </section>
  )
}
