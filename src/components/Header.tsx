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
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 40)
  })

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 bg-ink transition-all duration-200 ${
        scrolled ? 'border-b-[3px] border-lime shadow-[0_4px_0_0_#ccff00]' : ''
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
            className="h-11 w-auto brightness-0 invert drop-shadow-[2px_2px_0_#ccff00] transition-all sm:h-12"
          />
          <Sticker variant="pink" rotate={6} className="hidden sm:inline-block !text-[10px]">
            Nieuw!
          </Sticker>
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Hoofdnavigatie"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-sm uppercase tracking-wide text-white transition-colors hover:text-lime"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          href="#contact"
          variant="lime"
          className="!px-4 !py-2 !text-xs sm:!px-5 sm:!py-2.5 sm:!text-sm"
        >
          Let&apos;s go →
        </Button>
      </div>
    </motion.header>
  )
}
