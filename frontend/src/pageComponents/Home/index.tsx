import { useEffect } from 'react'
import Head from 'next/head'
import api from 'services/api'

import Style from './style'

interface HomeProps {
  id?: string
  message: string
}

const Home = (res: HomeProps) => {
  //? CSR HERE (console)
  // useEffect(() => {
  //   ;(async () => {
  //     const res = await api.get('/user')

  //     console.log(res.data)
  //   })()
  // }, [])

  return (
    <Style>
      <Head>
        <title>Home page</title>
      </Head>

      <main>
        <h1>Hello World</h1>

        <ul>
          <li>{res.message}</li>
          <li>{res.id}</li>
        </ul>
      </main>
    </Style>
  )
}

export default Home
