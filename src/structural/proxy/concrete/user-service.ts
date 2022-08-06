import { UserService, User } from '../abstract/user-service-interface'

export class ConcreteUserService implements UserService {
  getByEmail (email: string): User {
    return { id: '12312', email, name: 'Eduardo' }
  }
}
