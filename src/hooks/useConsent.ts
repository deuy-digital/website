import { useEffect, useState } from 'react'
import { onConsentChange, readConsent, writeConsent, type ConsentStatus } from '../lib/analytics'

/** Current analytics consent (null = not decided yet), kept in sync across components. */
export function useConsent(): [ConsentStatus | null, (status: ConsentStatus) => void] {
  const [status, setStatus] = useState<ConsentStatus | null>(() => readConsent())
  useEffect(() => onConsentChange(setStatus), [])
  return [status, writeConsent]
}
