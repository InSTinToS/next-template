import { TUserRes } from 'types/responses/user'
import { TNextRoute } from 'types/next'

import UserController from 'backend/controllers/User'

const user: TNextRoute<TUserRes> = (req, res) => {
  const userController = new UserController()

  if (req.method === 'GET') userController.index(req, res)
}

export default user
