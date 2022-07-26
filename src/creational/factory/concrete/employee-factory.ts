import { Employee } from '../abstract/employee-abstract'
import { EmployeeFactory } from '../abstract/employee-factory-abstract'
import { Architect } from './architect'
import { Developer } from './developer'
import { Tester } from './tester'
import { EmployeeRoles } from '../constants'

export class DefaultEmployeeFactory extends EmployeeFactory {
  create (employeeType: string, name: string, age: string, salary: number): Employee {
    if (!employeeType) {
      throw new Error('Invalid employee type')
    }

    const upperCaseEmployeeType = employeeType.toUpperCase()

    if (EmployeeRoles.developer === upperCaseEmployeeType) {
      return new Developer(name, age, salary)
    } else if (EmployeeRoles.architect === upperCaseEmployeeType) {
      return new Architect(name, age, salary)
    } else if (EmployeeRoles.tester === upperCaseEmployeeType) {
      return new Tester(name, age, salary)
    } else {
      throw new Error('Invalid employe type')
    }
  }
}
