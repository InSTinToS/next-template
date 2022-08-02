import { generateClassesFromThemes } from '.'
import { createGlobalStyle } from 'styled-components'

const Themes = createGlobalStyle`
  ${generateClassesFromThemes()}

`

export default Themes
