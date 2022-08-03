import { EmailValidatorAdapter } from './concrete/email-validator-adapter'
import { ValidateInput } from './concrete/client'
import assert from 'assert'

const emailValidator = new EmailValidatorAdapter()
const validateInput = new ValidateInput(emailValidator)

let isFirstEmailValid = true

try {
  validateInput.isEmailValid('eduardo@invalid-mail.com')
} catch (error) {
  isFirstEmailValid = false
}

const isSecondEmailValid = validateInput.isEmailValid('eduardo@mail.com')

// Logs
console.log('-'.repeat(100))
console.log('First email is valid: ', isFirstEmailValid)
console.log('Second email is valid: ', isSecondEmailValid)
console.log('-'.repeat(100))

// Tests
assert.equal(isFirstEmailValid, false)
assert.equal(isSecondEmailValid, true)
