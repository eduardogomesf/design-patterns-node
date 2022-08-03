import { EmailValidator } from '../abstract/email-validator-interface'

export class ValidateInput {
  constructor (
    private readonly emailValidator: EmailValidator
  ) { }

  isEmailValid (email: string) {
    if (!this.emailValidator.isEmail(email)) {
      throw new Error('Invalid e-mail')
    }

    return true
  }
}
