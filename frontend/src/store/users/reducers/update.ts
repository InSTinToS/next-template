import { UserState } from '../'

import { ReducerType } from 'types/redux'

const update: ReducerType<UserState> = (state, { payload }) => ({
  ...state,
  user: { ...state.user, ...payload }
})

export default update
