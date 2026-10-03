<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useTranslation } from 'i18next-vue'
import { LANGUAGE_STORAGE_KEY, type Language } from '../i18n'
import LogoMark from './LogoMark.vue'
import ThemeToggle from './ThemeToggle.vue'
import { useLocale } from '../composables/useLocale'
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

useHead({ htmlAttrs: { lang: language } })

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
