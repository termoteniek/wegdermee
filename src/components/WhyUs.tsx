import { FadeIn } from './FadeIn'
import { SectionLabel } from './ui/SectionLabel'
import { Swoosh } from './ui/Swoosh'

const reasons = [
  {
    title: 'Vlotte service',
    description: 'Snel ter plaatse, stipt en correct.',
  },
  {
    title: 'Alle type klanten',
    description: 'Particulier, VME of bedrijf — iedereen welkom.',
  },
  {
    title: 'Niet sorteren',
    description: 'Alles door elkaar. Wij sorteren voor u.',
  },
  {
    title: 'Licenties & verzekering',
    description: 'Alle vergunningen en een uitstekende verzekering.',
  },
  {
    title: 'Volledig ontzorgd',
    description: 'Van ophaling tot afvoer — u hoeft nergens aan te denken.',
  },
]

export function WhyUs() {
  return (
    <section id="waarom" className="relative bg-ink text-cream">
      <div className="bg-creamtext-cream-dark">
        <Swoosh flip />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pt-24 pb-0 sm:px-8 sm:pt-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <FadeIn direction="left">
            <SectionLabel light>Waarom wij</SectionLabel>
            <h2 className="mt-4 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Geen gedoe.
              <br />
              <span className="text-accent italic">Gewoon weg.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg text-white/60">
              Betrouwbaar, transparant en met oog voor detail — zoals een goede
              ophaaldienst hoort te zijn.
            </p>
          </FadeIn>

          <ul className="space-y-0">
            {reasons.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.05}>
                <li className="group border-t border-white/15 py-8 first:border-t-0 sm:py-10">
                  <div className="flex gap-6 sm:gap-8">
                    <span className="font-display text-4xl font-extrabold text-accent/80 transition-colors group-hover:text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-bold uppercase tracking-tight">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-white/55">
                        {item.description}
                      </p>
                    </div>
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
