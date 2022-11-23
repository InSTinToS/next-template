import { Style, Title } from './styles'

import { appInfo } from '@app/static/appInfo'

import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <link rel='canonical' href={appInfo.url} />

        <title>Home</title>
      </Head>

      <Style>
        <Title>Hello Next</Title>
      </Style>
    </>
  )
}

export default Home
