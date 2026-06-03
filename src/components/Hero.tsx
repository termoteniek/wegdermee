import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Button } from './ui/Button'
import { Marquee } from './ui/Marquee'
import { Sticker } from './ui/Sticker'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const watermarkX = useTransform(scrollYProgress, [0, 1], ['0%', '-8%'])
  const imageRotate = useTransform(scrollYProgress, [0, 1], [2, -2])

  return (
    <section
      ref={ref}
      className="relative min-h-svh overflow-hidden bg-ink text-paper"
    >
      <motion.p
        className="pointer-events-none absolute -left-[0.08em] top-[18%] select-none font-display text-[clamp(7rem,28vw,22rem)] font-black leading-[0.82] tracking-tighter text-outline opacity-90"
        style={{ x: watermarkX }}
        aria-hidden
      >
        WEG
      </motion.p>

      <div className="pattern-dots pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden />

      <div className="relative z-10 flex min-h-svh flex-col justify-between pt-20 pb-0">
        <div className="mx-auto grid w-full max-w-[1400px] flex-1 items-end gap-8 px-5 pb-12 sm:px-8 lg:grid-cols-12 lg:gap-0 lg:pb-16">
          <motion.div
            className="lg:col-span-7 lg:pb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.35em] text-punch">
              Inboedels & rommelophaal — België
            </p>

            <h1 className="mt-5 font-display text-[clamp(2.75rem,9vw,5.5rem)] font-extrabold leading-[0.95] tracking-tight">
              <span className="block">Jouw rommel?</span>
              <span className="mt-1 block italic text-punch">Weg ermee.</span>
            </h1>

            <p className="mt-7 max-w-md text-base leading-relaxed text-paper/70 sm:text-lg">
              Meubels, elektronica, volledige ontruimingen — wij halen alles op. Jij
              sorteert niet. Wij regelen de rest.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="#contact" variant="punch">
                Boek ophaling
              </Button>
              <Button href="#diensten" variant="ghost">
                Diensten
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative lg:col-span-5 lg:col-start-8 lg:self-center"
            style={{ rotate: imageRotate }}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative ml-auto max-w-md lg:max-w-none">
              <div className="box-brutal relative overflow-hidden bg-paper">
                <img
                  src="/camionette.png"
                  alt="wegdermee bestelwagen"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>

              <div className="absolute -left-4 top-8 sm:-left-8">
                <Sticker rotate={-8} variant="punch">
                  Vandaag mogelijk
                </Sticker>
              </div>

              <div className="absolute -bottom-6 -right-2 flex items-center gap-3 border-[3px] border-ink bg-paper px-4 py-3 shadow-[var(--shadow-brutal)] sm:-right-6">
                <img src="/logo.png" alt="" className="h-11 w-auto" aria-hidden />
                <div>
                  <p className="font-display text-base font-bold text-ink">wegdermee</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                    Ophaling & ontruiming
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t-[3px] border-punch bg-ink">
          <Marquee
            items={[
              'Limburg',
              'Antwerpen',
              'Vlaams-Brabant',
              'Brussel',
              'Snel ter plaatse',
              'Geen sorteren',
              'Volledig ontzorgd',
            ]}
            className="py-4 text-paper"
          />
        </div>
      </div>
    </section>
  )
}
