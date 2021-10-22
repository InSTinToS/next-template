import { useEffect, useState } from 'react'
import Style from './styles'

import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import axios from 'axios'
import { TUserState } from 'frontend/store/user'
import { getUserThunk } from 'frontend/store/user/extraReducers'
import { TRootState } from 'frontend/types/redux'
import { useDispatch, useSelector } from 'react-redux'

interface HomeProps {}

const Home: NextPage<HomeProps> = ({ user }: any) => {
  const router = useRouter()

  // const { user, loading } = useSelector<TRootState, TUserState>(
  //   ({ user }) => user
  // )

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getUserThunk({ id: '1' }))
  // }, [dispatch])
  // const [user, setUser] = useState<any>()

  // const getUser = async () => {
  //   const newUser = await axios.get(`http://localhost:3333/users/1`)

  //   setUser(newUser.data)
  // }

  // useEffect(() => {
  //   getUser()
  // }, [])

  console.log(router.isFallback)

  return (
    <Style>
      <Head>
        <title>Home page</title>
      </Head>

      <main>
        <h1>TEST: {user?.name} </h1>
        <h1>TEST: {user?.id} </h1>
      </main>
    </Style>
  )
}

export default Home
