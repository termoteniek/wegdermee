import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/Button'

const navLinks = [
  { href: '/#diensten', label: 'Diensten' },
  { href: '/#werk', label: 'Ons werk' },
  { href: '/#waarom', label: 'Waarom' },
  { href: '/#te-werk', label: 'Hoe gaan we te werk' },
  { href: '/#regio', label: 'Regio' },
  { href: '/#over-ons', label: 'Over ons' },
]

function Wordmark({ onDark }: { onDark: boolean }) {
  return (
    <span
      className={`font-display text-[1.7rem] font-bold leading-none tracking-tight ${
        onDark ? 'text-white' : 'text-ink'
      }`}
    >
      weg<span className="text-accent">dermee</span>
    </span>
  )
}

type HeaderProps = {
  lightHeader?: boolean
}

export function Header({ lightHeader = false }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  const onDark = !lightHeader && !scrolled && !open
  const solid = open || scrolled || lightHeader

  const navLinkClassName = onDark
    ? 'text-sm font-medium text-white/85 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent'
    : 'text-sm font-medium text-ink/80 transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent'

  const barClass = open
    ? 'border-b border-white/10 bg-ink'
    : solid
      ? 'border-b border-line bg-cream/95 backdrop-blur-md'
      : 'border-b border-transparent bg-transparent'

  return (
    <header className={`fixed inset-x-0 top-0 z-50 ${barClass}`}>
      <div className="relative z-50 mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Link
          to="/"
          aria-label="Wegdermee — naar home"
          className="relative z-10 shrink-0 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <Wordmark onDark={onDark || open} />
        </Link>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Hoofdnavigatie">
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href} className={navLinkClassName}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" className="!px-5 !py-2.5">
            Boek ophaling
          </Button>
        </div>

        <button
          type="button"
          className="relative z-10 inline-flex min-h-11 min-w-11 cursor-pointer flex-col items-center justify-center gap-1.5 xl:hidden"
          aria-expanded={open}
          aria-label={open ? 'Menu sluiten' : 'Menu openen'}
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block h-0.5 w-6 transition-transform duration-200 ${onDark || open ? 'bg-white' : 'bg-ink'} ${open ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 transition-opacity duration-200 ${onDark || open ? 'bg-white' : 'bg-ink'} ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 transition-transform duration-200 ${onDark || open ? 'bg-white' : 'bg-ink'} ${open ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      <nav
        className={`fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ink px-6 pb-10 pt-24 transition-opacity duration-200 lg:hidden ${
          open ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0'
        }`}
        aria-label="Mobiele navigatie"
        aria-hidden={!open}
      >
        <ul className="flex flex-1 flex-col justify-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                tabIndex={open ? undefined : -1}
                className="block min-h-11 py-2 font-display text-2xl font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-6">
            <Button href="/contact" onClick={() => setOpen(false)}>
              Boek ophaling
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
