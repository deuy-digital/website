<script setup lang="ts">
// The closing call to action shared by the home, service and case-study
// pages: a big headline, one line of text and the email address.
import Reveal from './Reveal.vue'

defineProps<{ heading: string; body: string }>()

const EMAIL = 'info@deuy.digital'
</script>

<template>
  <section id="contact" class="contact">
    <Reveal class="contact-inner">
      <h2>{{ heading }}</h2>
      <p>{{ body }}</p>
      <a class="email-link" :href="`mailto:${EMAIL}`">{{ EMAIL }}</a>
    </Reveal>
  </section>
</template>
