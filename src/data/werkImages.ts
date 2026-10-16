export type WerkShot = {
  id: string
  alt: string
}

export function werkName(id: string) {
  return `Werk/${id}`
}

export const heroShots: WerkShot[] = [
  { id: '006', alt: 'Wegdermee-camionette met logo, geparkeerd langs de straat' },
  { id: '087', alt: 'Wegdermee-camionette voor een woning tijdens een opdracht' },
  { id: '050', alt: 'Geladen camionette aan een garage tijdens een ophaling' },
  { id: '040', alt: 'Medewerkers van wegdermee bij de bestelwagen' },
  { id: '016', alt: 'Medewerker langs de gebrande wegdermee-camionette' },
]

export const galleryShots: WerkShot[] = [
  { id: '020', alt: 'Twee medewerkers laden de camionette' },
  { id: '012', alt: 'Open laadruimte vol opgehaalde spullen' },
  { id: '013', alt: 'Ophalen van hout en rommel aan de camionette' },
  { id: '028', alt: 'Volgeladen laadruimte na een ophaalbeurt' },
  { id: '081', alt: 'Medewerker veegt een leeggehaalde ruimte schoon' },
  { id: '080', alt: 'Opruimen van een werf na de werken' },
  { id: '064', alt: 'Meubel op een steekwagen tijdens een kleine verhuizing' },
  { id: '070', alt: 'Meubelpaneel wordt naar de wagen gedragen' },
  { id: '044', alt: 'Transport van een krat naar de camionette' },
  { id: '076', alt: 'Kast wordt uit de woning gehaald' },
  { id: '024', alt: 'Meubel wordt via de trap naar buiten gebracht' },
  { id: '086', alt: 'Wegdermee-camionette klaar voor vertrek' },
]

export const aboutShot: WerkShot = {
  id: '084',
  alt: 'Siebe en Lars van wegdermee',
}

export const serviceShots = {
  rommel: { id: '012', alt: 'Rommelophaal: geladen laadruimte van de camionette' },
  ontruiming: { id: '020', alt: 'Volledige ontruiming: medewerkers laden de wagen' },
  werf: { id: '080', alt: 'Werf opruiming: vegen na de werken' },
  verhuizing: { id: '064', alt: 'Kleine verhuizing: meubel op een steekwagen' },
  transport: { id: '044', alt: 'Transport: krat wordt naar de camionette gedragen' },
} as const
