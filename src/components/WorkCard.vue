<script setup lang="ts">
// One card in the "Selected work" / "Our product" sections: a browser-framed
// screenshot plus name, meta line, summary and tags. Links internally (`to`)
// or externally (`href`).
defineProps<{
  to?: string
  href?: string
  image: string
  name: string
  meta: string
  summary: string
  tags: string[]
  cta: string
}>()
</script>

<template>
  <component
    :is="href ? 'a' : 'RouterLink'"
    :to="href ? undefined : to"
    :href="href"
    :target="href ? '_blank' : undefined"
    :rel="href ? 'noopener' : undefined"
    class="work-card"
  >
    <div class="work-shot">
      <img :src="image" width="1200" height="583" loading="lazy" :alt="name" />
    </div>
    <div class="work-body">
      <p class="work-meta">{{ meta }}</p>
      <h3>{{ name }}</h3>
      <p class="work-summary">{{ summary }}</p>
      <ul class="work-tags">
        <li v-for="tag in tags" :key="tag">{{ tag }}</li>
      </ul>
      <span class="work-more">{{ cta }} {{ href ? '↗' : '→' }}</span>
    </div>
  </component>
</template>
