import { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LogoMark } from './LogoMark'
import { ThemeToggle } from './ThemeToggle'
import { useTheme } from '../hooks/useTheme'
import '../App.css'

export function Layout() {
  const { t, i18n } = useTranslation()
  const { theme, setTheme } = useTheme()

  const currentLang = i18n.language.startsWith('de') ? 'de' : 'en'

  const changeLanguage = (lng: 'en' | 'de') => {
    i18n.changeLanguage(lng)
  }

  useEffect(() => {
    document.documentElement.lang = currentLang
  }, [currentLang])

  return (
    <div className="page">
      <header className="header">
        <Link to="/" className="brand">
          <LogoMark className="brand-mark" aria-hidden="true" />
          <span className="brand-name">Deuy Digital</span>
        </Link>
        <div className="header-controls">
          <ThemeToggle theme={theme} onChange={setTheme} />
          <nav className="lang-switch" aria-label="Language">
            <button
              type="button"
              className={currentLang === 'en' ? 'active' : ''}
              aria-pressed={currentLang === 'en'}
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
            <button
              type="button"
              className={currentLang === 'de' ? 'active' : ''}
              aria-pressed={currentLang === 'de'}
              onClick={() => changeLanguage('de')}
            >
              DE
            </button>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Deuy Digital UG (haftungsbeschränkt) &mdash; {t('footer.rights')}
        </p>
        <nav className="footer-nav" aria-label="Legal">
          <Link to="/impressum">{t('footer.impressum')}</Link>
          <Link to="/datenschutz">{t('footer.datenschutz')}</Link>
          <Link to="/agb">{t('footer.agb')}</Link>
        </nav>
      </footer>
    </div>
  )
}

export default Layout
