import { BaseCheckoutHandler } from './base-checkout-handler'
import { CheckoutPayload } from './customer-order'

export class CustomerAddressValidatorHandler extends BaseCheckoutHandler {
  handle (checkoutPayload: CheckoutPayload): CheckoutPayload {
    if (this.nextHandler) return this.nextHandler.handle(checkoutPayload)
    return checkoutPayload
  }
}
