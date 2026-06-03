import { FadeIn } from './FadeIn'
import { SectionLabel } from './ui/SectionLabel'

const regions = ['Limburg', 'Antwerpen', 'Vlaams-Brabant', 'Brussel']

export function Region() {
  return (
    <section id="regio" className="section-rule py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="max-w-2xl">
          <SectionLabel>Werkgebied</SectionLabel>
          <h2 className="mt-3 font-serif text-3xl font-bold text-navy sm:text-4xl">
            Regio&apos;s waar wij actief zijn
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Met focus op onderstaande provincies. Staat uw gemeente er niet bij? Neem
            gerust contact op — wij bekijken elke aanvraag individueel.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-12">
          <ul className="grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {regions.map((region, i) => (
              <li
                key={region}
                className="group bg-paper px-6 py-10 transition-colors hover:bg-paper-alt"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                  Provincie {String(i + 1).padStart(2, '0')}
                </span>
                <span className="mt-3 block font-serif text-2xl font-bold text-navy">
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
