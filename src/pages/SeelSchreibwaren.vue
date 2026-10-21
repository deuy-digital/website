<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { useLocale } from '../composables/useLocale'
import { useSEO } from '../composables/useSEO'
import Reveal from '../components/Reveal.vue'

const EMAIL = 'info@deuy.digital'
const SITE = 'https://seel-schreibwaren.de/'

const { t } = useTranslation()
const { localePath } = useLocale()

// Arrays live in the translation files (work.seel.*.items); returnObjects
// hands them back as-is instead of stringifying them.
const list = (key: string) => t(key, { returnObjects: true }) as string[]
const timeline = () => t('work.seel.timeline.items', { returnObjects: true }) as { year: string; text: string }[]

useSEO({ key: 'seo.work.seel', path: '/work/seel-schreibwaren' })
</script>

<template>
  <article class="case">
    <RouterLink :to="localePath('/')" class="legal-back">
      {{ t('work.back') }}
    </RouterLink>

    <header class="case-header">
      <h1>{{ t('work.seel.name') }}</h1>
      <p class="case-subtitle">{{ t('work.seel.subtitle') }}</p>
    </header>

    <Reveal>
      <div class="work-shot">
        <img
          :src="'/work/seel-schreibwaren.jpg'"
          width="1200"
          height="583"
          :alt="t('work.seel.name')"
        />
      </div>
    </Reveal>

    <Reveal>
      <dl class="case-facts">
        <div>
          <dt>{{ t('work.facts.client') }}</dt>
          <dd>{{ t('work.seel.name') }}, {{ t('work.seel.city') }}</dd>
        </div>
        <div>
          <dt>{{ t('work.facts.industry') }}</dt>
          <dd>{{ t('work.seel.industry') }}</dd>
        </div>
        <div>
          <dt>{{ t('work.facts.since') }}</dt>
          <dd>{{ t('work.seel.since') }}</dd>
        </div>
        <div>
          <dt>{{ t('work.facts.site') }}</dt>
          <dd><a :href="SITE" target="_blank" rel="noopener">seel-schreibwaren.de</a></dd>
        </div>
      </dl>
      <ul class="work-tags">
        <li v-for="tag in list('work.seel.tags')" :key="tag">{{ tag }}</li>
      </ul>
    </Reveal>

    <Reveal>
      <h2>{{ t('work.seel.client.heading') }}</h2>
      <p>{{ t('work.seel.client.body') }}</p>
    </Reveal>

    <Reveal>
      <h2>{{ t('work.seel.built.heading') }}</h2>
      <ul>
        <li v-for="item in list('work.seel.built.items')" :key="item">{{ item }}</li>
      </ul>
    </Reveal>

    <Reveal>
      <h2>{{ t('work.seel.schoolList.heading') }}</h2>
      <p v-for="(paragraph, i) in list('work.seel.schoolList.paragraphs')" :key="i">{{ paragraph }}</p>
    </Reveal>

    <Reveal>
      <h2>{{ t('work.seel.hosting.heading') }}</h2>
      <p>{{ t('work.seel.hosting.body') }}</p>
    </Reveal>

    <Reveal>
      <h2>{{ t('work.seel.timeline.heading') }}</h2>
      <ol class="case-timeline">
        <li v-for="(entry, i) in timeline()" :key="i">
          <span class="case-year">{{ entry.year }}</span>
          <span>{{ entry.text }}</span>
        </li>
      </ol>
      <a class="case-visit" :href="SITE" target="_blank" rel="noopener">{{ t('work.visit') }} ↗</a>
    </Reveal>

    <Reveal>
      <div class="case-cta">
        <h2>{{ t('work.cta.heading') }}</h2>
        <p>{{ t('work.cta.body') }}</p>
        <a class="cta" :href="`mailto:${EMAIL}`">{{ t('work.cta.button') }}</a>
      </div>
    </Reveal>
  </article>
</template>
