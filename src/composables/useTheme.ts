import { onMounted, onUnmounted, ref, watch } from 'vue'

export type Theme = 'auto' | 'light' | 'dark'
type ResolvedTheme = 'light' | 'dark'

const STORAGE_KEY = 'deuy-theme'

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(resolved: ResolvedTheme) {
  document.documentElement.setAttribute('data-theme', resolved)
  document.documentElement.style.colorScheme = resolved
}

function readStoredTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored === 'light' || stored === 'dark' ? stored : 'auto'
}

// The page itself is themed before first paint by the inline script in
// index.html; this only drives the toggle and live updates. The stored value
// is read after mount so the first client render matches the prerendered HTML.
export function useTheme() {
  const theme = ref<Theme>('auto')
  let stopSystemListener: (() => void) | undefined

  onMounted(() => {
    theme.value = readStoredTheme()

    watch(
      theme,
      (current) => {
        stopSystemListener?.()
        stopSystemListener = undefined
        applyTheme(current === 'auto' ? getSystemTheme() : current)

        if (current !== 'auto') return

        const mql = window.matchMedia('(prefers-color-scheme: dark)')
        const onChange = () => applyTheme(mql.matches ? 'dark' : 'light')
        mql.addEventListener('change', onChange)
        stopSystemListener = () => mql.removeEventListener('change', onChange)
      },
      { immediate: true },
    )
  })

  onUnmounted(() => stopSystemListener?.())

  const setTheme = (next: Theme) => {
    theme.value = next
    if (next === 'auto') {
      localStorage.removeItem(STORAGE_KEY)
    } else {
      localStorage.setItem(STORAGE_KEY, next)
    }
  }

  return { theme, setTheme }
}
