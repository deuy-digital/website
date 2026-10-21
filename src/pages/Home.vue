<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { useTranslation } from 'i18next-vue'
import Logo from '../components/Logo.vue'
import Reveal from '../components/Reveal.vue'
import WorkCard from '../components/WorkCard.vue'
import { useLocale } from '../composables/useLocale'
import { useSEO } from '../composables/useSEO'
import { useReveal } from '../composables/useReveal'

const EMAIL = 'info@deuy.digital'

const { t } = useTranslation()
const { localePath } = useLocale()
const contactVisible = useReveal(useTemplateRef<HTMLElement>('contact'))

const list = (key: string) => t(key, { returnObjects: true }) as string[]

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

  <section id="work" class="work">
    <Reveal>
      <h2>{{ t('work.heading') }}</h2>
      <p class="work-intro">{{ t('work.intro') }}</p>
    </Reveal>
    <Reveal class="work-grid">
      <WorkCard
        :to="localePath('/work/seel-schreibwaren')"
        image="/work/seel-schreibwaren.jpg"
        :name="t('work.seel.name')"
        :meta="`${t('work.labels.client')} · ${t('work.seel.industry')}`"
        :summary="t('work.seel.summary')"
        :tags="list('work.seel.tags')"
        :cta="t('work.readMore')"
      />
      <WorkCard
        href="https://vertragbot.de/"
        image="/work/vertragbot.jpg"
        :name="t('product.vertragbot.name')"
        :meta="`${t('work.labels.product')} · ${t('product.vertragbot.meta')}`"
        :summary="t('product.vertragbot.summary')"
        :tags="list('product.vertragbot.tags')"
        :cta="t('product.vertragbot.cta')"
      />
    </Reveal>
  </section>

  <section id="contact" ref="contact" :class="['contact', { 'is-visible': contactVisible }]">
    <h2>{{ t('contact.heading') }}</h2>
    <p>{{ t('contact.body') }}</p>
    <a class="email-link" :href="`mailto:${EMAIL}`">
      {{ EMAIL }}
    </a>
  </section>
</template>
