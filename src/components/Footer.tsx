import { Link } from 'react-router-dom'
import { business } from '../lib/site'

const navigation = [
  { href: '/#diensten', label: 'Diensten' },
  { href: '/#waarom', label: 'Waarom' },
  { href: '/#te-werk', label: 'Hoe gaan we te werk' },
  { href: '/#regio', label: 'Regio' },
  { href: '/#over-ons', label: 'Over ons' },
  { href: '/contact', label: 'Contact' },
]

const services = [
  { href: '/diensten/rommelophaaldienst', label: 'Rommelophaaldienst' },
  { href: '/diensten/volledige-ontruiming', label: 'Volledige ontruiming' },
  { href: '/diensten/werf-opruiming', label: 'Werf opruiming' },
  { href: '/diensten/kleine-verhuizingen', label: 'Kleine verhuizingen' },
  { href: '/diensten/transport', label: 'Transport' },
]

const legalLinks = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/algemene-voorwaarden', label: 'Voorwaarden' },
]

const textLinkClassName =
  'inline-flex min-h-11 items-center text-sm leading-6 text-white underline-offset-4 transition-colors duration-200 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:min-h-8'

const legalLinkClassName =
  'inline-flex min-h-11 items-center text-sm text-white/70 underline-offset-4 transition-colors duration-200 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:min-h-0'

function formatVat(vatId: string) {
  const digits = vatId.replace(/\D/g, '')
  if (digits.length !== 10) return vatId
  return `BE ${digits.slice(0, 4)}.${digits.slice(4, 7)}.${digits.slice(7)}`
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
    >
      <path
        d="M4 10h12M12 6l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-5" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-5" fill="currentColor">
      <path d="M12.53.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  )
}

const socialLinkClassName =
  'inline-flex min-h-11 min-w-11 items-center text-white transition-colors duration-200 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:min-h-8 lg:min-w-8'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="overflow-x-clip bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start gap-8 py-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
          <h2 className="font-sans text-[clamp(2rem,4.6vw,4.15rem)] font-extrabold leading-[0.92] tracking-[-0.035em] text-white">
            Klaar om het
            <br />
            weg te halen?
          </h2>
          <Link
            to="/contact"
            className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Boek een ophaling
            <ArrowIcon />
          </Link>
        </div>

        <div className="relative border-t border-white/12">
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden @container"
            aria-hidden
          >
            <p className="absolute right-[-0.045em] bottom-[-0.22em] hidden select-none whitespace-nowrap font-sans text-[19.5cqw] font-extrabold leading-[0.72] tracking-[-0.075em] text-[#343434] lg:block">
              WegDerMee
            </p>
          </div>

          <div className="relative grid gap-10 py-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-4 lg:gap-8 lg:py-14">
            <div>
              <Link
                to="/"
                className="inline-flex min-h-11 items-center text-sm font-semibold leading-6 text-white underline-offset-4 transition-colors duration-200 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:min-h-0"
              >
                wegdermee
              </Link>
              <p className="mt-3 max-w-[16rem] text-sm leading-6 text-white/55">
                Inboedel en rommelophaal in Vlaanderen en Brussel.
              </p>
            </div>

            <nav aria-label="Navigatie">
              <h3 className="text-sm leading-6 text-white/55">Navigatie</h3>
              <ul className="mt-3">
                {navigation.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className={textLinkClassName}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Diensten">
              <h3 className="text-sm leading-6 text-white/55">Diensten</h3>
              <ul className="mt-3">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link to={service.href} className={textLinkClassName}>
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h3 className="text-sm leading-6 text-white/55">Contact</h3>
              <ul className="mt-3">
                <li>
                  <a href={`tel:${business.phone}`} className={textLinkClassName}>
                    {business.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${business.email}`} className={textLinkClassName}>
                    {business.email}
                  </a>
                </li>
                <li>
                  <p className="inline-flex min-h-11 items-center text-sm leading-6 text-white lg:min-h-8">
                    BTW {formatVat(business.vatId)}
                  </p>
                </li>
                <li className="flex">
                  <a
                    href={business.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className={socialLinkClassName}
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href={business.social.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className={socialLinkClassName}
                  >
                    <TikTokIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid gap-3 border-t border-white/12 py-6 text-sm text-white/55 sm:grid-cols-3 sm:items-center">
          <p>© {year} wegdermee</p>
          <nav aria-label="Juridisch" className="flex gap-6 sm:justify-center">
            {legalLinks.map((link) => (
              <Link key={link.href} to={link.href} className={legalLinkClassName}>
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="sm:text-right">
            Gemaakt door{' '}
            <a
              href="https://motea.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/70 underline-offset-4 transition-colors duration-200 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              MOTEA
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
