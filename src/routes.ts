import type { Component } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { LANGUAGES, localizePath } from './i18n'
import Layout from './components/Layout.vue'
import Home from './pages/Home.vue'
import Impressum from './pages/Impressum.vue'
import AGB from './pages/AGB.vue'
import Datenschutz from './pages/Datenschutz.vue'
import CookieSettings from './pages/CookieSettings.vue'

const pages: { path: string; component: Component }[] = [
  { path: '/', component: Home },
  { path: '/impressum', component: Impressum },
  { path: '/agb', component: AGB },
  { path: '/datenschutz', component: Datenschutz },
  { path: '/cookie-einstellungen', component: CookieSettings },
]

// Every page exists once per language: English at /<page>, German at
// /de/<page>. Every static route here is prerendered to dist/ by vite-ssg.
// Keep public/sitemap.xml in sync.
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    children: LANGUAGES.flatMap((lang) =>
      pages.map(({ path, component }) => ({ path: localizePath(path, lang), component })),
    ),
  },
]
