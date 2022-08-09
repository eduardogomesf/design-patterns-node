import { ValidateComponent, ValidationResponse } from '../abstract/validate-component'

export class ValidateEmail implements ValidateComponent {
  validate (data: any): ValidationResponse {
    const email = String(data)
    const isValidEmail = email.includes('@') && email.includes('.com')
    return {
      isValid: isValidEmail,
      error: isValidEmail ? '' : 'Invalid email'
    }
  }
}
