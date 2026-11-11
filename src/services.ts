// Service landing pages. `id` is the i18n key (services.items.<id>,
// seo.services.<id>); `path` is the English path — German lives under /de.
// Keep public/sitemap.xml in sync.
//
// Each page ends with a reference: the Seel case study by default, or — when
// `referenceUrl` is set — an external one with its own texts under
// services.items.<id>.reference.
export const SERVICES = [
  { id: 'custom', path: '/softwareentwicklung-heilbronn' },
  { id: 'ecommerce', path: '/e-commerce-heilbronn' },
  { id: 'ai', path: '/ki-loesungen-heilbronn', referenceUrl: 'https://vertragbot.de/' },
] as const

export type ServiceId = (typeof SERVICES)[number]['id']
