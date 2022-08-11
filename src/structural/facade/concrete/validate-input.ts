export class ValidateInput {
  isValidEmail (email: string) {
    return email.includes('@') && email.includes('.com')
  }
}
