import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import { WhyUs } from '../components/WhyUs'
import { Region } from '../components/Region'
import { About } from '../components/About'
import { HowWeWork } from '../components/HowWeWork'

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <HowWeWork />
      <Region />
      <About />
    </>
  )
}
