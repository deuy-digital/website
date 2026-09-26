import { Link } from 'react-router-dom'
import { Trans, useTranslation } from 'react-i18next'
import { useSEO } from '../hooks/useSEO'
import { useConsent } from '../hooks/useConsent'
import { isAnalyticsConfigured } from '../lib/analytics'

// Public opt-out URL (/cookie-einstellungen), linked from the footer on every
// page, the cookie banner and /datenschutz. Withdrawing must be as easy as
// giving consent (Art. 7 Abs. 3 DSGVO).
export function CookieSettings() {
  const { t } = useTranslation()
  const [consent, setConsent] = useConsent()
  const configured = isAnalyticsConfigured()

  useSEO({
    title: t('seo.cookies.title'),
    description: t('seo.cookies.description'),
    path: '/cookie-einstellungen',
  })

  const statusKey =
    consent === 'granted'
      ? 'cookies.settings.status.granted'
      : consent === 'denied'
        ? 'cookies.settings.status.denied'
        : 'cookies.settings.status.undecided'

  return (
    <section className="legal">
      <Link to="/" className="legal-back">
        {t('legal.back')}
      </Link>

      <h1>{t('cookies.settings.title')}</h1>
      <p className="legal-subtitle">{t('cookies.settings.subtitle')}</p>

      <h2>{t('cookies.settings.necessary.title')}</h2>
      <p>{t('cookies.settings.necessary.body')}</p>

      <h2>{t('cookies.settings.analytics.title')}</h2>
      {configured ? (
        <>
          <p>{t('cookies.settings.analytics.body')}</p>
          <p className="cookie-status" role="status">
            {t(statusKey)}
          </p>
          <div className="cookie-actions cookie-actions-inline">
            <button
              type="button"
              className="cookie-button"
              onClick={() => setConsent('granted')}
              disabled={consent === 'granted'}
            >
              {t('cookies.settings.accept')}
            </button>
            <button
              type="button"
              className="cookie-button"
              onClick={() => setConsent('denied')}
              disabled={consent === 'denied'}
            >
              {t('cookies.settings.reject')}
            </button>
          </div>
          <p>{t('cookies.settings.analytics.note')}</p>
        </>
      ) : (
        <p>{t('cookies.settings.analytics.none')}</p>
      )}

      <p>
        <Trans i18nKey="cookies.settings.moreInfo" components={{ privacyLink: <Link to="/datenschutz" /> }} />
      </p>
    </section>
  )
}

export default CookieSettings
