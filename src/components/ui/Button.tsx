import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  className?: string
  onClick?: () => void
}

const variants = {
  primary:
    'bg-accent text-white hover:bg-accent-hover shadow-[4px_4px_0_0_#0c0c0c] hover:shadow-[2px_2px_0_0_#0c0c0c] hover:translate-x-[2px] hover:translate-y-[2px]',
  outline:
    'border-2 border-current bg-transparent hover:bg-ink hover:text-cream hover:border-ink',
  ghost: 'bg-white/10 text-white border border-white/25 hover:bg-white/20',
}

function isInternalRoute(href: string) {
  return href.startsWith('/') && !href.startsWith('//')
}

export function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center px-8 py-3.5 font-display text-lg font-bold uppercase tracking-wide transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${variants[variant]} ${className}`

  if (isInternalRoute(href)) {
    return (
      <Link to={href} onClick={onClick} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} onClick={onClick} className={classes}>
      {children}
    </a>
  )
}
