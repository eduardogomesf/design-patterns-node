export interface User {
  id: string
  name: string
  email: string
}

export interface UserService {
  getByEmail: (email: string) => User
}
