import { IChildrenProps } from '@app/types/react.types'

import { ThemeProvider as NextThemeProvider } from 'next-themes'

const ThemeProvider = ({ children }: IChildrenProps) => {
  return (
    <NextThemeProvider
      attribute='class'
      storageKey='@App-theme'
      themes={['']}
      defaultTheme={''}
      value={{ default_theme: '' }}
    >
      {children}
    </NextThemeProvider>
  )
}

export default ThemeProvider
