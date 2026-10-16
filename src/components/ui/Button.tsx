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
  primary: 'bg-accent text-white hover:bg-accent-hover',
  outline: 'border border-current bg-transparent hover:bg-white hover:text-ink',
  ghost: 'border border-white/35 bg-white/10 text-white hover:bg-white/20',
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
  const classes = `inline-flex min-h-11 cursor-pointer items-center justify-center px-6 py-3 font-display text-base font-semibold tracking-tight transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${variants[variant]} ${className}`

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
