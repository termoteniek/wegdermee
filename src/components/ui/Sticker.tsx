import type { ReactNode } from 'react'

type StickerProps = {
  children: ReactNode
  rotate?: number
  variant?: 'punch' | 'paper' | 'heat'
  className?: string
}

const variants = {
  punch: 'bg-punch text-ink',
  paper: 'bg-paper text-ink',
  heat: 'bg-heat text-paper',
}

export function Sticker({
  children,
  rotate = -4,
  variant = 'punch',
  className = '',
}: StickerProps) {
  return (
    <span
      className={`inline-block border-[3px] border-ink px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest shadow-[4px_4px_0_0_#11100e] sm:text-sm ${variants[variant]} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  )
}
