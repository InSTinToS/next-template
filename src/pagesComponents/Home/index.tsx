import { useEffect } from 'react'
import Style from './styles'

import { NextPage } from 'next'
import Head from 'next/head'

import { TUserState } from 'store/user'
import { getUserThunk } from 'store/user/extraReducers'

import { TRootState } from 'types/redux'

import { useDispatch, useSelector } from 'react-redux'

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
  const { user, loading } = useSelector<TRootState, TUserState>(
    ({ user }) => user
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserThunk({ id: '1' }))
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
