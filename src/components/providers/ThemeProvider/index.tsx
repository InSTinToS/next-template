import { theme } from '@app/styles'

import { IChildrenProps } from '@app/types/react.types'

import { ThemeProvider as NextThemeProvider } from 'next-themes'

const ThemeProvider = ({ children }: IChildrenProps) => {
  return (
    <NextThemeProvider
      attribute='class'
      storageKey='@MyHair-theme'
      themes={[theme.className]}
      defaultTheme={theme.className}
      value={{ default_theme: theme.className }}
    >
      {children}
    </NextThemeProvider>
  )
}

export default ThemeProvider
