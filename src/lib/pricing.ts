export const PRICING_BASE_EX_VAT = 250
export const PRICING_BASE_INCL_VAT = 300
export const PRICING_BASE_WEIGHT_KG = 300
export const PRICING_EXTRA_PER_KG = 1.2
export const VAT_RATE = 0.21

export type PricingTier = {
  volumeM3: number
  weightKg: number
  priceExVat: number
  priceInclVat: number
}

export const pricingTiers: PricingTier[] = [
  { volumeM3: 4, weightKg: 300, priceExVat: 250, priceInclVat: 300 },
  { volumeM3: 6, weightKg: 450, priceExVat: 430, priceInclVat: 520 },
  { volumeM3: 8, weightKg: 600, priceExVat: 610, priceInclVat: 735 },
  { volumeM3: 10, weightKg: 750, priceExVat: 790, priceInclVat: 955 },
  { volumeM3: 15, weightKg: 1200, priceExVat: 1330, priceInclVat: 1610 },
  { volumeM3: 20, weightKg: 1500, priceExVat: 1690, priceInclVat: 2045 },
]

export const largePricingTier = {
  volumeLabel: '20+',
  weightLabel: '1500+',
  priceLabel: 'Te bespreken',
}

export function formatEuro(amount: number, decimals = 0): string {
  return new Intl.NumberFormat('nl-BE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amount)
}

export const HOURLY_RATES = [
  { people: 2, pricePerHour: 80 },
  { people: 3, pricePerHour: 115 },
  { people: 4, pricePerHour: 150 },
] as const

export const KM_RATE = 1
export const KM_FREE_THRESHOLD = 150
export const KM_FREE_AMOUNT = 50
export const REMORK_SURCHARGE = 30

/** Depot → depot distance cost: €1/km, from 150 km onwards 50 km free. */
export function calculateKmCost(km: number): number {
  if (km <= 0) return 0
  if (km >= KM_FREE_THRESHOLD) return Math.max(0, km - KM_FREE_AMOUNT) * KM_RATE
  return km * KM_RATE
}

export function getHourlyRate(people: number) {
  return HOURLY_RATES.find((rate) => rate.people === people) ?? null
}

export function calculateHourlyEstimate(people: number, km: number, withRemork = false) {
  const rate = getHourlyRate(people)
  if (!rate) return null

  const labour = rate.pricePerHour
  const kmCost = calculateKmCost(km)
  const remork = withRemork ? REMORK_SURCHARGE : 0

  return {
    labour,
    kmCost,
    remork,
    total: labour + kmCost + remork,
  }
}

export function calculatePriceExVat(weightKg: number): number {
  const extraKg = Math.max(0, weightKg - PRICING_BASE_WEIGHT_KG)
  return PRICING_BASE_EX_VAT + extraKg * PRICING_EXTRA_PER_KG
}

export function calculatePriceInclVat(weightKg: number): number {
  return Math.round(calculatePriceExVat(weightKg) * (1 + VAT_RATE))
}
