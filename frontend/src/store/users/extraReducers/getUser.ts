import { UsersResType, UsersType } from 'types/routes/users'

import axios, { AxiosResponse } from 'axios'

interface TGetUserParams {
  id?: string
}

type TGetUser = (
  _params: TGetUserParams
) => Promise<{ users: UsersType } | null>

const getUser: TGetUser = async ({ id }) => {
  const { data }: AxiosResponse<UsersResType> = await axios.get(
    `api/users/${id}`
  )
  const { success, users } = data

  if (success) return { users }
  return null
}

export default getUser
