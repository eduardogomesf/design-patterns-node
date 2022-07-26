export abstract class Employee {
  name: string
  age: string
  role: string
  salary: number

  abstract getInfo (): any

  constructor (name: string, age: string, role: string, salary: number) {
    this.name = name
    this.age = age
    this.role = role
    this.salary = salary
  }
}
