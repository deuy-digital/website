<script setup lang="ts">
import { computed } from 'vue'
import { useHead } from '@unhead/vue'
import { useTranslation } from 'i18next-vue'
import { LANGUAGE_STORAGE_KEY, type Language } from '../i18n'
import LogoMark from './LogoMark.vue'
import ThemeToggle from './ThemeToggle.vue'
import { useLocale } from '../composables/useLocale'
import { SITE_URL } from '../composables/useSEO'
import { SERVICES } from '../services'
import { useTheme } from '../composables/useTheme'
import '../App.css'

const { t } = useTranslation()
const { theme, setTheme } = useTheme()
const { language, localePath, switchPath } = useLocale()

// The switch links to the same page in the other language. Remember the
// choice so the inline script in index.html sends the visitor there next time.
const rememberLanguage = (lng: Language) => {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lng)
  } catch {
    // Storage blocked — the switch still works for this visit.
  }
}

const PHONE = '+49 155 11015136'
const EMAIL = 'info@deuy.digital'

// Local-business structured data, on every page in the page's language.
// Service pages reference it by @id (see src/pages/ServicePage.vue).
useHead(
  computed(() => ({
    htmlAttrs: { lang: language.value },
    script: [
      {
        type: 'application/ld+json',
        key: 'organization-ld',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          '@id': `${SITE_URL}/#organization`,
          name: 'Deuy Digital',
          legalName: 'Deuy Digital UG (haftungsbeschränkt)',
          url: `${SITE_URL}${localePath('/')}`,
          logo: `${SITE_URL}/favicon.svg`,
          image: `${SITE_URL}/og-image.png`,
          email: EMAIL,
          telephone: PHONE.replace(/ /g, ''),
          description: t('seo.organization'),
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Im Wannental 23',
            postalCode: '74074',
            addressLocality: 'Heilbronn',
            addressRegion: 'BW',
            addressCountry: 'DE',
          },
          areaServed: [
            { '@type': 'City', name: 'Heilbronn' },
            { '@type': 'City', name: 'Neckarsulm' },
            { '@type': 'AdministrativeArea', name: 'Heilbronn-Franken' },
            { '@type': 'Country', name: 'Deutschland' },
          ],
          knowsLanguage: ['de', 'en'],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: t('services.heading'),
            itemListElement: SERVICES.map(({ id, path }) => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: t(`services.items.${id}.title`),
                url: `${SITE_URL}${localePath(path)}`,
              },
            })),
          },
        }),
      },
    ],
  })),
)

const year = new Date().getFullYear()
</script>

<template>
  <div class="page">
    <header class="header">
      <RouterLink :to="localePath('/')" class="brand">
        <LogoMark class="brand-mark" aria-hidden="true" />
        <span class="brand-name">Deuy Digital</span>
      </RouterLink>
      <div class="header-controls">
        <ThemeToggle :theme="theme" @change="setTheme" />
        <nav class="lang-switch" aria-label="Language">
          <RouterLink
            :to="switchPath('en')"
            hreflang="en"
            lang="en"
            :class="{ active: language === 'en' }"
            :aria-current="language === 'en' ? 'true' : undefined"
            @click="rememberLanguage('en')"
          >
            EN
          </RouterLink>
          <RouterLink
            :to="switchPath('de')"
            hreflang="de"
            lang="de"
            :class="{ active: language === 'de' }"
            :aria-current="language === 'de' ? 'true' : undefined"
            @click="rememberLanguage('de')"
          >
            DE
          </RouterLink>
        </nav>
      </div>
    </header>

    <main>
      <RouterView />
    </main>

    <footer class="footer">
      <nav class="footer-nav footer-services" :aria-label="t('services.heading')">
        <RouterLink v-for="service in SERVICES" :key="service.id" :to="localePath(service.path)">
          {{ t(`services.items.${service.id}.name`) }}
        </RouterLink>
      </nav>
      <address class="footer-address">
        Deuy Digital UG (haftungsbeschränkt) &middot; Im Wannental 23, 74074 Heilbronn
        <br />
        <a :href="`tel:${PHONE.replace(/ /g, '')}`">{{ PHONE }}</a>
        &middot;
        <a :href="`mailto:${EMAIL}`">{{ EMAIL }}</a>
      </address>
      <p>&copy; {{ year }} Deuy Digital UG (haftungsbeschränkt) &mdash; {{ t('footer.rights') }}</p>
      <nav class="footer-nav" aria-label="Legal">
        <RouterLink :to="localePath('/impressum')">{{ t('footer.impressum') }}</RouterLink>
        <RouterLink :to="localePath('/datenschutz')">{{ t('footer.datenschutz') }}</RouterLink>
        <RouterLink :to="localePath('/agb')">{{ t('footer.agb') }}</RouterLink>
        <RouterLink :to="localePath('/cookie-einstellungen')">{{ t('footer.cookies') }}</RouterLink>
      </nav>
    </footer>
  </div>
</template>
