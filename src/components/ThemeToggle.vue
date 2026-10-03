<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import type { Theme } from '../composables/useTheme'
import SunIcon from './icons/SunIcon.vue'
import MoonIcon from './icons/MoonIcon.vue'
import SystemIcon from './icons/SystemIcon.vue'

defineProps<{ theme: Theme }>()
const emit = defineEmits<{ change: [theme: Theme] }>()

const { t } = useTranslation()

const OPTIONS = [
  { value: 'auto', icon: SystemIcon, labelKey: 'theme.auto' },
  { value: 'light', icon: SunIcon, labelKey: 'theme.light' },
  { value: 'dark', icon: MoonIcon, labelKey: 'theme.dark' },
] as const
</script>

<template>
  <nav class="theme-switch" :aria-label="t('theme.label')">
    <button
      v-for="option in OPTIONS"
      :key="option.value"
      type="button"
      :class="{ active: theme === option.value }"
      :aria-pressed="theme === option.value"
      :title="t(option.labelKey)"
      @click="emit('change', option.value)"
    >
      <component :is="option.icon" aria-hidden="true" />
      <span class="sr-only">{{ t(option.labelKey) }}</span>
    </button>
  </nav>
</template>
