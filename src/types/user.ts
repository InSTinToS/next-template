import { AxiosResponse } from 'axios'

export interface TUser {
  id: number
  name: string
}

export type TUserRes = AxiosResponse<{
  user: TUser
  message: string
  success: boolean
}>
