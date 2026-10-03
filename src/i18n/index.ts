import i18n from 'i18next'
import en from './en.json'
import de from './de.json'

export type Language = 'en' | 'de'
export const LANGUAGES: readonly Language[] = ['en', 'de']
export const DEFAULT_LANGUAGE: Language = 'en'

/** localStorage key for an explicit choice made in the language switch. */
export const LANGUAGE_STORAGE_KEY = 'deuy-lang'

// The language comes from the URL (English at /, German under /de/), never
// from the browser, so every URL always renders the same content — for
// prerendering and for crawlers. Each app gets its own instance via
// cloneInstance() in src/main.ts so concurrent prerenders don't interfere.
i18n.init({
  resources: {
    en: { translation: en },
    de: { translation: de },
  },
  lng: DEFAULT_LANGUAGE,
  fallbackLng: DEFAULT_LANGUAGE,
  supportedLngs: LANGUAGES,
  // Resources are bundled, so finish init synchronously.
  initAsync: false,
  interpolation: {
    escapeValue: false,
  },
})

export function languageFromPath(path: string): Language {
  return path === '/de' || path.startsWith('/de/') ? 'de' : 'en'
}

/** Prefixes an English path for the given language: ('/agb', 'de') → '/de/agb'. */
export function localizePath(path: string, lang: Language): string {
  if (lang === DEFAULT_LANGUAGE) return path
  return path === '/' ? `/${lang}/` : `/${lang}${path}`
}

/** Strips the language prefix: '/de/agb' → '/agb', '/de/' → '/'. */
export function unlocalizePath(path: string): string {
  return path.replace(/^\/de(?=\/|$)/, '') || '/'
}

export default i18n
