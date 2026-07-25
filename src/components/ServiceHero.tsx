import { Link } from 'react-router-dom'
import { FadeIn } from './FadeIn'

type ServiceHeroProps = {
  num: string
  title: string
  intro: string
}

export function ServiceHero({ num, title, intro }: ServiceHeroProps) {
  return (
    <div className="bg-ink">
      <section className="pt-28 pb-16 text-cream sm:pt-36 sm:pb-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <FadeIn>
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
            <p className="mt-6 max-w-2xl text-lg text-white/60">{intro}</p>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
