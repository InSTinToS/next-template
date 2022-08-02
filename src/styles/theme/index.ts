import dark from './themes/dark'
import light from './themes/light'

import objectToStringArray from 'utils/objectToStringArray'

const themes = { dark, light }

const generateClassesFromThemes = () => {
  const themesArray = Object.values(themes)

  const finalCSS = themesArray
    .map(originalTheme => {
      const theme = originalTheme
      const themeKeys: string[] = Object.keys(theme)
      const themeValues: any[] = Object.values(theme)

      themeKeys.shift()
      themeValues.shift()

      const cssVariables = objectToStringArray({
        prefix: '--',
        separator: '-',
        objectKeys: themeKeys,
        objectValues: themeValues
      })

      const cssClass = cssVariables.reduce(
        (prev, curr, index) =>
          index === cssVariables.length - 1
            ? `${prev}${curr}\n}`
            : `${prev}${curr}\n`,
        `.${theme.name} {\n`
      )

      return cssClass
    })
    .reduce((prev, curr) => `${prev}\n${curr}`, '')

  return finalCSS
}

export { generateClassesFromThemes }

export default themes
