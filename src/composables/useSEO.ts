import { computed } from 'vue'
import { useHead } from '@unhead/vue'
import { useTranslation } from 'i18next-vue'
import { DEFAULT_LANGUAGE, LANGUAGES, localizePath } from '../i18n'
import { useLocale } from './useLocale'

interface SEOOptions {
  /** i18n key prefix, e.g. 'seo.home' → seo.home.title / seo.home.description */
  key: string
  /** English path of the page, e.g. '/impressum'. */
  path: string
}

const SITE_URL = 'https://deuy.digital'
const SITE_NAME = 'Deuy Digital'
const OG_IMAGE = `${SITE_URL}/og-image.png`
const OG_LOCALES = { en: 'en_US', de: 'de_DE' } as const

// Rendered into each page's static HTML at build time (vite-ssg), then kept
// up to date on client-side navigation.
export function useSEO({ key, path }: SEOOptions) {
  const { t } = useTranslation()
  const { language } = useLocale()

  useHead(
    computed(() => {
      const title = t(`${key}.title`)
      const description = t(`${key}.description`)
      const url = `${SITE_URL}${localizePath(path, language.value)}`

      return {
        title,
        link: [
          { rel: 'canonical', href: url },
          // Every language version lists all of them (including itself), plus
          // x-default for visitors matching neither.
          ...LANGUAGES.map((lang) => ({
            rel: 'alternate',
            hreflang: lang,
            href: `${SITE_URL}${localizePath(path, lang)}`,
            key: `hreflang-${lang}`,
          })),
          {
            rel: 'alternate',
            hreflang: 'x-default',
            href: `${SITE_URL}${localizePath(path, DEFAULT_LANGUAGE)}`,
            key: 'hreflang-x-default',
          },
        ],
        meta: [
          { name: 'description', content: description },

          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: SITE_NAME },
          { property: 'og:title', content: title },
          { property: 'og:description', content: description },
          { property: 'og:url', content: url },
          { property: 'og:image', content: OG_IMAGE },
          { property: 'og:image:width', content: '1200' },
          { property: 'og:image:height', content: '630' },
          { property: 'og:locale', content: OG_LOCALES[language.value] },
          ...LANGUAGES.filter((lang) => lang !== language.value).map((lang) => ({
            property: 'og:locale:alternate',
            content: OG_LOCALES[lang],
          })),

          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: title },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: OG_IMAGE },
        ],
      }
    }),
  )
}
