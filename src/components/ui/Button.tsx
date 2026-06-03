import type { ReactNode } from 'react'

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'outline' | 'ghost' | 'lime'
  className?: string
  onClick?: () => void
}

const variants = {
  primary:
    'bg-accent text-white border-[3px] border-ink shadow-[6px_6px_0_0_#0a0a0a] hover:shadow-[3px_3px_0_0_#0a0a0a] hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-accent-hover',
  lime: 'bg-lime text-ink border-[3px] border-ink shadow-[6px_6px_0_0_#0a0a0a] hover:shadow-[3px_3px_0_0_#0a0a0a] hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-lime-dark',
  outline:
    'border-[3px] border-ink bg-transparent text-ink shadow-[4px_4px_0_0_#0a0a0a] hover:bg-ink hover:text-lime hover:shadow-[2px_2px_0_0_#0a0a0a] hover:translate-x-[2px] hover:translate-y-[2px]',
  ghost:
    'border-[3px] border-white/50 bg-white/10 text-white shadow-[4px_4px_0_0_#0a0a0a] hover:bg-lime hover:text-ink hover:border-ink',
}

export function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  onClick,
}: ButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center px-8 py-3.5 font-display text-base uppercase tracking-wide transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
