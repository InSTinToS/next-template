import { reset } from './reset'
import { fonts } from './themes/common/fonts'
import { media } from './themes/common/media'
import { radius } from './themes/common/radius'
import { sizes } from './themes/common/sizes'
import { space } from './themes/common/space'
import { colors } from './themes/default'
import { utils } from './utils'

import { createStitches } from '@stitches/react'

export const {
  css,
  theme,
  config,
  styled,
  keyframes,
  globalCss,
  getCssText,
  createTheme
} = createStitches({
  utils,
  media,
  theme: {
    space,
    sizes,
    colors,
    radii: radius,
    fonts: fonts.family,
    fontSizes: fonts.sizes,
    fontWeights: fonts.weights
  }
})

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',

    color: '$white',
    fontSize: '$3',
    fontFamily: '$roboto'
  },

  body: {
    minWidth: '$xs',
    overflow: 'auto',

    theme: '$secondary',

    ul: { listStyle: 'none' },

    ...reset.button,
    ...reset.inputText,
    ...reset.inputColor
  }
})
