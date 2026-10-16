import { FadeIn } from './FadeIn'
import { PhotoSlot } from './ui/PhotoSlot'
import { Button } from './ui/Button'
import { SectionLabel } from './ui/SectionLabel'
import { WORK_WIDTHS } from './ResponsiveImage'

type ServiceClosingProps = {
  title: string
  image?: string
  imageAlt: string
  widths?: number[]
}

export function ServiceClosing({
  title,
  image,
  imageAlt,
  widths = [...WORK_WIDTHS],
}: ServiceClosingProps) {
  return (
    <section className="border-t-2 border-ink bg-ink text-cream">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[280px] sm:min-h-[380px] lg:min-h-[520px]">
          <PhotoSlot
            name={image}
            alt={imageAlt}
            widths={widths}
            sizes="(max-width: 1024px) 100vw, 50vw"
            fill
            className="object-[center_35%]"
          />
        </div>
        <div className="flex items-center px-5 py-16 sm:px-10 sm:py-20 lg:px-16">
          <FadeIn>
            <SectionLabel light>Klaar om te starten?</SectionLabel>
            <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-none tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="mt-5 max-w-lg text-lg text-white/60">
              Vraag een vrijblijvende offerte aan of plan direct een afspraak. Wij nemen snel
              contact op.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact">Offerte aanvragen</Button>
              <Button
                href="tel:+32498438878"
                variant="ghost"
                className="!border-white/25 !bg-white/10 !text-white hover:!bg-white/20"
              >
                Bel +32 498 43 88 78
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
