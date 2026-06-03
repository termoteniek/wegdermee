import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { WhyUs } from './components/WhyUs'
import { Region } from './components/Region'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Ga direct naar de hoofdinhoud
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <WhyUs />
        <Region />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
