import { useCallback, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'
import { FadeIn } from './FadeIn'
import { ResponsiveImage, VOOR_EN_NA_WIDTHS } from './ResponsiveImage'
import { SectionLabel } from './ui/SectionLabel'

export type BeforeAfterPair = {
  /** Logical image name without size/extension, e.g. `VoorEnNa/Voor1` */
  before: string
  after: string
  label?: string
}

type ServiceBeforeAfterProps = {
  pairs?: BeforeAfterPair[]
}

const GRID_SIZES = '(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 640px'
const SLIDER_SIZES = '(max-width: 1280px) 100vw, 1280px'

function ImageFrame({
  name,
  alt,
  badge,
}: {
  name: string
  alt: string
  badge: string
}) {
  return (
    <div className="relative max-w-full overflow-hidden border-2 border-ink bg-cream-dark">
      <ResponsiveImage
        name={name}
        alt={alt}
        widths={[...VOOR_EN_NA_WIDTHS]}
        sizes={GRID_SIZES}
        className="aspect-[4/3] block h-auto w-full max-w-full object-cover sm:aspect-[16/10]"
        pictureClassName="block w-full"
        loading="lazy"
      />
      <span className="absolute left-0 top-0 bg-accent px-3 py-1.5 font-display text-xs font-bold uppercase tracking-widest text-white sm:px-4 sm:text-sm">
        {badge}
      </span>
    </div>
  )
}

function BeforeAfterSlider({ pair }: { pair: BeforeAfterPair }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const dragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const next = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(100, Math.max(0, next)))
  }, [])

  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    dragging.current = true
    event.currentTarget.setPointerCapture(event.pointerId)
    updatePosition(event.clientX)
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (!dragging.current) return
    updatePosition(event.clientX)
  }

  function handlePointerUp(event: ReactPointerEvent<HTMLDivElement>) {
    dragging.current = false
    event.currentTarget.releasePointerCapture(event.pointerId)
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/10] w-full max-w-full cursor-ew-resize touch-none overflow-hidden border-2 border-ink bg-cream-dark select-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      role="img"
      aria-label="Sleep om voor en na te vergelijken"
    >
      <ResponsiveImage
        name={pair.after}
        alt="Na — opgeruimd"
        widths={[...VOOR_EN_NA_WIDTHS]}
        sizes={SLIDER_SIZES}
        pictureClassName="absolute inset-0 block h-full w-full"
        className="absolute inset-0 block h-full w-full max-w-none object-cover"
        loading="lazy"
        draggable={false}
      />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <ResponsiveImage
          name={pair.before}
          alt="Voor — met rommel"
          widths={[...VOOR_EN_NA_WIDTHS]}
          sizes={SLIDER_SIZES}
          pictureClassName="absolute inset-0 block h-full w-full"
          className="absolute inset-0 block h-full w-full max-w-none object-cover"
          loading="lazy"
          draggable={false}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_0_1px_rgba(12,12,12,0.35)]"
        style={{ left: `${position}%` }}
        aria-hidden
      >
        <div className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center border-2 border-ink bg-accent text-white shadow-[3px_3px_0_0_#0c0c0c]">
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M8 12H4m0 0 3-3M4 12l3 3M16 12h4m0 0-3-3m3 3-3 3" />
          </svg>
        </div>
      </div>

      <span className="pointer-events-none absolute left-0 top-0 z-10 bg-accent px-3 py-1.5 font-display text-xs font-bold uppercase tracking-widest text-white sm:px-4 sm:text-sm">
        Voor
      </span>
      <span className="pointer-events-none absolute right-0 top-0 z-10 bg-ink px-3 py-1.5 font-display text-xs font-bold uppercase tracking-widest text-cream sm:px-4 sm:text-sm">
        Na
      </span>
    </div>
  )
}

export function ServiceBeforeAfter({ pairs }: ServiceBeforeAfterProps) {
  const hasPairs = pairs != null && pairs.length > 0
  const staticPairs = hasPairs ? pairs.slice(0, -1) : []
  const sliderPair = hasPairs ? pairs[pairs.length - 1] : null

  return (
    <section className="overflow-x-clip border-t-2 border-ink bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn>
          <SectionLabel>Voor & na</SectionLabel>
          <h2 className="mt-3 max-w-xl font-display text-4xl font-extrabold uppercase leading-none tracking-tight text-ink sm:text-5xl">
            Het verschil spreekt voor zich
          </h2>
        </FadeIn>

        {hasPairs ? (
          <div className="mt-12 space-y-8">
            {staticPairs.map((pair, index) => (
              <FadeIn key={`${pair.before}-${pair.after}`} delay={0.05 + index * 0.04}>
                <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                  <ImageFrame
                    name={pair.before}
                    alt={pair.label ? `Voor — ${pair.label}` : `Voor situatie ${index + 1}`}
                    badge="Voor"
                  />
                  <ImageFrame
                    name={pair.after}
                    alt={pair.label ? `Na — ${pair.label}` : `Na situatie ${index + 1}`}
                    badge="Na"
                  />
                </div>
              </FadeIn>
            ))}

            {sliderPair ? (
              <FadeIn delay={0.05 + staticPairs.length * 0.04}>
                <BeforeAfterSlider pair={sliderPair} />
              </FadeIn>
            ) : null}
          </div>
        ) : (
          <FadeIn delay={0.08} className="mt-12">
            <blockquote className="px-8 py-20 text-center sm:px-12 sm:py-28">
              <p className="font-display text-4xl font-extrabold uppercase leading-none tracking-widest text-muted/20 sm:text-6xl lg:text-7xl">
                Binnenkort beschikbaar
              </p>
            </blockquote>
          </FadeIn>
        )}
      </div>
    </section>
  )
}
