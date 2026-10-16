import { serviceShots, werkName } from '../data/werkImages'
import { ServiceBeforeAfter } from '../components/ServiceBeforeAfter'
import { ServiceHero } from '../components/ServiceHero'
import { ServicePricing } from '../components/ServicePricing'
import { ServiceClose, ServiceIntro } from '../components/ServiceSections'

const description = [
  'Oude meubels, defecte elektronica, groenafval of resten van een opruiming: wij nemen het allemaal mee. U hoeft niet te sorteren — alles mag door elkaar.',
  "Ideaal voor particulieren, VZW's of bedrijven die snel van overtollige spullen af willen.",
]

const included = [
  'Ophaling aan huis of op werf',
  'Sorteren niet vereist',
  'Correcte afvoer en verwerking',
  'Flexibele planning, 7 op 7 bereikbaar',
]

const beforeAfterPairs = [
  { before: 'VoorEnNa/Voor1', after: 'VoorEnNa/Na1' },
  { before: 'VoorEnNa/Voor2', after: 'VoorEnNa/Na2' },
  { before: 'VoorEnNa/Voor3', after: 'VoorEnNa/Na3' },
  { before: 'VoorEnNa/Voor4', after: 'VoorEnNa/Na4' },
]

export function RommelophaaldienstPage() {
  return (
    <div className="flex flex-1 flex-col">
      <ServiceHero
        title="Rommelophaaldienst"
        intro="Te veel spullen, te weinig plaats? Wij halen uw rommel op — groot of klein, u sorteert niet, wij regelen alles."
        image={werkName(serviceShots.rommel.id)}
        imageAlt={serviceShots.rommel.alt}
      />
      <ServiceIntro description={description} included={included} />
      <ServiceBeforeAfter pairs={beforeAfterPairs} />
      <ServicePricing />
      <ServiceClose title="Boek uw rommelophaaldienst" />
    </div>
  )
}
