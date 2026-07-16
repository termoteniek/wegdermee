import { FadeIn } from './FadeIn'
import { SectionLabel } from './ui/SectionLabel'

const reviews = [
  {
    quote:
      'Topservice! We konden heel snel en vlot een afspraak maken. Vriendelijke medewerkers, snelle en nette opruiming. Alles werd mooi schoon achtergelaten. Zeker een aanrader!',
    name: 'Jozefien',
    location: 'Destelbergen',
  },
  {
    quote:
      'Super vriendelijke jongeheer, heel snelle service en een top resultaat!!',
    name: 'Remi',
    location: 'Destelbergen',
  },
  {
    quote:
      'Top service! We hadden een kamer vol afval, deze is weer als nieuw — geen plekje te bekennen. We zijn heel blij dat deze last niet meer door ons hoeft uitgevoerd te worden. 5 sterren!',
    name: 'Rayaen',
    location: 'Sint-Amandsberg',
  },
  {
    quote:
      'Topservice, goede afspraak en vlotte communicatie. Zeker een ondernemer die 100 procent betrouwbaar is. Succes Siebe en nogmaals bedankt!',
    name: 'Carine',
    location: 'Eeklo',
  },
  {
    quote:
      'Bedankt voor de snelle service, alles netjes opgehaald volgens afspraak, top service en topteam. Veel succes nog met het uitbouwen van je nieuwe firma.',
    name: 'Frank',
    location: 'Sint-Niklaas',
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

        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {reviews.map((review, i) => {
            const isLastOdd = i === reviews.length - 1 && reviews.length % 2 === 1
            return (
              <FadeIn
                key={`${review.name}-${review.location}`}
                delay={i * 0.06}
                className={isLastOdd ? 'md:col-span-2' : undefined}
              >
                <li className="flex h-full flex-col border-2 border-white/15 bg-ink-soft p-6 sm:p-8">
                  <p className="flex-1 text-base leading-relaxed text-white/70 sm:text-lg">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <p className="mt-6 font-display text-sm font-bold uppercase tracking-widest text-accent">
                    {review.name} — {review.location}
                  </p>
                </li>
              </FadeIn>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
