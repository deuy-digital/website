import { useTranslation } from 'react-i18next'
import type { Theme } from '../hooks/useTheme'
import { MoonIcon, SunIcon, SystemIcon } from './icons'

interface ThemeToggleProps {
  theme: Theme
  onChange: (theme: Theme) => void
}

const OPTIONS: { value: Theme; Icon: typeof SunIcon; labelKey: string }[] = [
  { value: 'auto', Icon: SystemIcon, labelKey: 'theme.auto' },
  { value: 'light', Icon: SunIcon, labelKey: 'theme.light' },
  { value: 'dark', Icon: MoonIcon, labelKey: 'theme.dark' },
]

export function ThemeToggle({ theme, onChange }: ThemeToggleProps) {
  const { t } = useTranslation()

  return (
    <nav className="theme-switch" aria-label={t('theme.label')}>
      {OPTIONS.map(({ value, Icon, labelKey }) => (
        <button
          key={value}
          type="button"
          className={theme === value ? 'active' : ''}
          aria-pressed={theme === value}
          title={t(labelKey)}
          onClick={() => onChange(value)}
        >
          <Icon aria-hidden="true" />
          <span className="sr-only">{t(labelKey)}</span>
        </button>
      ))}
    </nav>
  )
}
