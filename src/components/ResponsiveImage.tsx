import { assetUrl } from '../lib/assetUrl'

type ResponsiveImageProps = {
  /** Logical basename without width suffix or extension, e.g. `VoorEnNa/Voor1` */
  name: string
  alt: string
  widths: number[]
  sizes: string
  className?: string
  pictureClassName?: string
  loading?: 'lazy' | 'eager'
  fetchPriority?: 'high' | 'low' | 'auto'
  decoding?: 'async' | 'auto' | 'sync'
  draggable?: boolean
}

function srcFor(name: string, width: number) {
  return assetUrl(`${name}-${width}.webp`)
}

function srcSet(name: string, widths: number[]) {
  return widths.map((width) => `${srcFor(name, width)} ${width}w`).join(', ')
}

export function ResponsiveImage({
  name,
  alt,
  widths,
  sizes,
  className,
  pictureClassName,
  loading = 'lazy',
  fetchPriority,
  decoding = 'async',
  draggable,
}: ResponsiveImageProps) {
  const fallbackWidth = widths[widths.length - 1] ?? widths[0]

  return (
    <picture className={pictureClassName}>
      <img
        src={srcFor(name, fallbackWidth)}
        srcSet={srcSet(name, widths)}
        sizes={sizes}
        alt={alt}
        className={className}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding={decoding}
        draggable={draggable}
      />
    </picture>
  )
}

export const VOOR_EN_NA_WIDTHS = [640, 1280, 1920] as const
export const HERO_ABOUT_WIDTHS = [640, 1080] as const
export const WORK_WIDTHS = [640, 1080, 1920] as const
