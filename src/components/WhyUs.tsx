import { FadeIn } from './FadeIn'
import { SectionLabel } from './ui/SectionLabel'

const reasons = [
  {
    title: 'Licenties & verzekering',
    description:
      'Alle vergunningen in orde en een degelijke aansprakelijkheidsverzekering.',
  },
  {
    title: 'Particulier en zakelijk',
    description: 'Voor particulieren, VME\'s en bedrijven — met dezelfde zorgvuldigheid.',
  },
  {
    title: 'Geen sortering vereist',
    description: 'U levert alles aan; wij zorgen voor transport en correcte verwerking.',
  },
  {
    title: 'Betrouwbare planning',
    description: 'Duidelijke afspraken, stipte uitvoering en transparante communicatie.',
  },
  {
    title: 'Volledig ontzorgd',
    description: 'Van ophaling tot afvoer — u hoeft zich nergens zorgen over te maken.',
  },
]

export function WhyUs() {
  return (
    <section id="waarom" className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <FadeIn direction="left">
            <SectionLabel light>Waarom wegdermee</SectionLabel>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-snug sm:text-4xl">
              Betrouwbaar, correct en volledig geregeld
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-white/70">
              Wij werken volgens een vaste procedure: inschatting, afspraak, ophaling en
              conforme afvoer. Zo weet u vooraf waar u aan toe bent.
            </p>
          </FadeIn>

          <ul className="divide-y divide-white/12">
            {reasons.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.04}>
                <li className="grid gap-4 py-8 sm:grid-cols-[3rem_1fr] sm:gap-6 sm:py-9">
                  <span className="font-serif text-lg font-bold text-gold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">
                      {item.description}
                    </p>
                  </div>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
