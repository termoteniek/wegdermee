import { FadeIn } from './FadeIn'
import { SectionLabel } from './ui/SectionLabel'
import { StripeBand } from './ui/StripeBand'

const reasons = [
  {
    title: 'Licenties & verzekering',
    description: 'Alle vergunningen en een degelijke verzekering — zonder zorgen.',
  },
  {
    title: 'Alle type klanten',
    description: 'Particulier, VME of bedrijf — iedereen welkom.',
  },
  {
    title: 'Geen sorteren',
    description: 'Alles bij elkaar. Wij zorgen voor de rest.',
  },
  {
    title: 'Vlotte service',
    description: 'Snel ter plaatse, stipt en correct.',
  },
  {
    title: 'Volledig ontzorgd',
    description: 'Van ophaling tot afvoer — jij hoeft nergens aan te denken.',
  },
]

export function WhyUs() {
  return (
    <section id="waarom" className="bg-ink text-paper">
      <StripeBand />

      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <FadeIn direction="left" className="lg:sticky lg:top-28 lg:self-start">
            <SectionLabel index="02" light>
              Waarom wij
            </SectionLabel>
            <h2 className="mt-5 font-display text-5xl font-extrabold leading-[0.95] sm:text-6xl lg:text-7xl">
              Geen gedoe.
              <br />
              <span className="italic text-punch">Gewoon weg.</span>
            </h2>
            <p className="mt-6 max-w-md font-mono text-sm leading-relaxed text-paper/60">
              Betrouwbaar, transparant en met oog voor detail — zoals een goede
              ophaaldienst hoort te zijn.
            </p>

            <p
              className="mt-12 hidden font-display text-[8rem] font-black leading-none text-paper/5 lg:block"
              aria-hidden
            >
              ✓
            </p>
          </FadeIn>

          <ol className="space-y-0">
            {reasons.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.04}>
                <li className="group flex gap-6 border-t border-paper/15 py-9 first:border-t-0 sm:gap-10 sm:py-11">
                  <span className="font-mono text-sm font-bold text-punch">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-bold sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-mono text-sm leading-relaxed text-paper/55">
                      {item.description}
                    </p>
                  </div>
                  <span
                    className="hidden h-12 w-12 shrink-0 items-center justify-center border-[3px] border-punch font-mono text-lg font-bold text-punch transition-colors group-hover:bg-punch group-hover:text-ink sm:flex"
                    aria-hidden
                  >
                    →
                  </span>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
