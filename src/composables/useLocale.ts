import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { languageFromPath, localizePath, unlocalizePath, type Language } from '../i18n'

/** Current language (from the URL) and helpers to build links that keep it. */
export function useLocale() {
  const route = useRoute()
  const language = computed<Language>(() => languageFromPath(route.path))

  /** Localizes an English path for the current language. */
  const localePath = (path: string) => localizePath(path, language.value)

  /** The current page in another language. */
  const switchPath = (lang: Language) => localizePath(unlocalizePath(route.path), lang)

  return { language, localePath, switchPath }
}
