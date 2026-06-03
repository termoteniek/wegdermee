import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { Button } from './ui/Button'

const navLinks = [
  { href: '#diensten', label: 'Diensten', num: '01' },
  { href: '#waarom', label: 'Waarom', num: '02' },
  { href: '#regio', label: 'Regio', num: '03' },
  { href: '#over-ons', label: 'Over ons', num: '04' },
  { href: '#contact', label: 'Contact', num: '05' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 50)
  })

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 border-b-[3px] transition-colors duration-200 ${
        scrolled ? 'border-ink bg-paper' : 'border-transparent bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto flex max-w-[1400px] items-stretch justify-between">
        <a
          href="#"
          className={`flex items-center gap-3 border-r-[3px] px-5 py-4 transition-colors sm:px-8 ${
            scrolled ? 'border-ink' : 'border-paper/30'
          }`}
        >
          <img
            src="/logo.png"
            alt="wegdermee"
            className={`h-10 w-auto sm:h-11 ${scrolled ? '' : 'brightness-0 invert'}`}
          />
          <span
            className={`hidden font-mono text-xs font-bold uppercase tracking-widest sm:inline ${
              scrolled ? 'text-ink' : 'text-paper'
            }`}
          >
            wegdermee.be
          </span>
        </a>

        <nav className="hidden items-stretch lg:flex" aria-label="Hoofdnavigatie">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group flex flex-col justify-center border-r-[3px] px-5 transition-colors last:border-r-0 ${
                scrolled
                  ? 'border-ink hover:bg-punch'
                  : 'border-paper/20 hover:bg-paper/10'
              }`}
            >
              <span
                className={`font-mono text-[10px] font-medium ${
                  scrolled ? 'text-muted' : 'text-paper/50'
                }`}
              >
                {link.num}
              </span>
              <span
                className={`font-display text-sm font-semibold ${
                  scrolled ? 'text-ink' : 'text-paper'
                }`}
              >
                {link.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="hidden items-center px-6 lg:flex">
          <Button
            href="#contact"
            variant={scrolled ? 'punch' : 'punch'}
            size="md"
            className={scrolled ? '' : '!shadow-[6px_6px_0_0_#c6ef00]'}
          >
            Boek ophaling
          </Button>
        </div>

        <button
          type="button"
          className={`flex flex-col justify-center gap-1.5 px-5 lg:hidden ${
            scrolled ? '' : '[&_span]:bg-paper'
          }`}
          aria-expanded={open}
          aria-label={open ? 'Menu sluiten' : 'Menu openen'}
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block h-[3px] w-8 bg-ink transition-transform ${open ? 'translate-y-[9px] rotate-45' : ''}`}
          />
          <span className={`block h-[3px] w-8 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span
            className={`block h-[3px] w-8 bg-ink transition-transform ${open ? '-translate-y-[9px] -rotate-45' : ''}`}
          />
        </button>
      </div>

      {open && (
        <motion.nav
          className="border-t-[3px] border-ink bg-paper lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <ul>
            {navLinks.map((link) => (
              <li key={link.href} className="border-b-[3px] border-ink last:border-b-0">
                <a
                  href={link.href}
                  className="flex items-center gap-4 px-6 py-4 transition-colors hover:bg-punch"
                  onClick={() => setOpen(false)}
                >
                  <span className="font-mono text-xs font-bold text-muted">{link.num}</span>
                  <span className="font-display text-xl font-bold">{link.label}</span>
                </a>
              </li>
            ))}
            <li className="p-4">
              <Button href="#contact" className="w-full justify-center" onClick={() => setOpen(false)}>
                Boek ophaling
              </Button>
            </li>
          </ul>
        </motion.nav>
      )}
    </motion.header>
  )
}
