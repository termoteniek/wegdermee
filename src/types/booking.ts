import { pricingTiers } from '../lib/pricing'

export type VolumeOption = {
  value: string
  label: string
  priceInclVat?: number
  volumeM3?: number
  weightKg?: number
  isLargeVolume?: boolean
}

export type ServiceOption = {
  value: string
  label: string
}

export type CrewOption = {
  value: string
  label: string
  people: number
  pricePerHour: number
}

export const serviceOptions: ServiceOption[] = [
  { value: 'rommelophaaldienst', label: 'Rommelophaaldienst' },
  { value: 'volledige-ontruiming', label: 'Volledige ontruiming' },
  { value: 'werf-opruiming', label: 'Werf opruiming' },
  { value: 'kleine-verhuizingen', label: 'Kleine verhuizingen' },
  { value: 'transport', label: 'Transport' },
]

export const volumeOptions: VolumeOption[] = [
  ...pricingTiers.map((tier) => ({
    value: `m3-${tier.volumeM3}`,
    label: `${tier.volumeM3} m³ · ${tier.weightKg} kg`,
    priceInclVat: tier.priceInclVat,
    volumeM3: tier.volumeM3,
    weightKg: tier.weightKg,
  })),
  {
    value: 'm3-20-plus',
    label: '20+ m³ · 1500+ kg',
    volumeM3: 20,
    weightKg: 1500,
    isLargeVolume: true,
  },
]

export const crewOptions: CrewOption[] = [
  { value: '2', label: '2 man', people: 2, pricePerHour: 80 },
  { value: '3', label: '3 man', people: 3, pricePerHour: 115 },
  { value: '4', label: '4 man', people: 4, pricePerHour: 150 },
]

export const largeVolumePriceMessage =
  'Gaat het over grote hoeveelheden, aarzel niet, bel ons gerust en wij komen gratis ter plaatse voor een op maat gemaakte offerte en de opties te bespreken.'

export const pricedServiceValues = new Set([
  'rommelophaaldienst',
  'volledige-ontruiming',
  'werf-opruiming',
])

export const hourlyServiceValues = new Set(['kleine-verhuizingen', 'transport'])

export const volumeExcludedServiceValues = new Set(['kleine-verhuizingen', 'transport'])

export function getServiceByLabel(serviceLabel: string) {
  return serviceOptions.find((option) => option.label === serviceLabel)
}

export function isVolumeSelectableForService(serviceLabel: string) {
  if (!serviceLabel.trim()) return false

  const service = getServiceByLabel(serviceLabel)
  if (!service) return false

  return !volumeExcludedServiceValues.has(service.value)
}

export function isHourlyService(serviceLabel: string) {
  const service = getServiceByLabel(serviceLabel)
  return service != null && hourlyServiceValues.has(service.value)
}

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
  crew: string
  startAddress: string
  deliveryAddress: string
  description: string
  date: string
  time: string
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
  crew: '',
  startAddress: '',
  deliveryAddress: '',
  description: '',
  date: '',
  time: '',
}
