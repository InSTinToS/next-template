import { UserState } from '../'

import { ReducerType } from 'frontend/types/redux'

const update: ReducerType<UserState> = (state, { payload }) => ({
  ...state,
  user: { ...state.user, ...payload }
})

export default update
