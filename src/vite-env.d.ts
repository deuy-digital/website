/// <reference types="vite/client" />
/// <reference types="vite-ssg" />

interface ImportMetaEnv {
  /** GA4 measurement ID (G-XXXXXXX). Empty = analytics + cookie banner disabled. */
  readonly VITE_GA_MEASUREMENT_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
