import { Tester } from './tester'
import { Employee } from '../abstract/employee-abstract'
import { EmployeeFactory } from '../abstract/employee-factory-abstract'

export class TesterFactory extends EmployeeFactory {
  create (name: string, age: string, salary: number): Employee {
    return new Tester(name, age, salary)
  }
}
