<script setup lang="ts">
import { computed } from 'vue'
import { useTranslation } from 'i18next-vue'

// Renders a translation containing <name>text</name> placeholders, turning
// each into a RouterLink to links[name] (Vue counterpart of react-i18next's
// <Trans components={...}>).
const props = defineProps<{
  i18nKey: string
  links: Record<string, string>
}>()

const { t } = useTranslation()

const parts = computed(() =>
  t(props.i18nKey)
    .split(/(<\w+>.*?<\/\w+>)/)
    .filter(Boolean)
    .map((chunk) => {
      const match = chunk.match(/^<(\w+)>(.*?)<\/\1>$/)
      return match && props.links[match[1]]
        ? { text: match[2], to: props.links[match[1]] }
        : { text: chunk, to: undefined }
    }),
)
</script>

<template>
  <template v-for="(part, i) in parts" :key="i"><RouterLink v-if="part.to" :to="part.to">{{ part.text }}</RouterLink><template v-else>{{ part.text }}</template></template>
</template>
