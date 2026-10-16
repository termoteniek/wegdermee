import { motion, useReducedMotion } from 'framer-motion'
import { heroShots, werkName } from '../data/werkImages'
import { ImageFade } from './ImageFade'
import { WERK_WIDTHS } from './ResponsiveImage'
import { Button } from './ui/Button'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative min-h-svh overflow-hidden bg-ink text-white">
      <ImageFade
        images={heroShots.map((shot) => ({ name: werkName(shot.id), alt: shot.alt }))}
        intervalMs={5500}
        widths={[...WERK_WIDTHS]}
        sizes="100vw"
        showDots={false}
        className="absolute inset-0 h-full w-full"
        imgClassName="h-full w-full object-cover object-center"
        overlayClassName="bg-gradient-to-t from-ink/90 via-ink/50 to-ink/25 md:bg-gradient-to-r md:from-ink/88 md:via-ink/45 md:to-ink/10"
      />

      <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-7xl flex-col justify-end px-5 pb-14 pt-28 sm:px-8 sm:pb-16">
        <motion.div
          className="max-w-3xl"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-display text-[clamp(3.25rem,8vw,6.5rem)] font-bold leading-[0.9] tracking-tight text-white">
            weg<span className="text-accent">dermee</span>
          </p>
          <h1 className="mt-4 max-w-xl font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-tight tracking-tight">
            Uw rommel? Weg ermee!
          </h1>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-white/90">
            Meubels, elektronica of volledige ontruimingen — wij halen alles op. U hoeft niet te sorteren.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Boek ophaling</Button>
            <Button href="#diensten" variant="outline" className="!border-white/70 !text-white hover:!bg-white hover:!text-ink">
              Diensten
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
