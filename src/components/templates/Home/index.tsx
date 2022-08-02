import { Style } from './styles'

import Button from 'components/atoms/Button'

import type { TNextPageWithLayout } from 'typescript/next.types'

import { ThemeContext } from 'components/providers/ThemeProvider'
import Head from 'next/head'
import { useContext } from 'react'

const Home: TNextPageWithLayout = () => {
  const theme = useContext(ThemeContext)

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Generated by create next app' />
      </Head>

      <Style>
        <h1>Hello Next</h1>

        <Button
          onClick={() => {
            theme?.toggleTheme('light')
          }}
        >
          Toggle to Light
        </Button>

        <Button
          onClick={() => {
            theme?.toggleTheme('dark')
          }}
        >
          Toggle to Dark
        </Button>
      </Style>
    </>
  )
}

export default Home
