export interface TUser {
  id: number
  name: string
}

export interface TUserRes {
  user: TUser
  message: string
  success: boolean
}
