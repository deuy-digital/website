<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { useTranslation } from 'i18next-vue'
import Logo from '../components/Logo.vue'
import { useSEO } from '../composables/useSEO'
import { useReveal } from '../composables/useReveal'

const EMAIL = 'info@deuy.digital'

const { t } = useTranslation()
const contactVisible = useReveal(useTemplateRef<HTMLElement>('contact'))

useSEO({ key: 'seo.home', path: '/' })
</script>

<template>
  <section class="hero">
    <Logo class="hero-logo" />
    <h1 class="tagline">{{ t('hero.tagline') }}</h1>
    <p class="subtitle">{{ t('hero.subtitle') }}</p>
    <a class="cta" :href="`mailto:${EMAIL}`">
      {{ t('hero.cta') }}
    </a>
  </section>

  <section id="contact" ref="contact" :class="['contact', { 'is-visible': contactVisible }]">
    <h2>{{ t('contact.heading') }}</h2>
    <p>{{ t('contact.body') }}</p>
    <a class="email-link" :href="`mailto:${EMAIL}`">
      {{ EMAIL }}
    </a>
  </section>
</template>
