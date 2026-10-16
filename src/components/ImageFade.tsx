import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ResponsiveImage, HERO_ABOUT_WIDTHS } from './ResponsiveImage'

export type FadeSlide = {
  name: string
  alt: string
}

type ImageFadeProps = {
  images: FadeSlide[]
  intervalMs?: number
  /** When set, the parent owns the slide so several fades can stay in sync. */
  index?: number
  widths?: number[]
  sizes?: string
  className?: string
  pictureClassName?: string
  imgClassName?: string
  overlayClassName?: string
  showDots?: boolean
}

export function ImageFade({
  images,
  intervalMs = 4500,
  index: controlledIndex,
  widths = [...HERO_ABOUT_WIDTHS],
  sizes = '(max-width: 1024px) 100vw, 40vw',
  className,
  pictureClassName = 'absolute inset-0 block h-full w-full',
  imgClassName = 'h-full w-full object-cover object-center',
  overlayClassName,
  showDots = true,
}: ImageFadeProps) {
  const [internalIndex, setInternalIndex] = useState(0)
  const index = controlledIndex ?? internalIndex
  const count = images.length

  useEffect(() => {
    if (controlledIndex != null || count <= 1) return
    const id = window.setInterval(() => {
      setInternalIndex((current) => (current + 1) % count)
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [controlledIndex, count, intervalMs])

  if (count === 0) return null

  const current = images[index] ?? images[0]

  return (
    <div className={`overflow-hidden ${className ?? 'relative'}`}>
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={current.name}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <ResponsiveImage
            name={current.name}
            alt={current.alt}
            widths={widths}
            sizes={sizes}
            pictureClassName={pictureClassName}
            className={imgClassName}
            loading={index === 0 ? 'eager' : 'lazy'}
            fetchPriority={index === 0 ? 'high' : 'auto'}
          />
        </motion.div>
      </AnimatePresence>

      {overlayClassName ? (
        <div className={`pointer-events-none absolute inset-0 z-10 ${overlayClassName}`} aria-hidden />
      ) : null}

      {showDots && count > 1 ? (
        <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {images.map((image, i) => (
            <button
              key={image.name}
              type="button"
              aria-label={`Toon foto ${i + 1}`}
              aria-current={i === index}
              className={`size-2.5 border border-white/40 transition-colors ${
                i === index ? 'bg-accent' : 'bg-white/50 hover:bg-white'
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}
