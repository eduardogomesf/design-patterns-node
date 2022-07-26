import { Employee } from './employee-abstract'

export abstract class EmployeeFactory {
  abstract create (employeeType: string, name: string, age: string, salary: number): Employee
}
