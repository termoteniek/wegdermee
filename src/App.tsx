import { BrowserRouter, Routes, Route } from 'react-router-dom'

const routerBasename =
  import.meta.env.BASE_URL === '/'
    ? undefined
    : import.meta.env.BASE_URL.replace(/\/$/, '')
import { Layout } from './components/Layout'
import { PageMeta } from './components/PageMeta'
import { HomePage } from './pages/HomePage'
import { ContactPage } from './pages/ContactPage'
import { RommelophaaldienstPage } from './pages/RommelophaaldienstPage'
import { VolledigeOntruimingPage } from './pages/VolledigeOntruimingPage'
import { WerfOpruimingPage } from './pages/WerfOpruimingPage'
import { KleineVerhuizingenPage } from './pages/KleineVerhuizingenPage'
import { TransportPage } from './pages/TransportPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { AlgemeneVoorwaardenPage } from './pages/AlgemeneVoorwaardenPage'

function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <PageMeta />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <ContactPage />
            </Layout>
          }
        />
        <Route
          path="/diensten/rommelophaaldienst"
          element={
            <Layout>
              <RommelophaaldienstPage />
            </Layout>
          }
        />
        <Route
          path="/diensten/volledige-ontruiming"
          element={
            <Layout>
              <VolledigeOntruimingPage />
            </Layout>
          }
        />
        <Route
          path="/diensten/werf-opruiming"
          element={
            <Layout>
              <WerfOpruimingPage />
            </Layout>
          }
        />
        <Route
          path="/diensten/kleine-verhuizingen"
          element={
            <Layout>
              <KleineVerhuizingenPage />
            </Layout>
          }
        />
        <Route
          path="/diensten/transport"
          element={
            <Layout>
              <TransportPage />
            </Layout>
          }
        />
        <Route
          path="/privacy"
          element={
            <Layout lightHeader>
              <PrivacyPage />
            </Layout>
          }
        />
        <Route
          path="/algemene-voorwaarden"
          element={
            <Layout lightHeader>
              <AlgemeneVoorwaardenPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
