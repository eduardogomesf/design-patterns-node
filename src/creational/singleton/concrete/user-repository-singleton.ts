/* eslint-disable no-useless-constructor */
/* eslint-disable no-use-before-define */
export class UserRepository {
  private static instance: UserRepository

  private users: Array<{
    id: number
    name: string
  }>

  private constructor () {
    this.users = [{ id: this.generateRandomId(), name: 'Eduardo' }, { id: this.generateRandomId(), name: 'Gomes' }]
  }

  public static getInstance () {
    if (this.instance) {
      console.log('Using existing instance')
      return this.instance
    }
    console.log('Creating new instance')
    this.instance = new UserRepository()
    return this.instance
  }

  public getUsers () {
    return this.users
  }

  private generateRandomId () {
    return Math.floor((Math.random() * 1000) + 1)
  }
}
