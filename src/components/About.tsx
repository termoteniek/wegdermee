import { aboutShot, werkName } from '../data/werkImages'
import { FadeIn } from './FadeIn'
import { ResponsiveImage, WERK_WIDTHS } from './ResponsiveImage'
import { SectionLabel } from './ui/SectionLabel'

export function About() {
  return (
    <section id="over-ons" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <FadeIn className="lg:col-span-5">
          <ResponsiveImage
            name={werkName(aboutShot.id)}
            alt={aboutShot.alt}
            widths={[...WERK_WIDTHS]}
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="aspect-[4/5] w-full object-cover object-top"
            pictureClassName="block w-full overflow-hidden"
            loading="lazy"
          />
        </FadeIn>

        <FadeIn className="lg:col-span-7">
          <SectionLabel>Over ons</SectionLabel>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            Welkom bij Wegdermee
          </h2>

          <blockquote className="mt-8 border-l-2 border-accent pl-5">
            <p className="font-display text-2xl font-semibold leading-snug text-ink">
              &ldquo;Jouw rommel? Wegdermee!&rdquo;
            </p>
          </blockquote>

          <div className="mt-8 max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Ik ben Siebe, oprichter van Wegdermee. Al van jongs af aan droom ik ervan om een eigen
              onderneming uit te bouwen. Met Wegdermee maak ik van die droom eindelijk werkelijkheid:
              een betrouwbare en betaalbare service waarmee ik mensen kan ontzorgen.
            </p>
            <p>
              Door mijn ervaring bij verschillende verhuisfirma&apos;s leerde ik hoe belangrijk een
              vlotte, zorgvuldige en klantgerichte aanpak is. Die ervaring neem ik elke dag mee in
              mijn eigen onderneming.
            </p>
            <p>
              Bij Wegdermee kunt u terecht voor het ophalen van rommel en volledige inboedels of voor
              volledige ontruimingen van huizen, appartementen en kantoren, maar ook voor kleine
              verhuizingen en transportdiensten. Heeft u een grote aankoop gedaan, maar geen geschikt
              vervoer? Ook dan help ik u graag verder. Geen opdracht is te klein: mijn doel is om
              elke klant snel, correct en met een glimlach verder te helpen.
            </p>
            <p>
              Voor ons staan betrouwbaarheid, duidelijke afspraken en een persoonlijke aanpak
              centraal. We behandelen uw spullen met zorg en zorgen ervoor dat u zich nergens zorgen
              over hoeft te maken.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
