import { FadeIn } from './FadeIn'
import { Button } from './ui/Button'
import { SectionLabel } from './ui/SectionLabel'
import { StripeBand } from './ui/StripeBand'

export function About() {
  return (
    <section id="over-ons" className="bg-paper">
      <StripeBand />

      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-stretch gap-0 lg:grid-cols-2">
          <FadeIn className="relative flex min-h-[320px] flex-col justify-between border-[3px] border-ink bg-ink p-10 sm:p-14 lg:min-h-[480px]">
            <div className="pattern-dots absolute inset-0 opacity-10" aria-hidden />
            <p className="relative font-mono text-xs font-bold uppercase tracking-[0.3em] text-punch">
              wegdermee — sinds dag één
            </p>
            <img
              src="/logo.png"
              alt="wegdermee logo"
              className="relative mx-auto w-full max-w-[220px] brightness-0 invert sm:max-w-[280px]"
            />
            <p className="relative font-display text-xl font-semibold italic text-paper/80">
              Jouw partner voor inboedels & rommelophaal
            </p>
          </FadeIn>

          <FadeIn
            delay={0.1}
            className="flex flex-col justify-center border-[3px] border-t-0 border-ink bg-paper p-10 sm:p-14 lg:border-t-[3px] lg:border-l-0"
          >
            <SectionLabel index="04">Over ons</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-extrabold text-ink sm:text-5xl">
              Wie komt er langs?
            </h2>

            <blockquote className="mt-8 border-l-[6px] border-punch pl-6">
              <p className="font-display text-2xl font-bold italic leading-snug text-ink sm:text-3xl">
                &ldquo;Klanten snel en correct ontzorgen van hun rommel.&rdquo;
              </p>
            </blockquote>

            <div className="mt-8 space-y-4 font-mono text-sm leading-relaxed text-muted sm:text-base">
              <p>
                <strong className="font-bold text-ink">wegdermee</strong> is jouw partner voor
                inboedels en rommelophaal — van een kleine ophaling tot een volledige
                ontruiming of grotere B2B-operatie.
              </p>
              <p>
                Transparante prijzen, vriendelijke service en geen verrassingen
                achteraf. Zo hoort het.
              </p>
            </div>

            <Button href="#contact" variant="heat" className="mt-10 self-start">
              Boek een ophaling
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
