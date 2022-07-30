/* eslint-disable no-useless-constructor */
/* eslint-disable no-use-before-define */
export class UserRepository {
  private static instance: UserRepository

  private constructor () { }

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
    return [{ id: 1, name: 'Eduardo' }, { id: 2, name: 'Gomes' }]
  }
}
