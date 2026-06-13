import { FadeIn } from './FadeIn'
import { SectionLabel } from './ui/SectionLabel'

export function About() {
  return (
    <section id="over-ons" className="border-t-2 border-ink bg-cream-dark py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-5">
            <div className="relative border-2 border-ink bg-ink p-10 sm:p-14">
              <img
                src="/logo.png"
                alt="wegdermee logo"
                className="mx-auto w-full max-w-[220px] brightness-0 invert"
              />
              <div className="absolute -right-3 -top-3 h-full w-full border-2 border-accent" aria-hidden />
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-7">
            <SectionLabel>Over ons</SectionLabel>
            <h2 className="mt-3 font-display text-5xl font-extrabold uppercase leading-none tracking-tight text-ink sm:text-6xl">
              Wie komt er langs?
            </h2>

            <blockquote className="mt-8 border-l-4 border-accent pl-6">
              <p className="font-display text-2xl font-bold uppercase italic leading-snug text-ink sm:text-3xl">
                &ldquo;Klanten snel en correct ontzorgen van hun rommel.&rdquo;
              </p>
            </blockquote>

            <div className="mt-8 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                Hey! Wij zijn Siebe en Lars, 20 en studentondernemers. Siebe heeft al
                ervaring opgedaan bij verschillende verhuisfirma's — daarom weten
                hij wat klanten écht nodig hebben.
              </p>
              <p>
                Toen Siebe met het idee van <strong className="text-ink">wegdermee</strong> kwam, 
                was Lars meteen overtuigd. Zo starten we samen een ophaaldienst voor
                rommel, inboedels en kleine verhuizingen.
              </p>
              <p>
                Ons doel? Klanten snel en correct ontzorgen van hun rommel. Of het nu gaat
                om een volledige ontruiming, werf opruiming, een kleine ophaling of
                verhuizing — wij helpen u graag.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
