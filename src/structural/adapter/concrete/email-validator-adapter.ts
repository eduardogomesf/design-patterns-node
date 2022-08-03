import { isEmail } from './validator-lib'
import { EmailValidator } from '../abstract/email-validator-interface'

export class EmailValidatorAdapter implements EmailValidator {
  isEmail (email: string): boolean {
    return isEmail(email)
  }
}
