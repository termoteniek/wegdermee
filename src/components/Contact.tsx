import { FadeIn } from './FadeIn'
import { BookingForm } from './contact/BookingForm'
import { SectionLabel } from './ui/SectionLabel'

export function Contact() {
  return (
    <section className="flex flex-1 flex-col bg-cream pb-20 pt-32 text-ink sm:pb-28 sm:pt-36">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid min-w-0 gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <FadeIn direction="left" className="min-w-0">
            <SectionLabel>Contact</SectionLabel>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Maak een afspraak
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
              Vul uw gegevens in, kies een datum en tijdstip. Wij bevestigen telefonisch zodat alles
              correct staat.
            </p>

            <div className="mt-8 border-l-2 border-accent pl-5">
              <p className="font-display text-base font-semibold text-ink">Altijd bereikbaar</p>
              <p className="mt-1 text-muted">
                7 op 7 flexibel inplanbaar — ook in het weekend en &apos;s avonds.
              </p>
            </div>

            <ul className="mt-10 space-y-5">
              <li>
                <a
                  href="mailto:info@wegdermee.com"
                  className="block rounded-sm transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  <span className="text-sm text-muted">E-mail</span>
                  <span className="mt-1 block font-display text-2xl font-semibold tracking-tight">
                    info@wegdermee.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+32498438878"
                  className="block rounded-sm transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  <span className="text-sm text-muted">Tel</span>
                  <span className="mt-1 block font-display text-2xl font-semibold tabular-nums tracking-tight">
                    +32 498 43 88 78
                  </span>
                </a>
              </li>
            </ul>
          </FadeIn>

          <FadeIn className="w-full min-w-0">
            <BookingForm />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
