import { FadeIn } from './FadeIn'
import { SectionLabel } from './ui/SectionLabel'

const regions = ['Limburg', 'Antwerpen', 'Vlaams-Brabant', 'Brussel']

export function Region() {
  return (
    <section id="regio" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="text-center">
          <SectionLabel>Regio</SectionLabel>
          <h2 className="mt-3 font-display text-5xl font-extrabold uppercase tracking-tight text-ink sm:text-6xl">
            Waar we rijden
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-muted">
            Actief in heel België — met focus op onderstaande provincies. Sta je er
            niet bij? Vraag gerust.
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-14">
          <ul className="flex flex-col divide-y-2 divide-ink border-y-2 border-ink sm:flex-row sm:divide-x-2 sm:divide-y-0">
            {regions.map((region, i) => (
              <li
                key={region}
                className="group flex flex-1 flex-col items-center justify-center px-6 py-10 transition-colors hover:bg-ink hover:text-cream sm:py-14"
              >
                <span className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-muted group-hover:text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="mt-2 font-display text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
                  {region}
                </span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  )
}
