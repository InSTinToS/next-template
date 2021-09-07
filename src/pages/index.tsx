import Style from '../styles/pages/styles'
import { NextPage } from 'next'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { getUser, UserState } from 'store/user'
import { useEffect } from 'react'

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
  const { user, loading } = useSelector<RootState, UserState>(
    ({ user }) => user
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser({ id: 1 }))
  }, [dispatch])

  return (
    <Style>
      <Head>
        <title>Home page</title>
      </Head>

      <main>
        <h1>{`Welcome to Home Page ${
          loading || !user?.name ? '' : user.name
        }`}</h1>
      </main>
    </Style>
  )
}

export default Home
