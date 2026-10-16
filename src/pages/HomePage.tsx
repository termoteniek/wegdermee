import { Hero } from '../components/Hero'
import { TrustStrip } from '../components/TrustStrip'
import { Services } from '../components/Services'
import { OnsWerk } from '../components/OnsWerk'
import { WhyUs } from '../components/WhyUs'
import { Region } from '../components/Region'
import { About } from '../components/About'
import { HowWeWork } from '../components/HowWeWork'
import { KlantenFeedback } from '../components/KlantenFeedback'

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <OnsWerk />
      <WhyUs />
      <HowWeWork />
      <Region />
      <About />
      <KlantenFeedback />
    </>
  )
}
