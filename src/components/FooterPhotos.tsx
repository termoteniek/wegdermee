import { ResponsiveImage } from './ResponsiveImage'

const WIDTHS = [640, 1080, 1920]

const photos = [
  {
    name: 'Werk/038',
    alt: 'Medewerker plaatst een oprijplaat onder de bestelwagen',
    className: 'object-[center_58%]',
  },
  {
    name: 'Werk/087',
    alt: 'De bestelwagen van wegdermee rijdt door een woonwijk',
    className: 'object-[center_45%]',
  },
  {
    name: 'Werk/060',
    alt: 'Twee medewerkers tillen een tafel naar buiten',
    className: 'object-[center_28%]',
  },
]

export function FooterPhotos() {
  return (
    <section aria-label="Aan het werk" className="grid grid-cols-3 bg-ink">
      {photos.map((photo) => (
        <div key={photo.name} className="relative h-32 overflow-hidden sm:h-44 lg:h-60">
          <ResponsiveImage
            name={photo.name}
            alt={photo.alt}
            widths={WIDTHS}
            sizes="33vw"
            className={`h-full w-full object-cover ${photo.className}`}
            pictureClassName="absolute inset-0 block h-full w-full"
          />
        </div>
      ))}
    </section>
  )
}
