import { Employee } from './employee-abstract'

export abstract class EmployeeFactory {
  abstract create (name: string, age: string, salary: number): Employee
}
