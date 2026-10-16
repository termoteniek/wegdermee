import { galleryShots, werkName } from '../data/werkImages'
import { FadeIn } from './FadeIn'
import { ResponsiveImage, WERK_WIDTHS } from './ResponsiveImage'
import { SectionLabel } from './ui/SectionLabel'

export function OnsWerk() {
  return (
    <section id="werk" className="bg-ink py-20 text-cream sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="max-w-2xl">
          <SectionLabel light>Ons werk</SectionLabel>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Zo ziet een opdracht eruit
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/75">
            Ophalingen, ontruimingen en opruimingen — van de eerste doos tot een lege ruimte.
          </p>
        </FadeIn>

        <ul className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
          {galleryShots.map((shot) => (
            <li key={shot.id}>
              <ResponsiveImage
                name={werkName(shot.id)}
                alt={shot.alt}
                widths={[...WERK_WIDTHS]}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="aspect-[4/3] w-full object-cover"
                pictureClassName="block overflow-hidden"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
