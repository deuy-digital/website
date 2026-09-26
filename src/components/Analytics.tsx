import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { enableAnalytics, isAnalyticsConfigured, trackPageView } from '../lib/analytics'
import { useConsent } from '../hooks/useConsent'

// Loads GA only once consent is granted (either stored from an earlier visit
// or given just now) and sends a page_view per SPA route change.
export function Analytics() {
  const { pathname } = useLocation()
  const [consent] = useConsent()

  useEffect(() => {
    if (!isAnalyticsConfigured() || consent !== 'granted') return
    enableAnalytics()
    trackPageView(pathname)
  }, [pathname, consent])

  return null
}
