import type { IGlobalProviderProps } from './types'

import { ThemeProvider } from '../ThemeProvider'

import { store } from 'store'

import { Provider as ReduxProvider } from 'react-redux'

const GlobalProvider = ({ children }: IGlobalProviderProps) => (
  <ReduxProvider store={store}>
    <ThemeProvider>
      <>{children}</>
    </ThemeProvider>
  </ReduxProvider>
)

export default GlobalProvider
