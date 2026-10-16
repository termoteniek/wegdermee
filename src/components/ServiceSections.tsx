import { FadeIn } from './FadeIn'
import { Button } from './ui/Button'
import { SectionLabel } from './ui/SectionLabel'

export function ServiceIntro({
  description,
  included,
}: {
  description: string[]
  included: string[]
}) {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <SectionLabel>Wat wij doen</SectionLabel>
            <div className="mt-4 max-w-xl space-y-4 text-lg leading-relaxed text-muted">
              {description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>

          <FadeIn>
            <SectionLabel>Inbegrepen</SectionLabel>
            <ul className="mt-4 space-y-3">
              {included.map((item) => (
                <li key={item} className="border-l-2 border-accent pl-4 text-lg text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export function ServiceClose({ title }: { title: string }) {
  return (
    <section className="bg-ink py-20 text-cream sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="max-w-2xl">
          <SectionLabel light>Klaar om te starten?</SectionLabel>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/75">
            Vraag een vrijblijvende offerte aan of plan direct een afspraak. Wij nemen snel contact
            op.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Offerte aanvragen</Button>
            <Button href="tel:+32498438878" variant="ghost">
              Bel +32 498 43 88 78
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
