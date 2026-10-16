import { Link } from 'react-router-dom'
import { FadeIn } from './FadeIn'
import { PhotoSlot } from './ui/PhotoSlot'
import { WORK_WIDTHS } from './ResponsiveImage'

type ServiceHeroProps = {
  num: string
  title: string
  intro: string
  image?: string
  imageAlt?: string
  widths?: number[]
}

export function ServiceHero({
  num,
  title,
  intro,
  image,
  imageAlt = 'Foto volgt',
  widths = [...WORK_WIDTHS],
}: ServiceHeroProps) {
  return (
    <div className="bg-ink">
      <section className="grid text-cream lg:grid-cols-2 lg:items-center">
        <div className="flex items-center justify-center px-5 pt-28 pb-12 sm:px-8 sm:pt-36 sm:pb-16 lg:min-h-[70vh] lg:px-12">
          <FadeIn className="mx-auto w-full max-w-xl text-left">
            <Link
              to="/#diensten"
              className="font-display text-sm font-semibold uppercase tracking-widest text-white/50 transition-colors hover:text-accent"
            >
              ← Alle diensten
            </Link>
            <p className="mt-8 font-display text-6xl font-extrabold leading-none text-accent sm:text-7xl">
              {num}
            </p>
            <h1 className="mt-4 max-w-full break-words font-display text-4xl font-extrabold uppercase leading-none tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-lg text-white/60">{intro}</p>
          </FadeIn>
        </div>
        <div className="relative min-h-[320px] sm:min-h-[440px] lg:min-h-[78vh]">
          <PhotoSlot
            name={image}
            alt={imageAlt}
            widths={widths}
            sizes="(max-width: 1024px) 100vw, 50vw"
            fill
            loading="eager"
            fetchPriority="high"
            className="object-[center_30%]"
          />
        </div>
      </section>
    </div>
  )
}
