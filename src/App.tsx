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
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:border-[3px] focus:border-ink focus:bg-lime focus:px-4 focus:py-2 focus:font-display focus:uppercase focus:text-ink"
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
