import { TUser } from 'types/responses/user'

const fakeDb: TUser[] = [
  { name: 'Miguel', id: '1' },
  { name: 'Gabriel', id: '2' },
  { name: 'Jean', id: '3' }
]

class UsersRepository {
  private repository: TUser[]

  constructor() {
    this.repository = fakeDb
  }

  public async findById(id: string): Promise<TUser> {
    const foundUser = this.repository.find(user => user.id === id)
    return foundUser
  }
}

export default UsersRepository
