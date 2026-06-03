import { motion } from 'framer-motion'
import { FadeIn } from './FadeIn'
import { Button } from './ui/Button'
import { SectionLabel } from './ui/SectionLabel'
import { Sticker } from './ui/Sticker'

export function About() {
  return (
    <section
      id="over-ons"
      className="border-t-[3px] border-ink bg-lime py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-5">
            <motion.div
              className="relative border-[4px] border-ink bg-ink p-10 shadow-[14px_14px_0_0_#ff5500] sm:p-14"
              whileHover={{ rotate: -2, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <img
                src="/logo.png"
                alt="wegdermee logo"
                className="mx-auto w-full max-w-[220px] brightness-0 invert"
              />
              <Sticker
                variant="pink"
                rotate={-8}
                className="absolute -right-3 -top-4 !text-sm sm:!text-base"
              >
                Jong team
              </Sticker>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-7">
            <SectionLabel variant="pink">Over ons</SectionLabel>
            <h2 className="mt-5 font-display text-5xl uppercase leading-[0.9] text-ink sm:text-6xl">
              Wie komt er langs?
            </h2>

            <blockquote className="mt-8 border-l-[4px] border-ink pl-6">
              <p className="font-display text-2xl uppercase leading-snug text-ink sm:text-3xl">
                &ldquo;Snel je rommel kwijt — zonder corporate gedoe.&rdquo;
              </p>
            </blockquote>

            <div className="mt-8 space-y-4 text-lg font-medium leading-relaxed text-ink/80">
              <p>
                <strong className="font-display uppercase text-ink">wegdermee</strong> is
                een jonge ophaaldienst met grote ambities. Van je zolderkamer tot een
                volledige ontruiming — wij rollen op en rijden weer weg.
              </p>
              <p>
                Eerlijke prijzen, geen verrassingen, en een crew die lacht terwijl ze
                sjouwen. Zo hoort een startup te werken.
              </p>
            </div>

            <Button href="#contact" variant="primary" className="mt-10">
              Boek een ophaling
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
