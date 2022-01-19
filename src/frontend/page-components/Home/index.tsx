import Head from 'next/head'

import luffy from '../../../../public/luffy.png'
import Style from './style'

import { UserActions, UserStore } from 'frontend/store/user'
import { RootStore } from 'frontend/types/redux'

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
    <>
      <Head>
        <title>Home page</title>
      </Head>

      <Style>
        <div>
          <h1 data-cy='hello'>Hello {user?.name}</h1>

          <h2>dotenv: {process.env.dotenv}</h2>

          <div>
            <img src='/luffy.png' />

            <img src='/watermelon.svg' />
          </div>
        </div>
      </Style>
    </>
  )
}

export default Home
