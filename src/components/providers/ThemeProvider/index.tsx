import { IThemeContext } from './types'

import themes from 'styles/theme'
import Themes from 'styles/theme/styles'
import { TTheme } from 'styles/theme/types'

import { createContext, useEffect, useState } from 'react'

const ThemeContext = createContext<IThemeContext | undefined>(undefined)

const getInitialTheme = (): TTheme => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedTheme = window.localStorage.getItem(
      'theme'
    ) as keyof typeof themes

    if (storedTheme && themes[storedTheme]) return themes[storedTheme]

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)')

    if (userMedia.matches) return themes['dark']
  }

  return themes['light']
}

const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<TTheme>(getInitialTheme())

  const toggleTheme = (newThemeName: keyof typeof themes) => {
    const root = window.document.documentElement

    setTheme(prev => {
      const newTheme = themes[newThemeName]

      if (prev && newTheme) {
        root.classList.remove(prev.name)
        root.classList.add(newTheme.name)

        localStorage.setItem('theme', newTheme.name)

        return newTheme
      }

      return themes['light']
    })
  }

  useEffect(() => {
    setTheme(themes.light)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Themes />

      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider, getInitialTheme }
