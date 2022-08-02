import themes from 'styles/theme'
import type { TTheme } from 'styles/theme/types'

interface IThemeContext {
  theme: TTheme
  toggleTheme: (newThemeName: keyof typeof themes) => void
}

export type { IThemeContext }
