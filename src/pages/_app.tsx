import GlobalStyle from '../styles'
import { ThemeProvider } from 'styled-components'
import { AppProps } from 'next/app'

import theme from '../styles/theme'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default MyApp
