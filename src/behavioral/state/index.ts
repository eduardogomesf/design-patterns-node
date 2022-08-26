import assert from 'assert'
import { VirtualCreditCardContext } from './concrete/virtual-credit-card-context'

const virtualCreditCardContext = new VirtualCreditCardContext()

const stateAfterCreation = virtualCreditCardContext.getStateName()
const unlockingResult = virtualCreditCardContext.unlock()
const paymentResult = virtualCreditCardContext.pay()
const stateAfterUnlocking = virtualCreditCardContext.getStateName()
const failAttemptToUnlock = virtualCreditCardContext.unlock()
const lockingResult = virtualCreditCardContext.lock()
const failAttemptToPay = virtualCreditCardContext.pay()
const failAttempToLock = virtualCreditCardContext.lock()

// Logs
console.log('State after creation: ', stateAfterCreation)
console.log('Unlocking result: ', unlockingResult.message)
console.log('Payment result: ', paymentResult.message)
console.log('State after unlocking: ', stateAfterUnlocking)
console.log('Attempt to unlocked again: ', failAttemptToUnlock.message)
console.log('Locking result: ', lockingResult.message)
console.log('Attempt to pay: ', failAttemptToPay.message)
console.log('Attempt to lock again: ', failAttempToLock.message)

// Tests
assert.equal(stateAfterCreation, 'Locked')
assert.equal(unlockingResult.success, true)
assert.equal(paymentResult.success, true)
assert.equal(stateAfterUnlocking, 'Unlocked')
assert.equal(failAttemptToUnlock.success, false)
assert.equal(lockingResult.success, true)
assert.equal(failAttemptToPay.success, false)
assert.equal(failAttempToLock.success, false)
