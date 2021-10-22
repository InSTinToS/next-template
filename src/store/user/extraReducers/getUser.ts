import { TUser, TUserRes } from 'types/user'

import axios from 'axios'

interface TGetUserParams {
  id?: number
}

type TGetUser = (_params: TGetUserParams) => Promise<{ user: TUser } | null>

const getUser: TGetUser = async ({ id }) => {
  const { data }: TUserRes = await axios.get(`api/users/${id}`)
  const { success, user } = data

  if (success) return { user }
  return null
}

export default getUser
