import { TUser, TUserRes } from 'types/responses/user'
import { TNextRoute } from 'types/next'

const fakeDb: TUser[] = [
  { name: 'Miguel', id: '1' },
  { name: 'Gabriel', id: '2' },
  { name: 'Jean', id: '3' }
]

const user: TNextRoute<TUserRes> = (req, res) => {
  if (req.method === 'GET') {
    const { id } = req.query
    const foundUser = fakeDb.find(user => user.id === id)

    if (foundUser)
      return res.status(200).json({
        success: true,
        message: 'Fetch completed!',
        user: foundUser
      })

    return res.status(404).json({
      success: false,
      message: 'User not found'
    })
  }
}

export default user
