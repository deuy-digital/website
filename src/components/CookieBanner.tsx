import { Link, useLocation } from 'react-router-dom'
import { Trans, useTranslation } from 'react-i18next'
import { isAnalyticsConfigured } from '../lib/analytics'
import { useConsent } from '../hooks/useConsent'

// Opt-in banner. "Accept" and "Reject" are deliberately identical in size,
// colour and placement: German courts/DSK treat a less prominent reject
// option as invalid consent. Non-modal, so Impressum/Datenschutz stay usable.
export function CookieBanner() {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const [consent, setConsent] = useConsent()

  if (!isAnalyticsConfigured() || consent !== null) return null
  // The settings page offers the same choice inline.
  if (pathname === '/cookie-einstellungen') return null

  return (
    <div className="cookie-banner" role="region" aria-label={t('cookies.banner.aria')}>
      <div className="cookie-banner-text">
        <p className="cookie-banner-title">{t('cookies.banner.title')}</p>
        <p>
          <Trans
            i18nKey="cookies.banner.body"
            components={{
              privacyLink: <Link to="/datenschutz" />,
              settingsLink: <Link to="/cookie-einstellungen" />,
            }}
          />
        </p>
      </div>
      <div className="cookie-actions">
        <button type="button" className="cookie-button" onClick={() => setConsent('denied')}>
          {t('cookies.banner.reject')}
        </button>
        <button type="button" className="cookie-button" onClick={() => setConsent('granted')}>
          {t('cookies.banner.accept')}
        </button>
      </div>
    </div>
  )
}

export default CookieBanner
