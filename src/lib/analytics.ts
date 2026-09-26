// Google Analytics 4 behind an explicit opt-in (§ 25 Abs. 1 TDDDG, Art. 6 Abs. 1 lit. a DSGVO).
//
// Nothing from Google is loaded, and no cookie is set, until the visitor
// clicks "Accept" in the CookieBanner or on /cookie-einstellungen. The
// decision itself lives in localStorage — strictly necessary to remember the
// choice, so it doesn't need consent (§ 25 Abs. 2 Nr. 2 TDDDG).
//
// Revoking sets Google's official `ga-disable-<ID>` opt-out flag, switches
// Consent Mode to "denied" and deletes the _ga cookies.
//
// When VITE_GA_MEASUREMENT_ID is empty (local dev) analytics is off entirely
// and no banner is shown.

export type ConsentStatus = 'granted' | 'denied'

interface StoredConsent {
  analytics: ConsentStatus
  /** ISO timestamp — proof of consent under Art. 7 Abs. 1 DSGVO. */
  decidedAt: string
  version: number
}

// Bump when the Datenschutz text for analytics changes materially so every
// visitor is asked again.
export const CONSENT_VERSION = 1
const STORAGE_KEY = 'deuy_consent'
const CHANGE_EVENT = 'deuy:consent-change'

type Gtag = (...args: unknown[]) => void

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: Gtag
    [key: `ga-disable-${string}`]: boolean | undefined
  }
}

export function getMeasurementId(): string {
  return import.meta.env.VITE_GA_MEASUREMENT_ID ?? ''
}

export function isAnalyticsConfigured(): boolean {
  return getMeasurementId() !== ''
}

export function readConsent(): ConsentStatus | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as Partial<StoredConsent>
    if (parsed.version !== CONSENT_VERSION) return null
    return parsed.analytics === 'granted' || parsed.analytics === 'denied' ? parsed.analytics : null
  } catch {
    return null
  }
}

export function writeConsent(status: ConsentStatus): void {
  const value: StoredConsent = {
    analytics: status,
    decidedAt: new Date().toISOString(),
    version: CONSENT_VERSION,
  }
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
  } catch {
    // Storage blocked (private mode etc.) — the choice still applies for
    // this page load, the banner just reappears next visit.
  }
  if (status === 'granted') enableAnalytics()
  else disableAnalytics()
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: status }))
}

export function onConsentChange(listener: (status: ConsentStatus) => void): () => void {
  const handler = (e: Event) => listener((e as CustomEvent<ConsentStatus>).detail)
  window.addEventListener(CHANGE_EVENT, handler)
  return () => window.removeEventListener(CHANGE_EVENT, handler)
}

let scriptInjected = false

export function enableAnalytics(): void {
  const id = getMeasurementId()
  if (!id) return

  window[`ga-disable-${id}`] = false

  if (!window.gtag) {
    window.dataLayer = window.dataLayer ?? []
    window.gtag = function gtag() {
      // gtag.js expects the raw `arguments` object, not an array.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments)
    }
    // Consent Mode v2: advertising signals stay denied permanently — we only
    // ever ask for (and only ever use) analytics.
    window.gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'granted',
    })
    window.gtag('js', new Date())
    window.gtag('config', id, {
      // Page views are sent manually on every route change (SPA).
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    })
  } else {
    window.gtag('consent', 'update', { analytics_storage: 'granted' })
  }

  if (!scriptInjected) {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`
    document.head.appendChild(script)
    scriptInjected = true
  }
}

export function disableAnalytics(): void {
  const id = getMeasurementId()
  if (!id) return
  window[`ga-disable-${id}`] = true
  window.gtag?.('consent', 'update', { analytics_storage: 'denied' })
  deleteGaCookies()
}

export function trackPageView(path: string): void {
  if (!isAnalyticsConfigured() || readConsent() !== 'granted' || !window.gtag) return
  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  })
}

// GA sets _ga and _ga_<container> on the top-most domain it can write to
// (".deuy.digital"), so try the bare host plus every parent domain.
function deleteGaCookies(): void {
  const names = document.cookie
    .split(';')
    .map((c) => c.split('=')[0]?.trim() ?? '')
    .filter((name) => name === '_ga' || name.startsWith('_ga_') || name === '_gid')

  const parts = window.location.hostname.split('.')
  const domains = ['']
  for (let i = 0; i < parts.length - 1; i++) {
    domains.push(`; domain=.${parts.slice(i).join('.')}`)
  }

  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`
    }
  }
}
