<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { useLocale } from '../composables/useLocale'
import { useSEO } from '../composables/useSEO'
import ContactBlock from '../components/ContactBlock.vue'
import Reveal from '../components/Reveal.vue'

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
    <header class="page-hero">
      <RouterLink :to="localePath('/')" class="legal-back">
        {{ t('work.back') }}
      </RouterLink>
      <p class="eyebrow">{{ t('work.labels.client') }} · {{ t('work.seel.industry') }}</p>
      <h1>{{ t('work.seel.name') }}</h1>
      <p class="case-subtitle">{{ t('work.seel.subtitle') }}</p>
    </header>

    <Reveal class="case-shot reveal-scale">
      <div class="work-shot">
        <img
          :src="'/work/seel-schreibwaren.jpg'"
          width="1200"
          height="583"
          :alt="t('work.seel.name')"
        />
      </div>
    </Reveal>

    <Reveal class="case-meta">
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

    <div class="rows">
      <Reveal class="row">
        <h2>{{ t('work.seel.client.heading') }}</h2>
        <div class="row-body">
          <p>{{ t('work.seel.client.body') }}</p>
        </div>
      </Reveal>

      <Reveal class="row">
        <h2>{{ t('work.seel.built.heading') }}</h2>
        <div class="row-body">
          <ul>
            <li v-for="item in list('work.seel.built.items')" :key="item">{{ item }}</li>
          </ul>
        </div>
      </Reveal>

      <Reveal class="row">
        <h2>{{ t('work.seel.schoolList.heading') }}</h2>
        <div class="row-body">
          <p v-for="(paragraph, i) in list('work.seel.schoolList.paragraphs')" :key="i">{{ paragraph }}</p>
        </div>
      </Reveal>

      <Reveal class="row">
        <h2>{{ t('work.seel.hosting.heading') }}</h2>
        <div class="row-body">
          <p>{{ t('work.seel.hosting.body') }}</p>
        </div>
      </Reveal>

      <Reveal class="row">
        <h2>{{ t('work.seel.timeline.heading') }}</h2>
        <div class="row-body">
          <ol class="case-timeline">
            <li v-for="(entry, i) in timeline()" :key="i">
              <span class="case-year">{{ entry.year }}</span>
              <span>{{ entry.text }}</span>
            </li>
          </ol>
          <a class="link-more case-visit" :href="SITE" target="_blank" rel="noopener">
            {{ t('work.visit') }}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </Reveal>
    </div>
  </article>

  <ContactBlock :heading="t('work.cta.heading')" :body="t('work.cta.body')" />
</template>
