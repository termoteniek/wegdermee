import { Link } from 'react-router-dom'
import { ResponsiveImage, WERK_WIDTHS } from './ResponsiveImage'

type ServiceHeroProps = {
  title: string
  intro: string
  image: string
  imageAlt: string
}

export function ServiceHero({ title, intro, image, imageAlt }: ServiceHeroProps) {
  return (
    <section className="relative min-h-[70svh] overflow-hidden bg-ink text-white">
      <ResponsiveImage
        name={image}
        alt={imageAlt}
        widths={[...WERK_WIDTHS]}
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover"
        pictureClassName="absolute inset-0 block h-full w-full"
        loading="eager"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/55 to-ink/25"
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex min-h-[70svh] w-full max-w-7xl flex-col justify-end px-5 pb-14 pt-32 sm:px-8 sm:pb-16">
        <Link
          to="/#diensten"
          className="text-sm font-medium text-white/80 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          Alle diensten
        </Link>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/85">{intro}</p>
      </div>
    </section>
  )
}
