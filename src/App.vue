<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import CookieBanner from './components/CookieBanner.vue'
import { useConsent } from './composables/useConsent'
import { enableAnalytics, isAnalyticsConfigured, trackPageView } from './lib/analytics'

const route = useRoute()
const { consent } = useConsent()

onMounted(() => {
  // Loads GA only once consent is granted (either stored from an earlier
  // visit or given just now) and sends a page_view per SPA route change.
  watch(
    [() => route.path, consent],
    ([path, status]) => {
      if (!isAnalyticsConfigured() || status !== 'granted') return
      enableAnalytics()
      // unhead writes the new page's <title> in a setTimeout(0) queued
      // during render; queue behind it so page_title isn't the old page's.
      setTimeout(() => trackPageView(path))
    },
    { immediate: true, flush: 'post' },
  )
})
</script>

<template>
  <RouterView />
  <CookieBanner />
</template>
