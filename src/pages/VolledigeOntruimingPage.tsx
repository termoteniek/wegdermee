import { serviceShots, werkName } from '../data/werkImages'
import { ServiceBeforeAfter } from '../components/ServiceBeforeAfter'
import { ServiceHero } from '../components/ServiceHero'
import { ServicePricing } from '../components/ServicePricing'
import { ServiceClose, ServiceIntro } from '../components/ServiceSections'

const description = [
  'Woning, appartement, handelspand of magazijn: wij zorgen voor een complete leeghaling van A tot Z. Meubels, keukens en vloerbedekking — alles mag mee.',
  'Perfect bij verhuizing, verkoop van een pand of nalatenschap.',
]

const included = [
  'Volledige ontruiming van het pand',
  'Vaste en losse inboedel',
  'Eventuele kelder, zolder of garage',
  'Proper achtergelaten, klaar voor gebruik',
]

const beforeAfterPairs = [
  { before: 'Ontruiming/Voor1', after: 'Ontruiming/Na1', label: 'Raamhoek' },
  { before: 'Ontruiming/Voor2', after: 'Ontruiming/Na2', label: 'Tuinzijde' },
]

export function VolledigeOntruimingPage() {
  return (
    <div className="flex flex-1 flex-col">
      <ServiceHero
        title="Volledige ontruiming"
        intro="Moet een pand volledig leeg? Wij halen alles weg — van zolder tot kelder — zodat u verder kunt zonder zorgen."
        image={werkName(serviceShots.ontruiming.id)}
        imageAlt={serviceShots.ontruiming.alt}
      />
      <ServiceIntro description={description} included={included} />
      <ServiceBeforeAfter pairs={beforeAfterPairs} />
      <ServicePricing />
      <ServiceClose title="Boek uw volledige ontruiming" />
    </div>
  )
}
