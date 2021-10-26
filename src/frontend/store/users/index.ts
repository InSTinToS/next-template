import extraReducers from './extraReducers'
import reducers from './reducers'

import { UserType } from 'types/routes/users'

import { createSlice } from '@reduxjs/toolkit'

export interface UserState {
  user?: UserType
  loading: boolean
}

export const initialState: UserState = {
  loading: true
}

const User = createSlice({
  name: 'users',
  reducers,
  initialState,
  extraReducers
})

export const UserActions = User.actions

export default User
