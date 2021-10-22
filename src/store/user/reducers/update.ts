import { TUserState } from '../'

import { TReducer } from 'types/redux'

const update: TReducer<TUserState> = (state, { payload }) => ({
  ...state,
  user: { ...state.user, ...payload }
})

export default update
