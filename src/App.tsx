import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ScrollToTop } from './components/ScrollToTop'
import { Home } from './pages/Home'
import { Impressum } from './pages/Impressum'
import { AGB } from './pages/AGB'
import { Datenschutz } from './pages/Datenschutz'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="agb" element={<AGB />} />
          <Route path="datenschutz" element={<Datenschutz />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
