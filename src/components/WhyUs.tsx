import { FadeIn } from './FadeIn'
import { SectionLabel } from './ui/SectionLabel'

const reasons = [
  {
    title: 'Vlotte service',
    description: 'Snel ter plaatse, stipt en correct.',
  },
  {
    title: 'Alle type klanten',
    description: 'Particulier, VZW of bedrijf — iedereen welkom.',
  },
  {
    title: 'Niet sorteren',
    description: 'Alles mag door elkaar liggen. Wij sorteren voor u.',
  },
  {
    title: 'Licenties & verzekering',
    description: 'Wij hebben alle vergunningen en een uitstekende verzekering.',
  },
  {
    title: 'Volledig ontzorgd',
    description: 'Van ophaling tot afvoer — u hoeft nergens aan te denken.',
  },
]

export function WhyUs() {
  return (
    <section id="waarom" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <FadeIn>
          <SectionLabel>Waarom wij</SectionLabel>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            Geen gedoe. Gewoon weg.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
            Betrouwbaar, transparant en met oog voor detail — zoals een goede ophaaldienst hoort te
            zijn.
          </p>
        </FadeIn>

        <ul>
          {reasons.map((item) => (
            <li key={item.title} className="border-t border-line py-5 first:border-t-0">
              <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-1 max-w-xl text-base leading-relaxed text-muted">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
