import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

const SITE_URL = 'https://deuy.digital'

// Client-side routes (keep in sync with src/App.tsx).
const ROUTES = ['impressum', 'agb', 'datenschutz', 'cookie-einstellungen']

// GitHub Pages has no rewrites, so deep links like /datenschutz would hit
// 404.html and return HTTP 404 — which keeps them out of Google's index.
// Emitting dist/<route>.html makes Pages serve them with 200. Each copy gets
// its own canonical/og:url so crawlers don't see the homepage as canonical
// before JS runs.
function spaRoutePages(): Plugin {
  let outDir = 'dist'
  return {
    name: 'spa-route-pages',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const html = readFileSync(resolve(outDir, 'index.html'), 'utf-8')
      for (const route of ROUTES) {
        const url = `${SITE_URL}/${route}`
        const page = html
          .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
          .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
        writeFileSync(resolve(outDir, `${route}.html`), page)
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), spaRoutePages()],
})
