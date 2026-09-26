import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ScrollToTop } from './components/ScrollToTop'
import { Home } from './pages/Home'
import { Impressum } from './pages/Impressum'
import { AGB } from './pages/AGB'
import { Datenschutz } from './pages/Datenschutz'
import { CookieSettings } from './pages/CookieSettings'
import { Analytics } from './components/Analytics'
import { CookieBanner } from './components/CookieBanner'

function App() {
  return (
    <>
      <ScrollToTop />
      <Analytics />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="agb" element={<AGB />} />
          <Route path="datenschutz" element={<Datenschutz />} />
          <Route path="cookie-einstellungen" element={<CookieSettings />} />
        </Route>
      </Routes>
      <CookieBanner />
    </>
  )
}

export default App
