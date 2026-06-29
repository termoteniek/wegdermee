import { FadeIn } from './FadeIn'
import { SectionLabel } from './ui/SectionLabel'

export function ServiceBeforeAfter() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn>
          <SectionLabel>Voor & na</SectionLabel>
          <h2 className="mt-3 max-w-xl font-display text-4xl font-extrabold uppercase leading-none tracking-tight text-ink sm:text-5xl">
            Het verschil spreekt voor zich
          </h2>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-12">
          <blockquote className="px-8 py-20 text-center sm:px-12 sm:py-28">
            <p className="font-display text-4xl font-extrabold uppercase leading-none tracking-widest text-muted/20 sm:text-6xl lg:text-7xl">
              Binnenkort beschikbaar
            </p>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  )
}
