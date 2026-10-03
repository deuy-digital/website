# deuy.digital

Company website — Vue 3 + TypeScript, statically prerendered with [vite-ssg](https://github.com/antfu-collective/vite-ssg) and deployed to GitHub Pages.

```sh
npm run dev      # dev server
npm run build    # type-check + prerender every route to dist/<route>.html
npm run preview  # serve dist/
npm run lint
```

- Routes live in `src/routes.ts`; each one is prerendered with its own title, description, canonical and Open Graph tags (`src/composables/useSEO.ts`). Keep `public/sitemap.xml` in sync.
- English lives at `/`, German at `/de/` — every page in both, linked with `hreflang`. The language comes from the URL only; an inline script in `index.html` sends visitors to their language (stored choice from the switch, else browser language on English URLs).
- `VITE_GA_MEASUREMENT_ID` enables Google Analytics behind an opt-in banner (`src/lib/analytics.ts`); empty = no analytics, no banner.
