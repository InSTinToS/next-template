import User from './users'

import { configureStore } from '@reduxjs/toolkit'

const Store = configureStore({ reducer: { users: User.reducer } })

export default Store
