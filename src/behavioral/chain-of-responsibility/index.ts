import assert from 'assert'
import { CustomerAddressValidatorHandler } from './concrete/customer-address-validator-handler'
import { CustomerInformationValidatorHandler } from './concrete/customer-information-validator-handler'
import { CheckoutPayload } from './concrete/customer-order'
import { ProcessOrderHandler } from './concrete/process-order-handler'

const checkoutPayload = new CheckoutPayload({
  address: {
    cep: '123456',
    country: 'BR',
    neighborhood: 'Any',
    number: '195',
    stateOrProvince: 'São Paulo',
    city: 'São Paulo'

  },
  customer: {
    id: 'random-uuid-12354',
    email: 'any@any.com',
    name: 'any',
    phone: '8199842352'
  }
})

const customerInformationValidatorHandler = new CustomerInformationValidatorHandler()
const customerAddressValidatorHandler = customerInformationValidatorHandler.setNextHandler(new CustomerAddressValidatorHandler())
customerAddressValidatorHandler.setNextHandler(new ProcessOrderHandler())
const checkoutResult = customerInformationValidatorHandler.handle(checkoutPayload)

// Logs
console.log('-'.repeat(100))
console.log('Checkout Result: ', checkoutResult)
console.log('-'.repeat(100))

// Tests
assert.equal(checkoutPayload.approved, true)
