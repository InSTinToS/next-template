import { IThemeStore } from './types'

import { reset } from './reducers/reset'
import { update } from './reducers/update'

import { blackOrWhiteByContrast } from '@app/utils/colors'

import { createSlice } from '@reduxjs/toolkit'

const initialColor = ''

export const initialState: IThemeStore = {
  color: initialColor,
  contrast: blackOrWhiteByContrast(initialColor),
  contrastName:
    blackOrWhiteByContrast(initialColor) === 'white' ? 'white' : 'black'
}

export const themeStore = createSlice({
  initialState,
  name: 'theme-store',
  reducers: { update, reset }
})
