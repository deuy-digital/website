<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTranslation } from 'i18next-vue'
import { isAnalyticsConfigured } from '../lib/analytics'
import { useConsent } from '../composables/useConsent'
import { useLocale } from '../composables/useLocale'
import TransLinks from './TransLinks.vue'

// Opt-in banner. "Accept" and "Reject" are deliberately identical in size,
// colour and placement: German courts/DSK treat a less prominent reject
// option as invalid consent. Non-modal, so Impressum/Datenschutz stay usable.
const { t } = useTranslation()
const route = useRoute()
const { consent, ready, setConsent } = useConsent()
const { localePath } = useLocale()

// Client-only (`ready`): the stored choice is unknown at prerender time.
// The settings page offers the same choice inline.
const visible = computed(
  () => ready.value && isAnalyticsConfigured() && consent.value === null && route.path !== localePath('/cookie-einstellungen'),
)
</script>

<template>
  <div v-if="visible" class="cookie-banner" role="region" :aria-label="t('cookies.banner.aria')">
    <div class="cookie-banner-text">
      <p class="cookie-banner-title">{{ t('cookies.banner.title') }}</p>
      <p>
        <TransLinks
          i18n-key="cookies.banner.body"
          :links="{ privacyLink: localePath('/datenschutz'), settingsLink: localePath('/cookie-einstellungen') }"
        />
      </p>
    </div>
    <div class="cookie-actions">
      <button type="button" class="cookie-button" @click="setConsent('denied')">
        {{ t('cookies.banner.reject') }}
      </button>
      <button type="button" class="cookie-button" @click="setConsent('granted')">
        {{ t('cookies.banner.accept') }}
      </button>
    </div>
  </div>
</template>
