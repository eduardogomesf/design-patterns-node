import { BaseCheckoutHandler } from './base-checkout-handler'
import { CheckoutPayload } from './customer-order'

export class CustomerInformationValidatorHandler extends BaseCheckoutHandler {
  handle (checkoutPayload: CheckoutPayload): CheckoutPayload {
    const { payload: { customer } } = checkoutPayload

    if (customer.id && customer.email && customer.phone && customer.name) {
      return super.handle(checkoutPayload)
    }

    return checkoutPayload
  }
}
