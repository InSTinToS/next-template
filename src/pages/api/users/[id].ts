import { TUserRes } from 'types/user'
import { TNextRoute } from 'types/next'

const user: TNextRoute<TUserRes> = (req, res) => {
  if (req.method === 'GET') {
    const { id } = req.query

    if (id === '1') {
      const response = {
        success: true,
        message: 'Fetch completed!',
        user: { name: 'Miguel', id: 1 }
      }

      return res.status(200).json(response)
    }
  }
}

export default user
