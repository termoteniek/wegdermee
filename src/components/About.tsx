import { FadeIn } from './FadeIn'
import { ResponsiveImage, HERO_ABOUT_WIDTHS } from './ResponsiveImage'
import { SectionLabel } from './ui/SectionLabel'

const portraits = [
  {
    name: 'Siebe',
    image: 'OverOns/siebe',
    alt: 'Siebe, oprichter van wegdermee',
    reverse: false,
    paragraphs: [
      'Ik ben Siebe, oprichter van Wegdermee. Al van jongs af aan droom ik ervan om een eigen onderneming uit te bouwen. Met Wegdermee maak ik van die droom eindelijk werkelijkheid: een betrouwbare en betaalbare service waarmee ik mensen kan ontzorgen.',
      'Door mijn ervaring bij verschillende verhuisfirma’s leerde ik hoe belangrijk een vlotte, zorgvuldige en klantgerichte aanpak is. Die ervaring neem ik elke dag mee in mijn eigen onderneming.',
    ],
  },
  {
    name: 'Lars',
    image: 'OverOns/lars',
    alt: 'Lars Lazeure van wegdermee',
    reverse: true,
    paragraphs: [
      'Aangenaam, ik ben Lars Lazeure. Naast mijn studies ben ik een vaste waarde binnen Wegdermee, waar ik mijn kameraad Siebe en zijn bedrijf met veel plezier ondersteun.',
      'Het was al langer duidelijk dat ik en Siebe een goed team vormden, dus ook bij de eerste ideeën was ik nauw betrokken in het verhaal van Wegdermee. Ik heb het bedrijf van dichtbij zien groeien en mocht zelf ook mijn steentje bijdragen aan de uitbouw ervan. Zo kreeg ik niet alleen de kans om mee te helpen, maar ook om van dichtbij te proeven van het echte ondernemerschap.',
      'Stilzitten is niets voor mij. Ik steek graag de handen uit de mouwen, dus de kans is groot dat je mij ook tegenkomt tijdens het klussen zodat alles (letterlijk) op wieltjes loopt!',
    ],
  },
] as const

const togetherParagraphs = [
  'Bij Wegdermee kunt u terecht voor het ophalen van rommel en volledige inboedels of voor volledige ontruimingen van huizen, appartementen en kantoren, maar ook voor verhuizingen en transportdiensten. Heeft u een grote aankoop gedaan, maar geen geschikt vervoer? Ook dan help ik u graag verder. Geen opdracht is te klein: mijn doel is om elke klant snel, correct en met een glimlach verder te helpen.',
  'Voor ons staan betrouwbaarheid, duidelijke afspraken en een persoonlijke aanpak centraal. We behandelen uw spullen met zorg en zorgen ervoor dat u zich nergens zorgen over hoeft te maken.',
]

function Portrait({
  name,
  alt,
  frameTo,
}: {
  name: string
  alt: string
  frameTo: 'left' | 'right'
}) {
  return (
    <div className="relative">
      <div className="relative overflow-hidden border-2 border-ink">
        <ResponsiveImage
          name={name}
          alt={alt}
          widths={[...HERO_ABOUT_WIDTHS]}
          sizes="(max-width: 768px) 85vw, (max-width: 1024px) 320px, 38vw"
          className="aspect-[2/3] w-full object-cover"
          pictureClassName="block w-full"
          loading="lazy"
        />
      </div>
      <div
        className={`pointer-events-none absolute -top-3 h-full w-full border-2 border-accent ${
          frameTo === 'left' ? '-left-3' : '-right-3'
        }`}
        aria-hidden
      />
    </div>
  )
}

export function About() {
  return (
    <section id="over-ons" className="border-t-2 border-ink bg-cream-dark py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="max-w-3xl">
          <SectionLabel>Over ons</SectionLabel>
          <h2 className="mt-3 font-display text-5xl font-extrabold uppercase leading-none tracking-tight text-ink sm:text-6xl">
            Welkom bij Wegdermee
          </h2>
          <blockquote className="mt-8 border-l-4 border-accent pl-6">
            <p className="font-display text-2xl font-bold uppercase italic leading-snug text-ink sm:text-3xl">
              &ldquo;Jouw rommel? Wegdermee!&rdquo;
            </p>
          </blockquote>
        </FadeIn>

        <div className="mt-16 space-y-20 sm:mt-20 lg:space-y-28">
          {portraits.map((person) => (
            <article key={person.name} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-16">
              <FadeIn className={person.reverse ? 'lg:col-span-4 lg:col-start-9' : 'lg:col-span-4'}>
                <div className="w-[85%] md:mx-auto md:w-80 lg:mx-0 lg:w-full">
                  <Portrait
                    name={person.image}
                    alt={person.alt}
                    frameTo={person.reverse ? 'left' : 'right'}
                  />
                </div>
              </FadeIn>

              <FadeIn
                delay={0.08}
                className={
                  person.reverse
                    ? 'lg:col-span-7 lg:col-start-1 lg:row-start-1'
                    : 'lg:col-span-7 lg:col-start-6'
                }
              >
                <h3 className="font-display text-5xl font-extrabold uppercase leading-none tracking-tight text-ink sm:text-6xl">
                  {person.name}
                </h3>
                {person.paragraphs.length > 0 && (
                  <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
                    {person.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </FadeIn>
            </article>
          ))}

          <article className="grid items-center gap-8 border-t-2 border-ink pt-16 lg:grid-cols-12 lg:gap-16 lg:pt-20">
            <FadeIn className="lg:col-span-5">
              <div className="md:mx-auto md:w-80 lg:mx-0 lg:w-full">
                <Portrait
                  name="OverOns/samen"
                  alt="Siebe en Lars van wegdermee"
                  frameTo="right"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.08} className="lg:col-span-6 lg:col-start-7">
              <h3 className="font-display text-5xl font-extrabold uppercase leading-none tracking-tight text-ink sm:text-6xl">
                Wegdermee
              </h3>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
                {togetherParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </FadeIn>
          </article>
        </div>
      </div>
    </section>
  )
}
