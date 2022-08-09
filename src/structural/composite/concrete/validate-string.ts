import { ValidateComponent, ValidationResponse } from '../abstract/validate-component'

export class ValidateString implements ValidateComponent {
  validate (data: any): ValidationResponse {
    const isString = typeof data === 'string'
    return {
      isValid: isString,
      error: isString ? '' : 'Provided value is not a string'
    }
  }
}
