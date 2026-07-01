import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/Button'

const navLinks = [
  { href: '/#diensten', label: 'Diensten' },
  { href: '/#waarom', label: 'Waarom' },
  { href: '/#te-werk', label: 'Hoe gaan we te werk' },
  { href: '/#regio', label: 'Regio' },
  { href: '/#over-ons', label: 'Over ons' },
]

const logoParts = ['Weg', 'Der', 'Mee'] as const

function NavbarLogo({ scrolled }: { scrolled: boolean }) {
  return (
    <motion.span
      className="inline-flex font-display text-2xl font-bold uppercase tracking-wide"
      aria-hidden
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={{
        visible: { transition: { staggerChildren: 0.07, delayChildren: 0.35 } },
        hover: { transition: { staggerChildren: 0.04 } },
      }}
    >
      {logoParts.map((part) => (
        <motion.span
          key={part}
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible: { opacity: 1, y: 0 },
            hover: { y: -3, scale: 1.04 },
          }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className={scrolled ? 'text-inherit' : 'text-accent'}
        >
          {part}
        </motion.span>
      ))}
    </motion.span>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 60)
  })

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 ${
        open ? '' : 'transition-[background-color,backdrop-filter,border-color] duration-300'
      } ${
        open
          ? 'border-b border-white/10 bg-ink'
          : scrolled
            ? 'border-b border-white/50 bg-ink/70 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative z-50 mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link
          to="/"
          aria-label="Wegdermee — naar home"
          className={`group relative z-10 shrink-0 transition-colors duration-200 ${
            scrolled ? 'text-white/80 hover:text-white' : 'hover:text-accent-hover'
          }`}
        >
          <NavbarLogo scrolled={scrolled} />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Hoofdnavigatie">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="font-display text-sm font-semibold uppercase tracking-widest text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button
            href="/contact"
            variant={scrolled ? 'ghost' : 'primary'}
            className="!px-6 !py-2.5 !text-base"
          >
            Boek ophaling
          </Button>
        </div>

        <button
          type="button"
          className="relative z-10 inline-flex flex-col gap-1.5 p-2 lg:hidden [&_span]:bg-white"
          aria-expanded={open}
          aria-label={open ? 'Menu sluiten' : 'Menu openen'}
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block h-0.5 w-7 bg-white transition-transform duration-200 ease-out ${open ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-7 bg-white transition-opacity duration-200 ease-out ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-7 bg-white transition-transform duration-200 ease-out ${open ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      <nav
        className={`fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ink px-5 pb-8 pt-24 transition-[opacity,visibility] duration-200 ease-out will-change-[opacity] lg:hidden ${
          open ? 'visible opacity-100' : 'invisible pointer-events-none opacity-0'
        }`}
        aria-label="Mobiele navigatie"
        aria-hidden={!open}
      >
        <ul className="flex flex-1 flex-col items-center justify-center gap-1 text-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                tabIndex={open ? undefined : -1}
                className="block py-3 font-display text-xl font-bold uppercase tracking-wide text-white/90 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-4">
            <Button href="/contact" onClick={() => setOpen(false)}>
              Boek ophaling
            </Button>
          </li>
        </ul>
      </nav>
    </motion.header>
  )
}
