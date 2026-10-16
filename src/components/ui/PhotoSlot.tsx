import { ResponsiveImage, WORK_WIDTHS } from '../ResponsiveImage'

type PhotoSlotProps = {
  /** Logical image name without size suffix. Omit to show a gray frame. */
  name?: string
  alt: string
  widths?: number[]
  sizes: string
  className?: string
  fill?: boolean
  showLabel?: boolean
  loading?: 'lazy' | 'eager'
  fetchPriority?: 'high' | 'low' | 'auto'
}

export function PhotoSlot({
  name,
  alt,
  widths = [...WORK_WIDTHS],
  sizes,
  className = '',
  fill = false,
  showLabel = true,
  loading = 'lazy',
  fetchPriority,
}: PhotoSlotProps) {
  if (!name) {
    return (
      <div
        className={`flex items-center justify-center bg-[#c8c8c8] text-sm text-ink/70 ${
          fill ? 'absolute inset-0' : ''
        } ${className}`}
        role="img"
        aria-label="Foto volgt"
      >
        {showLabel ? <span>Foto volgt</span> : <span className="sr-only">Foto volgt</span>}
      </div>
    )
  }

  return (
    <ResponsiveImage
      name={name}
      alt={alt}
      widths={widths}
      sizes={sizes}
      pictureClassName={fill ? 'absolute inset-0 block h-full w-full' : 'block w-full'}
      className={
        fill ? `h-full w-full object-cover ${className}` : className
      }
      loading={loading}
      fetchPriority={fetchPriority}
    />
  )
}
