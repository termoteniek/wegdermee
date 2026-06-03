import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { Button } from './ui/Button'

const navLinks = [
  { href: '#diensten', label: 'Diensten' },
  { href: '#waarom', label: 'Waarom wij' },
  { href: '#regio', label: 'Regio' },
  { href: '#over-ons', label: 'Over ons' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 24)
  })

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-line bg-paper/95 shadow-[0_1px_0_rgba(26,35,50,0.06)] backdrop-blur-md'
          : 'border-transparent bg-paper/90 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a href="#" className="relative z-10 flex shrink-0 items-center gap-3">
          <img src="/logo.png" alt="wegdermee" className="h-10 w-auto sm:h-11" />
          <span className="hidden font-serif text-lg font-bold text-navy sm:inline">
            wegdermee
          </span>
        </a>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Hoofdnavigatie"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contact" className="!px-5 !py-2.5 !text-sm">
            Afspraak aanvragen
          </Button>
        </div>

        <button
          type="button"
          className="relative z-10 inline-flex flex-col gap-1.5 p-2 lg:hidden"
          aria-expanded={open}
          aria-label={open ? 'Menu sluiten' : 'Menu openen'}
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block h-0.5 w-6 bg-navy transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span className={`block h-0.5 w-6 bg-navy transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span
            className={`block h-0.5 w-6 bg-navy transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {open && (
        <motion.nav
          className="border-t border-line bg-paper px-5 py-6 lg:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 text-base font-medium text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <Button href="#contact" className="w-full" onClick={() => setOpen(false)}>
                Afspraak aanvragen
              </Button>
            </li>
          </ul>
        </motion.nav>
      )}
    </motion.header>
  )
}
