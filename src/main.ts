import { ViteSSG } from 'vite-ssg'
import I18NextVue from 'i18next-vue'
import i18n, { languageFromPath } from './i18n'
import { routes } from './routes'
import App from './App.vue'
// Self-hosted (bundled) fonts: no request to a third-party font CDN.
import '@fontsource-variable/bricolage-grotesque/wght.css'
import '@fontsource-variable/instrument-sans/wght.css'
import './index.css'

declare global {
  interface Window {
    /** Set by the inline script in index.html after a 404.html redirect. */
    __SPA_REDIRECTED__?: boolean
  }
}

// Every URL is prerendered with exactly what the client renders for it, so
// hydrate (reuse that HTML) — except for a URL restored from the 404.html
// redirect, whose markup is the home page's.
const canHydrate = !import.meta.env.SSR && !window.__SPA_REDIRECTED__

export const createApp = ViteSSG(
  App,
  {
    routes,
    // Header links point at sections of the home page (/#services); the
    // header offset comes from scroll-margin-top in App.css.
    scrollBehavior: (to) => (to.hash ? { el: to.hash, behavior: 'smooth' } : { top: 0 }),
  },
  ({ app, router, routePath }) => {
    const path = import.meta.env.SSR ? (routePath ?? '/') : window.location.pathname
    const i18next = i18n.cloneInstance({ lng: languageFromPath(path) })
    app.use(I18NextVue, { i18next })

    router.beforeEach(async (to) => {
      const lang = languageFromPath(to.path)
      if (i18next.language !== lang) await i18next.changeLanguage(lang)
    })
  },
  { rootContainer: '#root', hydration: canHydrate },
)
