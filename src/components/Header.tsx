import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { Button } from './ui/Button'

const navLinks = [
  { href: '#diensten', label: 'Diensten' },
  { href: '#waarom', label: 'Waarom' },
  { href: '#regio', label: 'Regio' },
  { href: '#over-ons', label: 'Over ons' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 60)
  })

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-line bg-cream/95 backdrop-blur-md'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a href="#" className="relative z-10 flex shrink-0 items-center">
          <img
            src="/logo.png"
            alt="wegdermee"
            className={`h-11 w-auto transition-all sm:h-12 ${scrolled ? '' : 'brightness-0 invert'}`}
          />
        </a>

        <nav
          className="hidden items-center gap-10 lg:flex"
          aria-label="Hoofdnavigatie"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-display text-sm font-semibold uppercase tracking-widest transition-colors ${
                scrolled
                  ? 'text-muted hover:text-ink'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            href="#contact"
            variant={scrolled ? 'primary' : 'ghost'}
            className="!px-6 !py-2.5 !text-base"
          >
            Boek ophaling
          </Button>
        </div>

        <button
          type="button"
          className={`relative z-10 inline-flex flex-col gap-1.5 p-2 lg:hidden ${scrolled ? '' : '[&_span]:bg-white'}`}
          aria-expanded={open}
          aria-label={open ? 'Menu sluiten' : 'Menu openen'}
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block h-0.5 w-7 bg-ink transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span className={`block h-0.5 w-7 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span
            className={`block h-0.5 w-7 bg-ink transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {open && (
        <motion.nav
          className="border-t border-line bg-cream px-5 py-6 lg:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 font-display text-xl font-bold uppercase tracking-wide text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <Button href="#contact" className="w-full" onClick={() => setOpen(false)}>
                Boek ophaling
              </Button>
            </li>
          </ul>
        </motion.nav>
      )}
    </motion.header>
  )
}
