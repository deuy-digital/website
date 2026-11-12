<script setup lang="ts">
import { computed } from 'vue'
import { useHead } from '@unhead/vue'
import { useTranslation } from 'i18next-vue'
import { useLocale } from '../composables/useLocale'
import { SITE_URL, useSEO } from '../composables/useSEO'
import ContactBlock from '../components/ContactBlock.vue'
import Reveal from '../components/Reveal.vue'
import ServiceVisual from '../components/ServiceVisual.vue'
import ServiceIcon from '../components/icons/ServiceIcon.vue'
import { SERVICES, type ServiceId } from '../services'

interface Section {
  heading: string
  paragraphs?: string[]
  items?: string[]
}

const EMAIL = 'info@deuy.digital'

// One component serves every service page, and vue-router reuses the instance
// when navigating between them — so everything below derives from the prop.
const props = defineProps<{ id: ServiceId }>()

const { t } = useTranslation()
const { localePath } = useLocale()

const service = computed(() => SERVICES.find((s) => s.id === props.id)!)
const referenceUrl = computed(() =>
  'referenceUrl' in service.value ? service.value.referenceUrl : undefined,
)
const others = computed(() => SERVICES.filter((s) => s.id !== props.id))
const base = computed(() => `services.items.${props.id}`)
const sections = computed(() => t(`${base.value}.sections`, { returnObjects: true }) as Section[])

useSEO({ key: () => `seo.services.${props.id}`, path: () => service.value.path })

useHead(
  computed(() => ({
    script: [
      {
        type: 'application/ld+json',
        key: 'service-ld',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: t(`${base.value}.title`),
          description: t(`seo.services.${props.id}.description`),
          url: `${SITE_URL}${localePath(service.value.path)}`,
          provider: { '@id': `${SITE_URL}/#organization` },
          areaServed: [
            { '@type': 'City', name: 'Heilbronn' },
            { '@type': 'AdministrativeArea', name: 'Heilbronn-Franken' },
          ],
        }),
      },
    ],
  })),
)
</script>

<template>
  <article class="case">
    <header class="page-hero page-hero-split">
      <div class="page-hero-text">
        <RouterLink :to="localePath('/')" class="legal-back">
          {{ t('work.back') }}
        </RouterLink>
        <p class="eyebrow">{{ t(`${base}.name`) }}</p>
        <h1>{{ t(`${base}.title`) }}</h1>
        <p class="case-subtitle">{{ t(`${base}.subtitle`) }}</p>
        <a class="cta" :href="`mailto:${EMAIL}`">{{ t('services.cta.button') }}</a>
      </div>
      <div class="page-hero-visual">
        <ServiceVisual :id="id" />
      </div>
    </header>

    <div class="rows">
      <Reveal v-for="section in sections" :key="section.heading" class="row">
        <h2>{{ section.heading }}</h2>
        <div class="row-body">
          <p v-for="(paragraph, i) in section.paragraphs" :key="i">{{ paragraph }}</p>
          <ul v-if="section.items">
            <li v-for="item in section.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </Reveal>
    </div>

    <Reveal class="reveal-scale">
      <div v-if="referenceUrl" class="reference">
        <h2>{{ t(`${base}.reference.heading`) }}</h2>
        <p>{{ t(`${base}.reference.body`) }}</p>
        <a class="link-more" :href="referenceUrl" target="_blank" rel="noopener">
          {{ t(`${base}.reference.link`) }}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div v-else class="reference">
        <h2>{{ t('services.reference.heading') }}</h2>
        <p>{{ t('services.reference.body') }}</p>
        <RouterLink class="link-more" :to="localePath('/work/seel-schreibwaren')">
          {{ t('services.reference.link') }}
          <span aria-hidden="true">›</span>
        </RouterLink>
      </div>
    </Reveal>

    <Reveal class="more">
      <h2>{{ t('services.otherHeading') }}</h2>
      <div class="services-grid">
        <RouterLink
          v-for="other in others"
          :key="other.id"
          :to="localePath(other.path)"
          class="service-card"
        >
          <span class="service-icon"><ServiceIcon :id="other.id" /></span>
          <h3>{{ t(`services.items.${other.id}.name`) }}</h3>
          <p>{{ t(`services.items.${other.id}.summary`) }}</p>
          <span class="service-more">
            {{ t('services.more') }}
            <span class="service-arrow" aria-hidden="true">›</span>
          </span>
        </RouterLink>
      </div>
    </Reveal>
  </article>

  <ContactBlock :heading="t('services.cta.heading')" :body="t('services.cta.body')" />
</template>
