import { BaseCheckoutHandler } from './base-checkout-handler'
import { CheckoutPayload } from './customer-order'

export class ProcessOrderHandler extends BaseCheckoutHandler {
  handle (checkoutPayload: CheckoutPayload): CheckoutPayload {
    if (checkoutPayload.payload.customer && checkoutPayload.payload.address) {
      checkoutPayload.approved = true
    }

    return checkoutPayload
  }
}
