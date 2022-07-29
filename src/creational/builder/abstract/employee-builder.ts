export abstract class EmployeeBuilder {
  abstract reset (): this
  abstract addPersonalInfo (name: string, birthDate: Date, gender: string): this
  abstract addSkills (skills: string[]): this
  abstract addProfession (profession: string): this
  abstract addAddress (postalCode: string, street: string, number: number): this
}
