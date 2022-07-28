import { Employee } from '../abstract/employee-abstract'
import { EmployeeFactory } from '../abstract/employee-factory-abstract'
import { Developer } from './developer'

export class DeveloperFactory extends EmployeeFactory {
  create (name: string, age: string, salary: number): Employee {
    return new Developer(name, age, salary)
  }
}
