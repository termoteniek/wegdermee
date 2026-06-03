import type { ReactNode } from 'react'

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  className?: string
  onClick?: () => void
}

const variants = {
  primary:
    'bg-navy text-white hover:bg-navy-deep border border-navy',
  outline:
    'border border-ink/30 bg-transparent text-ink hover:border-navy hover:text-navy',
  ghost:
    'border border-white/30 bg-white/5 text-white hover:bg-white/10',
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
      className={`inline-flex items-center justify-center rounded-sm px-7 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
