import { FadeIn } from './FadeIn'
import { Button } from './ui/Button'
import { SectionLabel } from './ui/SectionLabel'

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
  },
  {
    num: '04',
    title: 'Proper afgevoerd',
    description:
      'Wanneer alles opgeladen is rekenen we af. Wij zorgen voor verwerking en afvoer.',
  },
]

export function HowWeWork() {
  return (
    <section id="te-werk" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="max-w-2xl">
          <SectionLabel>Hoe gaan we te werk</SectionLabel>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            Van eerste contact tot alles weg
          </h2>
        </FadeIn>

        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step) => (
            <li key={step.num} className="border-t-2 border-accent pt-5">
              <p className="font-display text-sm font-semibold tabular-nums text-accent">{step.num}</p>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-muted">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <Button href="/contact">Boek een ophaling</Button>
        </div>
      </div>
    </section>
  )
}
