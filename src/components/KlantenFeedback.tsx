import { FadeIn } from './FadeIn'
import { SectionLabel } from './ui/SectionLabel'

const reviews = [
  {
    quote:
      'Snel geholpen en alles netjes meegenomen. Geen gedoe, precies zoals beloofd.',
    name: 'Sophie',
    location: 'Gent',
  },
  {
    quote:
      'Volledige ontruiming zonder verrassingen. Duidelijke prijs en stipt op tijd.',
    name: 'Marc',
    location: 'Deinze',
  },
  {
    quote:
      'Vriendelijke service en correcte afhandeling. Ik hoefde nergens aan te denken.',
    name: 'Lisa',
    location: 'Oudenaarde',
  },
]

export function KlantenFeedback() {
  return (
    <section id="feedback" className="bg-ink py-24 text-cream sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="text-center">
          <SectionLabel light>Klanten feedback</SectionLabel>
          <h2 className="mt-3 font-display text-5xl font-extrabold uppercase leading-none tracking-tight sm:text-6xl">
            Wat klanten zeggen
          </h2>
        </FadeIn>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <FadeIn key={review.name} delay={i * 0.06}>
              <li className="flex h-full flex-col border-2 border-white/15 bg-ink-soft p-6 sm:p-8">
                <p className="flex-1 text-base leading-relaxed text-white/70 sm:text-lg">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <p className="mt-6 font-display text-sm font-bold uppercase tracking-widest text-accent">
                  {review.name} — {review.location}
                </p>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  )
}
