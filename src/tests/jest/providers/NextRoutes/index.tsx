import { IRouterProviderProps } from './types'

import { createMockRouter } from '@app/tests/jest/mocks/createMockRouter'

import { RouterContext } from 'next/dist/shared/lib/router-context'
import { NextRouter } from 'next/router'

export const RouterProvider = ({ children, props }: IRouterProviderProps) => (
  <RouterContext.Provider value={createMockRouter(props || {}) as NextRouter}>
    {children}
  </RouterContext.Provider>
)
