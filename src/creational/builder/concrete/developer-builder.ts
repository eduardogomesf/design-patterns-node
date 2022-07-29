import { EmployeeBuilder } from '../abstract/employee-builder'
import { Developer } from './developer'

export class DeveloperBuilder extends EmployeeBuilder {
  private developer: Developer

  constructor () {
    super()
    this.developer = new Developer()
  }

  reset (): this {
    this.developer = new Developer()
    return this
  }

  addPersonalInfo (name: string, birthDate: Date, gender: string): this {
    this.developer.personalInfo = {
      birthDate,
      gender,
      name
    }
    return this
  }

  addSkills (skills: string[]): this {
    this.developer.skills = [...skills]
    return this
  }

  addProfession (profession: string): this {
    this.developer.profession = profession
    return this
  }

  addAddress (postalCode: string, street: string, number: number): this {
    this.developer.address = {
      number,
      postalCode,
      street
    }
    return this
  }

  getResult (): Developer {
    return this.developer
  }
}
