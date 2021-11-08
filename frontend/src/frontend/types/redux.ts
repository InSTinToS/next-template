import {
  ActionReducerMapBuilder,
  CaseReducer,
  PayloadAction
} from '@reduxjs/toolkit'
import Store from 'frontend/store'

export type RootState = ReturnType<typeof Store.getState>

export type ReducerType<T> = CaseReducer<T, PayloadAction<Partial<T>>>

export type TExtraReducers<State> = (
  _builder: ActionReducerMapBuilder<State>
) => void
