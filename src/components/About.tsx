import { FadeIn } from './FadeIn'
import { SectionLabel } from './ui/SectionLabel'
import { assetUrl } from '../lib/assetUrl'

export function About() {
  return (
    <section id="over-ons" className="border-t-2 border-ink bg-cream-dark py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-5">
            <div className="relative">
              <div className="relative overflow-hidden border-2 border-ink">
                <img
                  src={assetUrl('ImageWithSmallLogo.png')}
                  alt="Siebe en Lars van wegdermee bij de aanhangwagen"
                  className="aspect-[3/4] w-full object-cover object-top"
                />
              </div>
              <div className="absolute -right-3 -top-3 h-full w-full border-2 border-accent" aria-hidden />
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-7">
            <SectionLabel>Over ons</SectionLabel>
            <h2 className="mt-3 font-display text-5xl font-extrabold uppercase leading-none tracking-tight text-ink sm:text-6xl">
              Welkom bij Wegdermee
            </h2>

            <blockquote className="mt-8 border-l-4 border-accent pl-6">
              <p className="font-display text-2xl font-bold uppercase italic leading-snug text-ink sm:text-3xl">
                &ldquo;Jouw rommel? Wegdermee!&rdquo;
              </p>
            </blockquote>

            <div className="mt-8 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                Ik ben Siebe, oprichter van Wegdermee. Al van jongs af aan droom ik ervan om een
                eigen onderneming uit te bouwen. Met Wegdermee maak ik van die droom eindelijk
                werkelijkheid: een betrouwbare en betaalbare service waarmee ik mensen kan
                ontzorgen.
              </p>
              <p>
                Door mijn ervaring bij verschillende verhuisfirma&apos;s leerde ik hoe belangrijk een
                vlotte, zorgvuldige en klantgerichte aanpak is. Die ervaring neem ik elke dag mee
                in mijn eigen onderneming.
              </p>
              <p>
                Bij Wegdermee kunt u terecht voor het ophalen van rommel en volledige inboedels of
                voor volledige ontruimingen van huizen, appartementen en kantoren, maar ook voor
                kleine verhuizingen en transportdiensten. Heeft u een grote aankoop gedaan, maar
                geen geschikt vervoer? Ook dan help ik u graag verder. Geen opdracht is te klein:
                mijn doel is om elke klant snel, correct en met een glimlach verder te helpen.
              </p>
              <p>
                Voor ons staan betrouwbaarheid, duidelijke afspraken en een persoonlijke
                aanpak centraal. We behandelen uw spullen met zorg en zorgen ervoor dat u zich
                nergens zorgen over hoeft te maken.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
