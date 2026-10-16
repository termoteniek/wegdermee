import { serviceShots, werkName } from '../data/werkImages'
import { HourlyServicePricing } from '../components/HourlyServicePricing'
import { ServiceBeforeAfter } from '../components/ServiceBeforeAfter'
import { ServiceHero } from '../components/ServiceHero'
import { ServiceClose, ServiceIntro } from '../components/ServiceSections'

const description = [
  'Niet elke verhuis hoeft groot te zijn. Wij helpen u met het verplaatsen van meubels, dozen, witgoed of enkele kamers — van adres A naar adres B.',
  'Handig bij een kleinere verhuis, studentenkamer, of wanneer u enkel de zwaarste items wilt laten vervoeren.',
]

const included = [
  'Transport van meubels en dozen',
  'Twee adressen (ophaling + aflevering)',
  'Zorgvuldige behandeling van uw spullen',
  'Flexibele planning op afspraak',
]

export function KleineVerhuizingenPage() {
  return (
    <div className="flex flex-1 flex-col">
      <ServiceHero
        title="Kleine verhuizingen"
        intro="Een paar meubels of dozen van A naar B — geen volledige verhuis, wel snel en correct geregeld."
        image={werkName(serviceShots.verhuizing.id)}
        imageAlt={serviceShots.verhuizing.alt}
      />
      <ServiceIntro description={description} included={included} />
      <ServiceBeforeAfter />
      <HourlyServicePricing />
      <ServiceClose title="Boek uw kleine verhuizing" />
    </div>
  )
}
