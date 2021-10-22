import extraReducers from './extraReducers'
import reducers from './reducers'

import { TUser } from 'types/responses/user'

import { createSlice } from '@reduxjs/toolkit'

export interface TUserState {
  user?: TUser
  loading: boolean
}

export const initialState: TUserState = {
  loading: true
}

const User = createSlice({
  name: 'user',
  reducers,
  initialState,
  extraReducers
})

export const UserActions = User.actions

export default User
