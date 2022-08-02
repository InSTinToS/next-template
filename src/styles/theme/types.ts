import light from './themes/light'

type TTheme = typeof light

interface IThemes {
  [key: string]: TTheme
}

export type { TTheme, IThemes }
