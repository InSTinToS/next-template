import RadixProvider from '../Radix'

import { globalStyles } from '@app/styles'

import { store } from '@app/store'

import { IChildrenProps } from '@app/types/react.types'

import { ThemeProvider } from 'next-themes'
import { useEffect } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
// import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider as ReduxProvider } from 'react-redux'

const queryClient = new QueryClient()

const GlobalProvider = ({ children }: IChildrenProps) => {
  useEffect(() => {
    globalStyles()
  }, [])
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <RadixProvider>
          <QueryClientProvider client={queryClient}>
            {children}

            {/* <ReactQueryDevtools /> */}
          </QueryClientProvider>
        </RadixProvider>
      </ThemeProvider>
    </ReduxProvider>
  )
}

export default GlobalProvider
