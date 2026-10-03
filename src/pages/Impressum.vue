<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { useLocale } from '../composables/useLocale'
import { useSEO } from '../composables/useSEO'
import Reveal from '../components/Reveal.vue'

const { t } = useTranslation()
const { localePath } = useLocale()

useSEO({ key: 'seo.impressum', path: '/impressum' })
</script>

<template>
  <section class="legal">
    <RouterLink :to="localePath('/')" class="legal-back">
      {{ t('legal.back') }}
    </RouterLink>

    <h1>Impressum</h1>

    <Reveal>
      <h2>Angaben gemäß § 5 TMG</h2>

      <h3>Anbieter</h3>
      <p>
        Deuy Digital UG (haftungsbeschränkt)
        <br />
        Im Wannental 23
        <br />
        74074 Heilbronn
        <br />
        Deutschland
      </p>

      <h3>Kontakt</h3>
      <p>
        Telefon: +49 155 11015136
        <br />
        E-Mail: info@deuy.digital
      </p>

      <h3>Handelsregister</h3>
      <p>
        Amtsgericht Stuttgart
        <br />
        HRB 807003
      </p>

      <h3>Geschäftsführung</h3>
      <p>Máximo Fassnacht</p>
    </Reveal>

    <Reveal>
      <h2>Umsatzsteuer-Identifikationsnummer</h2>
      <p>
        Gemäß § 27 a Umsatzsteuergesetz:
        <br />
        [DE XXX XXX XXX]
      </p>
    </Reveal>

    <Reveal>
      <h2>Aufsichtsbehörde für Datenschutz</h2>
      <p>
        Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg
        <br />
        Postfach 10 29 32, 70025 Stuttgart
        <br />
        E-Mail: poststelle@lfdi.bwl.de
      </p>
    </Reveal>

    <Reveal>
      <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </Reveal>

    <p class="legal-date">Stand: August 2026</p>
  </section>
</template>
