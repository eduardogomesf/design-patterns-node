import assert from 'assert'
import { ValidateComposite } from './concrete/validate-composite'
import { ValidateEmail } from './concrete/validate-email'
import { ValidateString } from './concrete/validate-string'

const validateEmail = new ValidateEmail()
const validateString = new ValidateString()
const validateComposite = new ValidateComposite()

validateComposite.add([validateString, validateEmail])

const validEmailValidation = validateComposite.validate('eduardo@mail.com')
const invalidEmailValidation = validateComposite.validate('eduardo@mail.moc')
const invalidValueValidation = validateComposite.validate(6)

// Logs
console.log('-'.repeat(100))
console.log('Valid email: ', validEmailValidation)
console.log('Invalid email: ', invalidEmailValidation)
console.log('Invalid value: ', invalidValueValidation)
console.log('-'.repeat(100))

// Tests
assert.equal(validEmailValidation.isValid, true)
assert.equal(invalidEmailValidation.isValid, false)
assert.equal(invalidEmailValidation.error, 'Invalid email')
assert.equal(invalidValueValidation.isValid, false)
assert.equal(invalidValueValidation.error, 'Provided value is not a string')
