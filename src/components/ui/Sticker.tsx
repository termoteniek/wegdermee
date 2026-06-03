import type { ReactNode } from 'react'

type StickerProps = {
  children: ReactNode
  variant?: 'lime' | 'orange' | 'pink' | 'cyan'
  className?: string
  rotate?: number
}

const variants = {
  lime: 'sticker text-ink',
  orange: 'sticker-orange',
  pink: 'sticker-pink',
  cyan: 'border-[3px] border-ink bg-cyan text-ink shadow-[5px_5px_0_0_#0a0a0a]',
}

export function Sticker({
  children,
  variant = 'lime',
  className = '',
  rotate = -3,
}: StickerProps) {
  return (
    <span
      className={`inline-block px-3 py-1 font-display text-xs uppercase sm:text-sm ${variants[variant]} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  )
}
