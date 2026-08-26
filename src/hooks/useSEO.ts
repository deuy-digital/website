import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

interface SEOOptions {
  title: string
  description: string
  path: string
}

const SITE_URL = 'https://deuy.digital'
const SITE_NAME = 'Deuy Digital'
const OG_IMAGE = `${SITE_URL}/og-image.png`

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function useSEO({ title, description, path }: SEOOptions) {
  const { i18n } = useTranslation()

  useEffect(() => {
    const url = `${SITE_URL}${path}`
    const locale = i18n.language.startsWith('de') ? 'de_DE' : 'en_US'
    const altLocale = locale === 'de_DE' ? 'en_US' : 'de_DE'

    document.title = title
    upsertMeta('name', 'description', description)
    upsertLink('canonical', url)

    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', SITE_NAME)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', OG_IMAGE)
    upsertMeta('property', 'og:locale', locale)
    upsertMeta('property', 'og:locale:alternate', altLocale)

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', OG_IMAGE)
  }, [title, description, path, i18n.language])
}
