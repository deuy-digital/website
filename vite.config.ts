/// <reference types="vite-ssg" />
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  ssgOptions: {
    // Every route in src/routes.ts is prerendered to dist/<route>.html
    // (flat, e.g. dist/impressum.html, dist/de/impressum.html). GitHub Pages
    // serves /impressum from that file with HTTP 200 and the full page content
    // plus its own title, description, canonical, hreflang and Open Graph
    // tags — no JS needed for crawlers.
    dirStyle: 'flat',
    // /de/ is the German home page; dist/de.html would clash with the dist/de/
    // directory on GitHub Pages.
    htmlFileName: (file) => (file === 'de.html' ? 'de/index.html' : undefined),
    rootContainerId: 'root',
    entry: 'src/main.ts',
    beastiesOptions: false,
    // The layout's '' child path otherwise also yields a stray dist/.html.
    includedRoutes: (paths) => paths.filter((p) => p !== ''),
  },
})
