<script setup lang="ts">
import { computed } from 'vue'
import { useTranslation } from 'i18next-vue'
import { useLocale } from '../composables/useLocale'
import { useSEO } from '../composables/useSEO'
import { useConsent } from '../composables/useConsent'
import { isAnalyticsConfigured } from '../lib/analytics'
import TransLinks from '../components/TransLinks.vue'

// Public opt-out URL (/cookie-einstellungen), linked from the footer on every
// page, the cookie banner and /datenschutz. Withdrawing must be as easy as
// giving consent (Art. 7 Abs. 3 DSGVO).
const { t } = useTranslation()
const { localePath } = useLocale()
const { consent, setConsent } = useConsent()
const configured = isAnalyticsConfigured()

useSEO({ key: 'seo.cookies', path: '/cookie-einstellungen' })

const statusKey = computed(() =>
  consent.value === 'granted'
    ? 'cookies.settings.status.granted'
    : consent.value === 'denied'
      ? 'cookies.settings.status.denied'
      : 'cookies.settings.status.undecided',
)
</script>

<template>
  <section class="legal">
    <RouterLink :to="localePath('/')" class="legal-back">
      {{ t('legal.back') }}
    </RouterLink>

    <h1>{{ t('cookies.settings.title') }}</h1>
    <p class="legal-subtitle">{{ t('cookies.settings.subtitle') }}</p>

    <h2>{{ t('cookies.settings.necessary.title') }}</h2>
    <p>{{ t('cookies.settings.necessary.body') }}</p>

    <h2>{{ t('cookies.settings.analytics.title') }}</h2>
    <template v-if="configured">
      <p>{{ t('cookies.settings.analytics.body') }}</p>
      <p class="cookie-status" role="status">
        {{ t(statusKey) }}
      </p>
      <div class="cookie-actions cookie-actions-inline">
        <button
          type="button"
          class="cookie-button"
          :disabled="consent === 'granted'"
          @click="setConsent('granted')"
        >
          {{ t('cookies.settings.accept') }}
        </button>
        <button
          type="button"
          class="cookie-button"
          :disabled="consent === 'denied'"
          @click="setConsent('denied')"
        >
          {{ t('cookies.settings.reject') }}
        </button>
      </div>
      <p>{{ t('cookies.settings.analytics.note') }}</p>
    </template>
    <p v-else>{{ t('cookies.settings.analytics.none') }}</p>

    <p>
      <TransLinks i18n-key="cookies.settings.moreInfo" :links="{ privacyLink: localePath('/datenschutz') }" />
    </p>
  </section>
</template>
