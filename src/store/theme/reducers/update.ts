import { IThemeStore } from '../types'

import { TReducer } from '@app/types/redux.types'

import { blackOrWhiteByContrast } from '@app/utils/colors'

export const update: TReducer<IThemeStore, string> = (_state, { payload }) => ({
  color: payload,
  contrast: blackOrWhiteByContrast(payload),
  contrastName: blackOrWhiteByContrast(payload) === 'white' ? 'white' : 'black'
})
