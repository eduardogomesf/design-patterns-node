import { Prototype } from '../abstract/prototype'

export class Developer implements Prototype {
  name: string
  age: string
  mainTech: string

  constructor (name: string, age: string, mainTech: string) {
    this.name = name
    this.age = age
    this.mainTech = mainTech
  }

  clone (): this {
    return Object.create(this)
  }
}
