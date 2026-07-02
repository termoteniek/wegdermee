import { FadeIn } from './FadeIn'
import { SectionLabel } from './ui/SectionLabel'

const regions = ['Oost-Vlaanderen', 'West-Vlaanderen', 'Antwerpen', 'Brussel']

export function Region() {
  return (
    <section id="regio" className="relative overflow-hidden py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="text-center">
          <SectionLabel>Regio</SectionLabel>
          <h2 className="mt-3 font-display text-5xl font-extrabold uppercase tracking-tight text-ink sm:text-6xl">
            Waar we rijden
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-muted">
            Onze focus ligt op onderstaande provincies. Staat uw regio er
            niet bij? Neem gerust contact op, we helpen u graag verder.
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-14">
          <ul className="grid grid-cols-1 border-y-2 border-ink md:grid-cols-2 lg:grid-cols-4">
            {regions.map((region, i) => (
              <li
                key={region}
                className="group flex min-w-0 flex-col items-center justify-center border-b-2 border-ink px-4 py-10 text-center transition-colors last:border-b-0 hover:bg-ink hover:text-cream md:px-5 md:py-12 md:max-lg:border-b-0 md:max-lg:odd:border-r-2 md:max-lg:[&:nth-child(-n+2)]:border-b-2 md:max-lg:[&:nth-child(n+3)]:border-b-0 lg:border-b-0 lg:border-r-2 lg:px-6 lg:py-14 lg:odd:border-r-0 lg:last:border-r-0"
              >
                <span className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-muted group-hover:text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="mt-2 text-balance font-display text-2xl font-extrabold uppercase tracking-tight md:text-3xl lg:text-4xl">
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
