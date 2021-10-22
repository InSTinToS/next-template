import { TUser, TUserRes } from 'types/user'

import axios, { AxiosResponse } from 'axios'

interface TGetUserParams {
  id?: number
}

type TGetUser = (_params: TGetUserParams) => Promise<{ user: TUser } | null>

const getUser: TGetUser = async ({ id }) => {
  const { data }: AxiosResponse<TUserRes> = await axios.get(`api/users/${id}`)
  const { success, user } = data

  if (success) return { user }
  return null
}

export default getUser
