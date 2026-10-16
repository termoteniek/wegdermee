import { serviceShots, werkName } from '../data/werkImages'
import { ServiceBeforeAfter } from '../components/ServiceBeforeAfter'
import { ServiceHero } from '../components/ServiceHero'
import { ServicePricing } from '../components/ServicePricing'
import { ServiceClose, ServiceIntro } from '../components/ServiceSections'

const description = [
  'Puin, hout, isolatie, oude ramen of restmaterialen: wij halen alles weg zodat uw werf weer veilig en overzichtelijk is.',
  "Voor aannemers, particulieren en VZW's — snel ter plaatse, stipt en correct.",
]

const included = [
  'Ophaling bouw- en sloopafval',
  'U hoeft geen container te regelen',
  'Flexibele timing rond uw werfplanning',
  'Correcte afvoer via erkende kanalen',
]

const beforeAfterPairs = [
  { before: 'Werf/balken', after: 'Werf/hout-mos' },
]

export function WerfOpruimingPage() {
  return (
    <div className="flex flex-1 flex-col">
      <ServiceHero
        title="Werf opruiming"
        intro="Verbouwing of renovatie? Wij ruimen uw werf op zodat u verder kunt bouwen aan iets nieuws."
        image={werkName(serviceShots.werf.id)}
        imageAlt={serviceShots.werf.alt}
      />
      <ServiceIntro description={description} included={included} />
      <ServiceBeforeAfter pairs={beforeAfterPairs} />
      <ServicePricing />
      <ServiceClose title="Boek uw werf opruiming" />
    </div>
  )
}
