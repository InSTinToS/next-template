import Style from '../styles/pages/styles'
import { NextPage } from 'next'
import Head from 'next/head'

interface HomeProps {}

const Home: NextPage<HomeProps> = () => (
  <Style>
    <Head>
      <title>Home page</title>
    </Head>

    <main>Home Page</main>
  </Style>
)

export default Home
