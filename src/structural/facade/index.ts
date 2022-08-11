import assert from 'assert'
import { SendEmailFacade } from './concrete/send-email-facade'

const sendEmail = new SendEmailFacade()

const sendEmailResult = sendEmail.send('eduardo@hotmail.com', 'new-user')

// Logs
console.log('-'.repeat(100))
console.log('Send email result: ', sendEmailResult)
console.log('-'.repeat(100))

// Tests
assert.equal(sendEmailResult.success, true)
