import Head from 'next/head'
import { useRouter } from 'next/router'

import Style from './style'

const Home = () => {
  const router = useRouter()

  return (
    <Style>
      <Head>
        <title>Home page</title>
      </Head>

      <main>
        <h1>Hello World</h1>
      </main>
    </Style>
  )
}

export default Home
