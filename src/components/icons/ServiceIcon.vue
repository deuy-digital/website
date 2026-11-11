<script setup lang="ts">
import type { ServiceId } from '../../services'

defineProps<{ id: ServiceId }>()
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <!-- Code brackets -->
    <template v-if="id === 'custom'">
      <path d="m8 7-5 5 5 5" />
      <path d="m16 7 5 5-5 5" />
      <path d="m13.5 5-3 14" />
    </template>
    <!-- Shopping bag -->
    <template v-else-if="id === 'ecommerce'">
      <path d="M5 8h14l-1 12H6L5 8Z" />
      <path d="M9 8V7a3 3 0 0 1 6 0v1" />
    </template>
    <!-- Sparkles -->
    <template v-else>
      <path d="M10 4.5 11.6 9a2 2 0 0 0 1.2 1.2l4.7 1.8-4.7 1.8a2 2 0 0 0-1.2 1.2L10 19.5 8.4 15a2 2 0 0 0-1.2-1.2L2.5 12l4.7-1.8A2 2 0 0 0 8.4 9L10 4.5Z" />
      <path d="M18.5 3.5v4" />
      <path d="M16.5 5.5h4" />
    </template>
  </svg>
</template>
