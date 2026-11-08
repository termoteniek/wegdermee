import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'

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
import { VerhuizingenPage } from './pages/VerhuizingenPage'
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
            <Layout showCta={false}>
              <ContactPage />
            </Layout>
          }
        />
        <Route
          path="/diensten/rommelophaaldienst"
          element={
            <Layout showCta={false}>
              <RommelophaaldienstPage />
            </Layout>
          }
        />
        <Route
          path="/diensten/volledige-ontruiming"
          element={
            <Layout showCta={false}>
              <VolledigeOntruimingPage />
            </Layout>
          }
        />
        <Route
          path="/diensten/werf-opruiming"
          element={
            <Layout showCta={false}>
              <WerfOpruimingPage />
            </Layout>
          }
        />
        <Route
          path="/diensten/verhuizingen"
          element={
            <Layout showCta={false}>
              <VerhuizingenPage />
            </Layout>
          }
        />
        <Route
          path="/diensten/kleine-verhuizingen"
          element={<Navigate to="/diensten/verhuizingen" replace />}
        />
        <Route
          path="/diensten/transport"
          element={
            <Layout showCta={false}>
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
