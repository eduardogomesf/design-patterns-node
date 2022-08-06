import { User, UserService } from '../abstract/user-service-interface'

export class UserServiceProxy implements UserService {
  constructor (
    private userService: UserService
  ) {}

  getByEmail (email: string): User {
    console.log(`Requesting information of user with email: ${email}`)

    return this.userService.getByEmail(email)
  }
}
