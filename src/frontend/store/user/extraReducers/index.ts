import { TUserState } from '../'
import getUser from './getUser'

import { createAsyncThunk } from '@reduxjs/toolkit'
import { TExtraReducers } from 'frontend/types/redux'

export const getUserThunk = createAsyncThunk('user/getUser', getUser)

const extraReducers: TExtraReducers<TUserState> = ({ addCase }) => {
  addCase(getUserThunk.pending, state => ({ ...state }))

  addCase(getUserThunk.fulfilled, (state, { payload }) => ({
    ...state,
    ...payload,
    loading: false
  }))
}

export default extraReducers
