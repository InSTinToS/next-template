import User from './user'

import { configureStore } from '@reduxjs/toolkit'

const Store = configureStore({ reducer: { user: User.reducer } })

export default Store
