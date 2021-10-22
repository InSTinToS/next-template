import { TNextRoute } from 'types/next'
import { TUser, TUserRes } from 'types/responses/user'

import UserRepository from 'backend/repositories/Users'

const usersRepository = new UserRepository()

class UserController {
  public index: TNextRoute<TUserRes> = async (req, res) => {
    const { id } = req.query
    const foundUser: TUser = await usersRepository.findById(id as string)

    if (foundUser)
      return res.status(200).json({
        success: true,
        user: foundUser,
        message: 'Fetch completed!'
      })

    return res.status(404).json({
      success: false,
      message: 'User not found'
    })
  }
}

export default UserController
