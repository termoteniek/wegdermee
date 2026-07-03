import { FadeIn } from './FadeIn'
import { BookingForm } from './contact/BookingForm'
import { SectionLabel } from './ui/SectionLabel'

export function Contact() {
  return (
    <section className="flex flex-1 flex-col bg-ink py-24 text-cream sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid min-w-0 gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <FadeIn direction="left" className="min-w-0">
            <SectionLabel light>Contact</SectionLabel>
            <h2 className="mt-3 font-display text-5xl font-extrabold uppercase leading-none tracking-tight sm:text-6xl">
              Maak een afspraak
            </h2>
            <p className="mt-5 max-w-md text-lg text-white/60">
              Vul uw gegevens in, kies een datum en tijdstip. Wij bevestigen telefonisch zodat
              alles correct staat.
            </p>

            <div className="mt-8 border-l-4 border-accent pl-5">
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
                Altijd bereikbaar
              </p>
              <p className="mt-2 text-white/70">
                7 op 7 flexibel inplanbaar — ook in het weekend en &apos;s avonds.
              </p>
            </div>

            <ul className="mt-12 space-y-6">
              <li>
                <a
                  href="mailto:info@wegdermee.com"
                  className="group flex items-baseline gap-4 transition-colors hover:text-accent"
                >
                  <span className="font-display text-xs font-semibold uppercase tracking-widest text-white/40">
                    E-mail
                  </span>
                  <span className="font-display text-2xl font-bold uppercase sm:text-3xl">
                    info@wegdermee.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+32498438878"
                  className="group flex items-baseline gap-4 transition-colors hover:text-accent"
                >
                  <span className="font-display text-xs font-semibold uppercase tracking-widest text-white/40">
                    Tel
                  </span>
                  <span className="font-display text-2xl font-bold uppercase sm:text-3xl">
                    +32 498 43 88 78
                  </span>
                </a>
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.1} className="w-full min-w-0">
            <div className="relative w-full min-w-0">
              <div aria-hidden="true" inert>
                <BookingForm />
              </div>
              <div
                className="absolute inset-0 z-20 flex items-center justify-center bg-cream/15 backdrop-blur-[2px]"
                role="status"
                aria-label="Binnenkort bischikbaar"
              >
                <p className="font-display text-2xl font-extrabold uppercase tracking-tight text-ink sm:text-3xl">
                  Binnenkort bischikbaar
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
