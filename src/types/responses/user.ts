import TResponse from './'

export interface TUser {
  id: string
  name: string
}

export interface TUserRes extends TResponse {
  user?: TUser
}
