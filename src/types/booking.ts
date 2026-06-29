import { pricingTiers } from '../lib/pricing'

export type VolumeOption = {
  value: string
  label: string
  priceInclVat: number
  volumeM3: number
  weightKg: number
  duration: string
}

export type ServiceOption = {
  value: string
  label: string
}

export const serviceOptions: ServiceOption[] = [
  { value: 'rommelophaaldienst', label: 'Rommelophaaldienst' },
  { value: 'volledige-ontruiming', label: 'Volledige ontruiming' },
  { value: 'werf-opruiming', label: 'Werf opruiming' },
  { value: 'kleine-verhuizingen', label: 'Kleine verhuizingen' },
  { value: 'transport', label: 'Transport' },
]

export const volumeOptions: VolumeOption[] = pricingTiers.map((tier) => ({
  value: `m3-${tier.volumeM3}`,
  label: `${tier.volumeM3} m³ · ${tier.weightKg} kg`,
  priceInclVat: tier.priceInclVat,
  volumeM3: tier.volumeM3,
  weightKg: tier.weightKg,
  duration: tier.duration,
}))

export const pricedServiceValues = new Set([
  'rommelophaaldienst',
  'volledige-ontruiming',
  'werf-opruiming',
])

export type BookingFormData = {
  voornaam: string
  familienaam: string
  email: string
  phone: string
  straatnaam: string
  huisnummer: string
  postcode: string
  gemeente: string
  service: string
  volume: string
  description: string
  date: string
  time: string
  privacyAccepted: boolean
}

export const emptyBookingForm: BookingFormData = {
  voornaam: '',
  familienaam: '',
  email: '',
  phone: '',
  straatnaam: '',
  huisnummer: '',
  postcode: '',
  gemeente: '',
  service: '',
  volume: '',
  description: '',
  date: '',
  time: '',
  privacyAccepted: false,
}
