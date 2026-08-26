import { useEffect, useState } from 'react'

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

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(readStoredTheme)
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() =>
    theme === 'auto' ? getSystemTheme() : theme,
  )

  useEffect(() => {
    const resolved = theme === 'auto' ? getSystemTheme() : theme
    setResolvedTheme(resolved)
    applyTheme(resolved)

    if (theme !== 'auto') return

    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      const next = mql.matches ? 'dark' : 'light'
      setResolvedTheme(next)
      applyTheme(next)
    }
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [theme])

  const setTheme = (next: Theme) => {
    setThemeState(next)
    if (next === 'auto') {
      localStorage.removeItem(STORAGE_KEY)
    } else {
      localStorage.setItem(STORAGE_KEY, next)
    }
  }

  return { theme, resolvedTheme, setTheme }
}
