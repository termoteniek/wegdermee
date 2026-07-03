import { BrowserRouter, Routes, Route } from 'react-router-dom'

const routerBasename =
  import.meta.env.BASE_URL === '/'
    ? undefined
    : import.meta.env.BASE_URL.replace(/\/$/, '')
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { ContactPage } from './pages/ContactPage'
import { RommelophaaldienstPage } from './pages/RommelophaaldienstPage'
import { VolledigeOntruimingPage } from './pages/VolledigeOntruimingPage'
import { WerfOpruimingPage } from './pages/WerfOpruimingPage'
import { KleineVerhuizingenPage } from './pages/KleineVerhuizingenPage'
import { TransportPage } from './pages/TransportPage'

function App() {
  return (
    <BrowserRouter basename={routerBasename}>
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
      </Routes>
    </BrowserRouter>
  )
}

export default App
