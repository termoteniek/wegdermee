import { FadeIn } from './FadeIn'
import { PhotoSlot } from './ui/PhotoSlot'
import { Button } from './ui/Button'
import { SectionLabel } from './ui/SectionLabel'
import { Swoosh } from './ui/Swoosh'
import { WORK_WIDTHS } from './ResponsiveImage'

const steps = [
  {
    num: '01',
    title: 'Contact opnemen',
    description:
      'Bel, mail of vul het formulier in. Vertel ons waar we moeten zijn en wat weg moet.',
  },
  {
    num: '02',
    title: 'Offerte & afspraak',
    description:
      'U krijgt een duidelijke prijs, zonder verrassingen of extra kosten. Na akkoord plannen we een moment dat voor u past.',
  },
  {
    num: '03',
    title: 'Ophaalmoment',
    description:
      'Wij komen ter plaatse met de juiste wagen. U hoeft niet te sorteren — alles mag bij elkaar.',
    image: 'Werk/050',
    imageAlt: 'Medewerker laadt spullen in de bestelwagen aan huis',
    widths: [...WORK_WIDTHS],
  },
  {
    num: '04',
    title: 'Proper afgevoerd',
    description:
      'Wanneer alles opgeladen is rekenen we af. Wij zorgen voor verwerking en afvoer.',
    image: 'Werk/080',
    imageAlt: 'Medewerker veegt de vloer na een ophaling',
    widths: [...WORK_WIDTHS],
  },
]

export function HowWeWork() {
  return (
    <section id="te-werk" className="relative bg-ink text-cream">
      <div className="pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <FadeIn className="border-b border-white/15 pb-10 text-center">
            <SectionLabel light>Hoe gaan we te werk</SectionLabel>
            <h2 className="mx-auto mt-3 max-w-2xl font-display text-5xl font-extrabold uppercase leading-none tracking-tight sm:text-6xl">
              Van eerste contact tot{' '}
              <span className="text-accent italic">alles weg</span>
            </h2>
          </FadeIn>

          <ol className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
            {steps.map((step, i) => (
              <li
                key={step.num}
                className="flex h-full flex-col border border-white/15 bg-ink-soft"
              >
                <FadeIn delay={i * 0.05} className="flex h-full flex-col">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <PhotoSlot
                      name={step.image}
                      alt={step.imageAlt ?? 'Foto volgt'}
                      widths={step.widths}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      fill
                      className="object-[center_40%]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 text-left sm:p-6">
                    <p className="font-display text-sm font-bold text-accent">{step.num}</p>
                    <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
                      {step.description}
                    </p>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ol>

          <FadeIn className="mt-14 flex justify-center">
            <Button href="/contact">Boek een ophaling</Button>
          </FadeIn>
        </div>
      </div>

      <div className="text-cream">
        <Swoosh />
      </div>
    </section>
  )
}
