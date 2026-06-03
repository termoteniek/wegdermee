import { motion } from 'framer-motion'
import { FadeIn } from './FadeIn'
import { SectionLabel } from './ui/SectionLabel'

const regions = [
  { name: 'Limburg', vibe: 'thuisbasis' },
  { name: 'Antwerpen', vibe: 'altijd busy' },
  { name: 'Vlaams-Brabant', vibe: 'we rijden' },
  { name: 'Brussel', vibe: 'challenge accepted' },
]

export function Region() {
  return (
    <section id="regio" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="text-center">
          <SectionLabel variant="pink">Regio</SectionLabel>
          <h2 className="mt-5 font-display text-5xl uppercase text-ink sm:text-6xl">
            Waar rijden we?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg font-medium text-muted">
            Heel België — focus op deze zones. Ergens anders? Ping ons anyway.
          </p>
        </FadeIn>

        <FadeIn delay={0.12} className="mt-14">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {regions.map((region, i) => (
              <motion.li
                key={region.name}
                className="group relative border-[3px] border-ink bg-paper-dark p-6 text-center shadow-[6px_6px_0_0_#0a0a0a] transition-colors hover:bg-lime hover:shadow-[3px_3px_0_0_#0a0a0a]"
                whileHover={{ rotate: i % 2 === 0 ? -2 : 2, y: -6 }}
                transition={{ type: 'spring', stiffness: 350, damping: 18 }}
              >
                <span className="font-display text-3xl uppercase text-ink sm:text-4xl">
                  {region.name}
                </span>
                <p className="mt-2 font-display text-xs uppercase tracking-wider text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  {region.vibe}
                </p>
              </motion.li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  )
}
