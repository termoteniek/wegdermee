import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ResponsiveImage } from './ResponsiveImage'

const HERO_WIDTHS = [640, 1080, 1920]
const ease = [0.16, 1, 0.3, 1] as const

type ServiceHeroProps = {
  title: string
  intro: string
  image: string
  imageAlt: string
  imageClassName?: string
}

export function ServiceHero({
  title,
  intro,
  image,
  imageAlt,
  imageClassName,
}: ServiceHeroProps) {
  return (
    <section className="relative isolate flex min-h-svh items-end overflow-hidden bg-ink text-white">
      <ResponsiveImage
        name={image}
        alt={imageAlt}
        widths={HERO_WIDTHS}
        sizes="100vw"
        className={`h-full w-full object-cover ${imageClassName ?? 'object-center'}`}
        pictureClassName="absolute inset-0 block h-full w-full"
        loading="eager"
        fetchPriority="high"
      />

      <div className="pointer-events-none absolute inset-0 bg-ink/30" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/15"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/65 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-32 pb-14 sm:px-8 sm:pb-20 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <Link
            to="/#diensten"
            className="text-sm text-white/90 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Alle diensten
          </Link>
          <h1 className="mt-4 max-w-4xl font-sans text-[clamp(1.7rem,9vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.03em]">
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white sm:text-lg">{intro}</p>
        </motion.div>
      </div>
    </section>
  )
}
