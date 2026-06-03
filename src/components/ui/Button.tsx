import type { ReactNode } from 'react'

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'punch' | 'outline' | 'ghost' | 'heat'
  size?: 'md' | 'lg'
  className?: string
  onClick?: () => void
}

const variants = {
  punch:
    'bg-punch text-ink shadow-[var(--shadow-brutal)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_0_#11100e]',
  heat: 'bg-heat text-paper shadow-[var(--shadow-brutal)] hover:bg-heat-hover hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_0_#11100e]',
  outline:
    'border-[3px] border-ink bg-transparent text-ink hover:bg-ink hover:text-paper',
  ghost: 'border-[3px] border-paper/40 bg-ink/20 text-paper hover:bg-paper hover:text-ink',
}

const sizes = {
  md: 'px-5 py-2.5 text-xs',
  lg: 'px-8 py-3.5 text-sm',
}

export function Button({
  href,
  children,
  variant = 'punch',
  size = 'lg',
  className = '',
  onClick,
}: ButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center font-mono font-bold uppercase tracking-[0.15em] transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-punch ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  )
}
