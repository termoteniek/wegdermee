import { serviceShots, werkName } from '../data/werkImages'
import { HourlyServicePricing } from '../components/HourlyServicePricing'
import { ServiceBeforeAfter } from '../components/ServiceBeforeAfter'
import { ServiceHero } from '../components/ServiceHero'
import { ServiceClose, ServiceIntro } from '../components/ServiceSections'

const description = [
  'Grote aankoop bij IKEA, Brico, Hubo of een andere winkel — maar geen bestelwagen om het zelf te verplaatsen? Wij rijden voor u naar de winkel, laden alles in en brengen het veilig naar uw adres.',
  'Ideaal voor meubels, keukenapparatuur, bouwmaterialen of een grote bestelling die niet in uw eigen wagen past.',
]

const included = [
  'Ophaling bij winkel of leverancier',
  'Transport naar uw adres',
  'Hulp bij laden en lossen',
  'Flexibele planning op afspraak',
]

export function TransportPage() {
  return (
    <div className="flex flex-1 flex-col">
      <ServiceHero
        title="Transport"
        intro="Iets groots gekocht bij IKEA, Brico of een andere winkel? Wij halen het op en brengen het veilig naar u toe."
        image={werkName(serviceShots.transport.id)}
        imageAlt={serviceShots.transport.alt}
      />
      <ServiceIntro description={description} included={included} />
      <ServiceBeforeAfter />
      <HourlyServicePricing />
      <ServiceClose title="Boek uw transport" />
    </div>
  )
}
