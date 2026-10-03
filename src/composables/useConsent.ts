import { onMounted, onUnmounted, ref } from 'vue'
import { onConsentChange, readConsent, writeConsent, type ConsentStatus } from '../lib/analytics'

/**
 * Current analytics consent (null = not decided yet), kept in sync across
 * components. Read after mount only: prerendered HTML can't know it, and the
 * first client render must match that HTML.
 */
export function useConsent() {
  const consent = ref<ConsentStatus | null>(null)
  const ready = ref(false)
  let unsubscribe: (() => void) | undefined

  onMounted(() => {
    consent.value = readConsent()
    ready.value = true
    unsubscribe = onConsentChange((status) => {
      consent.value = status
    })
  })
  onUnmounted(() => unsubscribe?.())

  return { consent, ready, setConsent: writeConsent }
}
