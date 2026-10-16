import { FadeIn } from './FadeIn'
import { PhotoSlot } from './ui/PhotoSlot'
import { SectionLabel } from './ui/SectionLabel'
import { VOOR_EN_NA_WIDTHS } from './ResponsiveImage'

const workPhotos = [
  {
    name: 'VoorEnNa/Na2',
    alt: 'Opgeruimde plek na een rommelophaling',
  },
  {
    name: 'VoorEnNa/Na3',
    alt: 'Lege ruimte na een opruiming',
  },
  {
    name: 'VoorEnNa/Na4',
    alt: 'Resultaat na het weghalen van de rommel',
  },
  {
    name: 'Ontruiming/Na2',
    alt: 'Tuinzijde na een volledige ontruiming',
  },
  {
    name: 'Werf/hout-mos',
    alt: 'Werf na het ophalen van hout en groenafval',
  },
]

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

        <ul className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-5 sm:gap-3">
          {workPhotos.map((photo) => (
            <li key={photo.name} className="relative aspect-[3/4] overflow-hidden">
              <PhotoSlot
                name={photo.name}
                alt={photo.alt}
                widths={[...VOOR_EN_NA_WIDTHS]}
                sizes="(max-width: 640px) 50vw, 20vw"
                fill
                className="object-[center_30%]"
              />
            </li>
          ))}
        </ul>

        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {reviews.map((review, i) => {
            const isLastOdd = i === reviews.length - 1 && reviews.length % 2 === 1
            return (
              <FadeIn
                key={`${review.name}-${review.location}`}
                delay={i * 0.06}
                className={isLastOdd ? 'md:col-span-2' : undefined}
              >
                <li className="flex h-full flex-col border border-white/15 bg-ink-soft p-6 sm:p-8">
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
