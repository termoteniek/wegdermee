export type VolumeOption = {
  value: string
  label: string
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

export const volumeOptions: VolumeOption[] = [
  { value: 'klein', label: 'Klein — enkele items / tot 2 m³' },
  { value: 'middel', label: 'Middel — 3 tot 5 m³' },
  { value: 'groot', label: 'Groot — 6 tot 10 m³' },
  { value: 'zeer-groot', label: 'Zeer groot — 10+ m³' },
]

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
