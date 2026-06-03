import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { Button } from './ui/Button'
import { Sticker } from './ui/Sticker'

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
    setScrolled(y > 40)
  })

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'border-b-[3px] border-ink bg-lime shadow-[0_4px_0_0_#0a0a0a]'
          : 'bg-transparent'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#" className="relative z-10 flex shrink-0 items-center gap-3">
          <img
            src="/logo.png"
            alt="wegdermee"
            className={`h-11 w-auto transition-all sm:h-12 ${
              scrolled ? '' : 'brightness-0 invert drop-shadow-[2px_2px_0_#0a0a0a]'
            }`}
          />
          {!scrolled && (
            <Sticker variant="pink" rotate={6} className="hidden sm:inline-block !text-[10px]">
              Nieuw!
            </Sticker>
          )}
        </a>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Hoofdnavigatie"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-display text-sm uppercase tracking-wide transition-colors ${
                scrolled
                  ? 'text-ink hover:text-accent'
                  : 'text-white hover:text-lime'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            href="#contact"
            variant={scrolled ? 'primary' : 'lime'}
            className="!px-5 !py-2.5 !text-sm"
          >
            Let&apos;s go →
          </Button>
        </div>

        <button
          type="button"
          className={`relative z-10 inline-flex flex-col gap-1.5 border-[3px] p-2.5 transition-colors ${
            scrolled
              ? 'border-ink bg-paper hover:bg-lime'
              : 'border-white bg-ink/40 hover:bg-lime hover:border-ink [&_span]:bg-white hover:[&_span]:bg-ink'
          }`}
          aria-expanded={open}
          aria-label={open ? 'Menu sluiten' : 'Menu openen'}
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block h-1 w-7 bg-ink transition-transform ${open ? 'translate-y-2.5 rotate-45' : ''}`}
          />
          <span className={`block h-1 w-7 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span
            className={`block h-1 w-7 bg-ink transition-transform ${open ? '-translate-y-2.5 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {open && (
        <motion.nav
          className="border-t-[3px] border-ink bg-lime lg:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        >
          <ul className="flex flex-col gap-1 px-5 py-6">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 font-display text-2xl uppercase text-ink transition-colors hover:text-accent"
                  style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
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
