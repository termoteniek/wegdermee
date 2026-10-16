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
    quote: 'Super vriendelijke jongeheer, heel snelle service en een top resultaat!!',
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
    <section id="feedback" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="max-w-2xl">
          <SectionLabel>Klanten feedback</SectionLabel>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            Wat klanten zeggen
          </h2>
        </FadeIn>

        <ul className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2">
          {reviews.map((review) => (
            <li key={`${review.name}-${review.location}`} className="border-t border-line pt-6">
              <blockquote>
                <p className="text-lg leading-relaxed text-ink">&ldquo;{review.quote}&rdquo;</p>
                <footer className="mt-4 font-display text-base font-semibold text-ink">
                  {review.name}
                  <span className="font-sans font-normal text-muted">, {review.location}</span>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
