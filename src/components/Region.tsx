import { FadeIn } from './FadeIn'
import { Marquee } from './ui/Marquee'
import { Sticker } from './ui/Sticker'

const regions = ['Limburg', 'Antwerpen', 'Vlaams-Brabant', 'Brussel']

export function Region() {
  return (
    <section id="regio" className="overflow-hidden bg-paper-dark py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <FadeIn className="relative">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-muted">
                03 — Regio
              </p>
              <h2 className="mt-3 font-display text-5xl font-extrabold text-ink sm:text-6xl">
                Waar we rijden
              </h2>
            </div>
            <Sticker rotate={5} variant="heat" className="animate-wiggle">
              Heel België
            </Sticker>
          </div>
          <p className="mt-5 max-w-lg font-mono text-sm leading-relaxed text-muted">
            Actief in heel België — met focus op onderstaande provincies. Sta je er
            niet bij? Vraag gerust.
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={0.1} className="mt-14">
        <ul className="mb-10 flex flex-wrap justify-center gap-4 px-5 sm:gap-6">
          {regions.map((region) => (
            <li key={region}>
              <span className="box-brutal inline-block bg-paper px-8 py-4 font-display text-2xl font-bold text-ink sm:text-3xl">
                {region}
              </span>
            </li>
          ))}
        </ul>

        <div className="border-y-[3px] border-ink bg-ink py-5">
          <Marquee
            items={regions.flatMap((r) => [
              r,
              'België',
              'Ophaling vandaag',
              'Gratis offerte',
            ])}
            className="text-punch"
            speed="slow"
          />
        </div>
      </FadeIn>
    </section>
  )
}
