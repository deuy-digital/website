<script setup lang="ts">
import { computed, useTemplateRef } from 'vue'
import { useTranslation } from 'i18next-vue'
import ContactBlock from '../components/ContactBlock.vue'
import Reveal from '../components/Reveal.vue'
import ServiceVisual from '../components/ServiceVisual.vue'
import WorkCard from '../components/WorkCard.vue'
import { useLocale } from '../composables/useLocale'
import { useSEO } from '../composables/useSEO'
import { useScrollProgress } from '../composables/useScrollProgress'
import { SERVICES } from '../services'

const EMAIL = 'info@deuy.digital'

const { t } = useTranslation()
const { localePath } = useLocale()

const list = <T = string,>(key: string) => t(key, { returnObjects: true }) as T[]

// The statement lights up word by word as it scrolls through the viewport:
// useScrollProgress sets --p on the section, each word carries its index.
const statementWords = computed(() => t('story.statement').split(' '))
useScrollProgress(useTemplateRef<HTMLElement>('statement'))

const steps = computed(() => list<{ title: string; text: string }>('story.approach.steps'))
const values = computed(() => list<{ word: string; text: string }>('story.approach.values'))

useSEO({ key: 'seo.home', path: '/' })
</script>

<template>
  <section class="hero">
    <p class="eyebrow hero-eyebrow">{{ t('hero.eyebrow') }}</p>
    <h1 class="hero-title">{{ t('hero.tagline') }}</h1>
    <p class="hero-sub">{{ t('hero.subtitle') }}</p>
    <div class="hero-actions">
      <a class="cta" :href="`mailto:${EMAIL}`">{{ t('hero.cta') }}</a>
      <a class="link-more" href="#work">
        {{ t('hero.secondary') }}
        <span aria-hidden="true">›</span>
      </a>
    </div>
  </section>

  <section ref="statement" class="statement" :style="{ '--n': statementWords.length }">
    <p>
      <span
        v-for="(word, i) in statementWords"
        :key="i"
        class="statement-word"
        :style="{ '--i': i }"
      >{{ word + ' ' }}</span>
    </p>
  </section>

  <section id="services" class="section">
    <Reveal class="section-head">
      <p class="eyebrow">{{ t('services.heading') }}</p>
      <h2 class="section-title">{{ t('services.title') }}</h2>
      <p class="section-sub">{{ t('services.intro') }}</p>
    </Reveal>
    <div class="chapters">
      <Reveal v-for="service in SERVICES" :key="service.id" class="reveal-scale">
        <RouterLink :to="localePath(service.path)" class="chapter">
          <div class="chapter-text">
            <p class="eyebrow">{{ t(`services.items.${service.id}.name`) }}</p>
            <h3>{{ t(`services.items.${service.id}.headline`) }}</h3>
            <p>{{ t(`services.items.${service.id}.summary`) }}</p>
            <span class="link-more">
              {{ t('services.more') }}
              <span aria-hidden="true">›</span>
            </span>
          </div>
          <ServiceVisual :id="service.id" />
        </RouterLink>
      </Reveal>
    </div>
  </section>

  <section id="work" class="section">
    <Reveal class="section-head">
      <p class="eyebrow">{{ t('work.heading') }}</p>
      <h2 class="section-title">{{ t('work.title') }}</h2>
      <p class="section-sub">{{ t('work.intro') }}</p>
    </Reveal>
    <Reveal class="work-grid reveal-scale">
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

  <section class="section">
    <Reveal class="section-head">
      <p class="eyebrow">{{ t('story.approach.eyebrow') }}</p>
      <h2 class="section-title">{{ t('story.approach.title') }}</h2>
    </Reveal>
    <Reveal>
      <ol class="steps">
        <li v-for="(step, i) in steps" :key="i">
          <span class="step-number" aria-hidden="true">{{ i + 1 }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </li>
      </ol>
    </Reveal>
    <Reveal class="values reveal-scale">
      <div v-for="value in values" :key="value.word" class="value">
        <p class="value-word">{{ value.word }}</p>
        <p>{{ value.text }}</p>
      </div>
    </Reveal>
  </section>

  <ContactBlock :heading="t('services.cta.heading')" :body="t('services.cta.body')" />
</template>
