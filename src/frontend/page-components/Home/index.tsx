import Head from 'next/head'

import Style from './style'

import { UserActions, UserStore } from 'frontend/store/user'
import { RootStore } from 'frontend/types/redux'
import reset from 'frontend/store/user/reducers/reset'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()

  const { user } = useSelector<RootStore, UserStore>(({ user }) => user)

  useEffect(() => {
    dispatch(UserActions.update({ name: 'miguel' }))
  }, [])

  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <Style>
      <Head>
        <title>Home page</title>
      </Head>

      <main>
        <h1>Hello {user?.name}</h1>

        <h2>dotenv: {process.env.dotenv}</h2>
      </main>
    </Style>
  )
}

export default Home
