import { FadeIn } from './FadeIn'
import { Button } from './ui/Button'
import { SectionLabel } from './ui/SectionLabel'

export function About() {
  return (
    <section id="over-ons" className="section-rule bg-paper-alt py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-5">
            <div className="flex items-center justify-center rounded-sm border border-line bg-paper p-12 shadow-sm sm:p-16">
              <img
                src="/logo.png"
                alt="wegdermee logo"
                className="w-full max-w-[200px]"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="lg:col-span-7">
            <SectionLabel>Over ons</SectionLabel>
            <h2 className="mt-3 font-serif text-3xl font-bold text-navy sm:text-4xl">
              Uw partner voor inboedels en rommelophaal
            </h2>

            <blockquote className="mt-8 border-l-2 border-gold pl-6">
              <p className="font-serif text-xl italic leading-relaxed text-navy sm:text-2xl">
                &ldquo;Klanten snel en correct ontzorgen van hun rommel.&rdquo;
              </p>
              <footer className="mt-3 text-sm text-muted">— Missie wegdermee</footer>
            </blockquote>

            <div className="mt-8 space-y-4 leading-relaxed text-muted">
              <p>
                <strong className="font-semibold text-ink">wegdermee</strong> verzorgt
                ophalingen voor particulieren en ondernemingen — van een enkele zending tot
                een volledige ontruiming of grotere B2B-opdracht.
              </p>
              <p>
                Transparante prijzen, een professionele aanpak en geen verrassingen
                achteraf. Dat is de standaard waar wij ons aan houden.
              </p>
            </div>

            <Button href="#contact" className="mt-10">
              Afspraak aanvragen
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
