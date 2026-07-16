export const SITE_URL = 'https://wegdermee.com'

export const business = {
  name: 'Wegdermee',
  legalName: 'Wegdermee',
  email: 'info@wegdermee.com',
  phone: '+32498438878',
  phoneDisplay: '+32 498 43 88 78',
  vatId: 'BE1039278883',
  regions: ['Oost-Vlaanderen', 'West-Vlaanderen', 'Antwerpen', 'Brussel'],
  social: {
    instagram: 'https://www.instagram.com/weg.der.mee/',
    tiktok: 'https://www.tiktok.com/@weg.der.mee',
  },
} as const

export type PageSeo = {
  title: string
  description: string
  path: string
}

const defaultDescription =
  'wegdermee — inboedels & rommelophaal in Oost-Vlaanderen, West-Vlaanderen, Antwerpen en Brussel. Snel, correct en volledig ontzorgd.'

export const defaultPageSeo: PageSeo = {
  title: 'wegdermee | Inboedel & rommelophaal in Vlaanderen',
  description: defaultDescription,
  path: '/',
}

export const pageSeoByPath: Record<string, PageSeo> = {
  '/': defaultPageSeo,
  '/contact': {
    title: 'Contact & afspraak maken | wegdermee',
    description:
      'Maak een afspraak bij wegdermee voor rommelophaal, ontruiming of transport. Bel +32 498 43 88 78 of mail info@wegdermee.com.',
    path: '/contact',
  },
  '/diensten/rommelophaaldienst': {
    title: 'Rommelophaaldienst | wegdermee',
    description:
      'Rommel ophalen aan huis zonder sorteren. wegdermee haalt oude meubels, elektronica en groenafval op in Vlaanderen en Brussel.',
    path: '/diensten/rommelophaaldienst',
  },
  '/diensten/volledige-ontruiming': {
    title: 'Volledige ontruiming | wegdermee',
    description:
      'Volledige ontruiming van woningen, appartementen en kantoren door wegdermee. Snel, zorgvuldig en volledig ontzorgd.',
    path: '/diensten/volledige-ontruiming',
  },
  '/diensten/werf-opruiming': {
    title: 'Werf opruiming | wegdermee',
    description:
      'Werf opruiming en afvalophaling op bouwplaatsen. wegdermee ruimt snel en correct op in Vlaanderen en Brussel.',
    path: '/diensten/werf-opruiming',
  },
  '/diensten/kleine-verhuizingen': {
    title: 'Kleine verhuizingen | wegdermee',
    description:
      'Kleine verhuizingen met wegdermee. Betrouwbaar transport van meubels en inboedel in Oost- en West-Vlaanderen, Antwerpen en Brussel.',
    path: '/diensten/kleine-verhuizingen',
  },
  '/diensten/transport': {
    title: 'Transport | wegdermee',
    description:
      'Transport van grote aankopen en inboedel door wegdermee. Snelle, zorgvuldige levering in Vlaanderen en Brussel.',
    path: '/diensten/transport',
  },
  '/privacy': {
    title: 'wegdermee | Privacyverklaring',
    description:
      'Privacyverklaring van wegdermee. Lees hoe wij uw persoonsgegevens verzamelen, gebruiken en beschermen.',
    path: '/privacy',
  },
  '/algemene-voorwaarden': {
    title: 'wegdermee | Algemene voorwaarden',
    description:
      'Algemene voorwaarden van wegdermee voor rommelophaal, ontruiming, werf opruiming, verhuizingen en transport.',
    path: '/algemene-voorwaarden',
  },
}

export function pageUrl(path: string) {
  if (path === '/') return SITE_URL
  return `${SITE_URL}${path}`
}

export function seoForPath(pathname: string): PageSeo {
  return pageSeoByPath[pathname] ?? defaultPageSeo
}
