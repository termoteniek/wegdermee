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

export function calculatePriceExVat(weightKg: number): number {
  const extraKg = Math.max(0, weightKg - PRICING_BASE_WEIGHT_KG)
  return PRICING_BASE_EX_VAT + extraKg * PRICING_EXTRA_PER_KG
}

export function calculatePriceInclVat(weightKg: number): number {
  return Math.round(calculatePriceExVat(weightKg) * (1 + VAT_RATE))
}
