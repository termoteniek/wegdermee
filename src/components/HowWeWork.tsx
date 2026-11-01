import { FadeIn } from './FadeIn'
import { ResponsiveImage } from './ResponsiveImage'
import { Button } from './ui/Button'
import { SectionLabel } from './ui/SectionLabel'
import { Swoosh } from './ui/Swoosh'

const STEP_WIDTHS = [640, 1080]

const steps = [
  {
    num: '01',
    title: 'Contact opnemen',
    description:
      'Bel, mail of vul het formulier in. Vertel ons waar we moeten zijn en wat weg moet.',
    image: 'Werk/042',
    alt: 'Medewerker wenkt bij de bestelwagen van wegdermee',
    imgClassName: 'object-[center_32%]',
  },
  {
    num: '02',
    title: 'Offerte & afspraak',
    description:
      'U krijgt een duidelijke prijs, zonder verrassingen of extra kosten. Na akkoord plannen we een moment dat voor u past.',
    image: 'Werk/040',
    alt: 'Twee medewerkers overleggen naast de bestelwagen',
    imgClassName: 'object-center',
  },
  {
    num: '03',
    title: 'Ophaalmoment',
    description:
      'Wij komen ter plaatse met de juiste wagen. U hoeft niet te sorteren — alles mag bij elkaar.',
    image: 'Werk/051',
    alt: 'Medewerker laadt een matras in de open bestelwagen',
    imgClassName: 'object-center',
  },
  {
    num: '04',
    title: 'Proper afgevoerd',
    description:
      'Wanneer alles opgeladen is rekenen we af. Wij zorgen voor verwerking en afvoer.',
    image: 'Werk/081',
    alt: 'Medewerker veegt de vloer na een ontruiming',
    imgClassName: 'object-center',
  },
]

export function HowWeWork() {
  return (
    <section id="te-werk" className="relative bg-ink text-cream">
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <FadeIn className="border-b border-white/15 pb-10 text-center">
            <SectionLabel light>Hoe gaan we te werk</SectionLabel>
            <h2 className="mx-auto mt-3 max-w-3xl font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-tight sm:text-6xl">
              Van eerste contact tot
              <span className="mt-1 block text-accent">alles weg</span>
            </h2>
          </FadeIn>

          <ol className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5">
            {steps.map((step, i) => (
              <li key={step.num} className="h-full">
                <FadeIn delay={i * 0.05} className="h-full">
                  <article className="flex h-full flex-col border border-white/15 bg-ink-soft">
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <ResponsiveImage
                        name={step.image}
                        alt={step.alt}
                        widths={STEP_WIDTHS}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                        className={`h-full w-full object-cover ${step.imgClassName}`}
                        pictureClassName="absolute inset-0 block h-full w-full"
                      />
                    </div>
                    <div className="flex flex-1 flex-col px-5 py-5 text-left">
                      <p className="font-display text-sm font-bold text-accent">{step.num}</p>
                      <h3 className="mt-2 font-display text-xl font-bold uppercase leading-none tracking-tight">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-white/55">{step.description}</p>
                    </div>
                  </article>
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
