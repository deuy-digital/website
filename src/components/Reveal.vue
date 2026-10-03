<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { useReveal } from '../composables/useReveal'

const isVisible = useReveal(useTemplateRef<HTMLDivElement>('el'))
</script>

<template>
  <div ref="el" :class="['reveal', { 'is-visible': isVisible }]">
    <slot />
  </div>
</template>
