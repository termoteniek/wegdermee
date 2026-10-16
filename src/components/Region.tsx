import { FadeIn } from './FadeIn'
import { SectionLabel } from './ui/SectionLabel'

const regions = ['Oost-Vlaanderen', 'West-Vlaanderen', 'Antwerpen', 'Brussel']

export function Region() {
  return (
    <section id="regio" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="max-w-2xl">
          <SectionLabel>Regio</SectionLabel>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            Waar we rijden
          </h2>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted">
            Onze focus ligt op onderstaande provincies. Staat uw regio er niet bij? Neem gerust
            contact op, we helpen u graag verder.
          </p>
        </FadeIn>

        <ul className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {regions.map((region) => (
            <li key={region} className="bg-cream px-2 py-8 sm:px-4 sm:py-10">
              <p className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {region}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
