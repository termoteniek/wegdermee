import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ResponsiveImage, HERO_ABOUT_WIDTHS } from './ResponsiveImage'

export type FadeSlide = {
  name: string
  alt: string
  imgClassName?: string
}

type ImageFadeProps = {
  images: FadeSlide[]
  intervalMs?: number
  widths?: number[]
  sizes?: string
  className?: string
  pictureClassName?: string
  imgClassName?: string
  overlayClassName?: string
  showDots?: boolean
  /** Blur a copy of the photo behind the left (or lower, on small screens) edge. */
  focusVeil?: boolean
}

export function ImageFade({
  images,
  intervalMs = 4500,
  widths = [...HERO_ABOUT_WIDTHS],
  sizes = '(max-width: 1024px) 100vw, 40vw',
  className,
  pictureClassName = 'absolute inset-0 block h-full w-full',
  imgClassName = 'h-full w-full object-cover object-center',
  overlayClassName,
  showDots = true,
  focusVeil = false,
}: ImageFadeProps) {
  const reduceMotion = useReducedMotion()
  const [slide, setSlide] = useState({ current: 0, under: 0 })
  const count = images.length
  const index = slide.current

  useEffect(() => {
    if (count <= 1 || reduceMotion) return
    const id = window.setInterval(() => {
      setSlide((state) => ({
        current: (state.current + 1) % count,
        under: state.current,
      }))
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [count, intervalMs, reduceMotion])

  if (count === 0) return null

  const slides = (decorative: boolean) =>
    images.map((image, i) => {
      const active = i === slide.current
      const underneath = i === slide.under
      return (
        <motion.div
          key={image.name}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: active || underneath ? 1 : 0 }}
          transition={{
            duration: reduceMotion ? 0 : active ? 1.15 : 0,
            ease: 'easeInOut',
          }}
          style={{ zIndex: active ? 2 : underneath ? 1 : 0 }}
        >
          <ResponsiveImage
            name={image.name}
            alt={decorative ? '' : image.alt}
            widths={widths}
            sizes={sizes}
            pictureClassName={pictureClassName}
            className={image.imgClassName ?? imgClassName}
            loading={i === 0 ? 'eager' : 'lazy'}
            fetchPriority={decorative ? 'low' : i === 0 ? 'high' : 'low'}
          />
        </motion.div>
      )
    })

  return (
    <div className={`relative overflow-hidden ${className ?? ''}`}>
      {slides(false)}

      {focusVeil ? (
        <div className="hero-focus-veil pointer-events-none absolute inset-0 z-[3]" aria-hidden>
          <div
            className="absolute inset-0"
            style={{ filter: 'blur(14px)', transform: 'scale(1.04)' }}
          >
            {slides(true)}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/30 to-transparent lg:bg-gradient-to-r lg:from-ink/40 lg:via-ink/10 lg:to-transparent" />
        </div>
      ) : null}

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
              onClick={() => setSlide({ current: i, under: index })}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}
