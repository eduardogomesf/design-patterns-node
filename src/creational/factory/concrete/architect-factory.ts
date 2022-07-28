import { Architect } from './architect'
import { Employee } from '../abstract/employee-abstract'
import { EmployeeFactory } from '../abstract/employee-factory-abstract'

export class ArchitectFactory extends EmployeeFactory {
  create (name: string, age: string, salary: number): Employee {
    return new Architect(name, age, salary)
  }
}
