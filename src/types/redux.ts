import Store from 'store'

import {
  ActionReducerMapBuilder,
  CaseReducer,
  PayloadAction
} from '@reduxjs/toolkit'

export type TReducer<T> = CaseReducer<T, PayloadAction<Partial<T>>>

export type TExtraReducers<State> = (
  _builder: ActionReducerMapBuilder<State>
) => void

export type TRootState = ReturnType<typeof Store.getState>
