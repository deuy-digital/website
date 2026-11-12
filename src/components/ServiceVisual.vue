<script setup lang="ts">
// Decorative product-style mock-up for a service chapter on the home page.
// Pure HTML/CSS (styles in App.css), hidden from assistive tech.
import { useTranslation } from 'i18next-vue'
import type { ServiceId } from '../services'

defineProps<{ id: ServiceId }>()

const { t } = useTranslation()

const ROWS = [
  { width: '62%', status: 'new' },
  { width: '48%', status: 'progress' },
  { width: '70%', status: 'done' },
  { width: '54%', status: 'done' },
] as const

const DOC_LINES = ['92%', '78%', '85%', '60%', '88%', '72%', '40%']
</script>

<template>
  <div class="visual" :class="`visual-${id}`" aria-hidden="true">
    <!-- Custom software: an internal tool with incoming requests -->
    <div v-if="id === 'custom'" class="mock mock-app">
      <div class="mock-bar">
        <i /><i /><i />
        <span>{{ t('story.mock.custom.title') }}</span>
      </div>
      <ul class="mock-rows">
        <li v-for="(row, i) in ROWS" :key="i">
          <span class="mock-dot" />
          <span class="mock-line" :style="{ width: row.width }" />
          <span class="mock-pill" :class="`is-${row.status}`">
            {{ t(`story.mock.custom.${row.status}`) }}
          </span>
        </li>
      </ul>
    </div>

    <!-- E-commerce: an ordering flow on a phone -->
    <div v-else-if="id === 'ecommerce'" class="mock mock-order">
      <p class="mock-title">{{ t('story.mock.ecommerce.title') }}</p>
      <div class="mock-upload">
        <span class="mock-check">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <path d="m5 12.5 4.5 4.5L19 7.5" />
          </svg>
        </span>
        <span>
          <strong>{{ t('story.mock.ecommerce.file') }}</strong>
          <small>{{ t('story.mock.ecommerce.uploaded') }}</small>
        </span>
      </div>
      <div class="mock-seg">
        <span class="is-on">{{ t('story.mock.ecommerce.pickup') }}</span>
        <span>{{ t('story.mock.ecommerce.delivery') }}</span>
      </div>
      <div class="mock-button">{{ t('story.mock.ecommerce.send') }}</div>
    </div>

    <!-- AI: a document with the key details extracted -->
    <div v-else class="mock-ai">
      <div class="mock mock-doc">
        <p class="mock-title">{{ t('story.mock.ai.file') }}</p>
        <span
          v-for="(width, i) in DOC_LINES"
          :key="i"
          class="mock-line"
          :class="{ 'is-marked': i === 1 || i === 4 }"
          :style="{ width }"
        />
      </div>
      <dl class="mock mock-fields">
        <div v-for="field in ['parties', 'term', 'notice']" :key="field">
          <dt>{{ t(`story.mock.ai.${field}`) }}</dt>
          <dd>{{ t(`story.mock.ai.${field}Value`) }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>
