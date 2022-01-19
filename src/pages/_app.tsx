import { AppProps } from 'next/app'
import Head from 'next/head'

import favicon from '../../public/favicon.ico'

import GlobalStyle from 'frontend/styles'
import theme from 'frontend/styles/theme'
import store from 'frontend/store'

import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link rel='icon' href={favicon} />
    </Head>

    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Component {...pageProps} />
      </ThemeProvider>
    </ReduxProvider>
  </>
)

export default MyApp
