import { FadeIn } from './FadeIn'
import { PhotoSlot } from './ui/PhotoSlot'
import { SectionLabel } from './ui/SectionLabel'
import { Swoosh } from './ui/Swoosh'
import { WORK_WIDTHS } from './ResponsiveImage'

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
    <section id="waarom" className="relative bg-ink text-cream">
      {/* Cream fill on ink — flipped so the wave opens into this section */}
      <div className="-mt-px text-cream" aria-hidden>
        <Swoosh flip />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pt-10 pb-24 sm:px-8 sm:pt-14 sm:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
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
            <figure className="relative mt-8 aspect-[4/3] overflow-hidden border border-white/15">
              <PhotoSlot
                name="Werk/061"
                alt="Twee medewerkers tillen een meubel op een oprit"
                widths={[...WORK_WIDTHS]}
                sizes="(max-width: 1024px) 100vw, 45vw"
                fill
                className="object-[center_40%]"
              />
            </figure>
          </FadeIn>

          <ul>
            {reasons.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.05}>
                <li className="border-t border-white/15 py-5 first:border-t-0 sm:py-6">
                  <span className="font-display text-sm font-extrabold text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-bold uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-white/55">
                    {item.description}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
