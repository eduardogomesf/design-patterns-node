import { BaseCheckoutHandler } from './base-checkout-handler'
import { CheckoutPayload } from './customer-order'

export class CustomerAddressValidatorHandler extends BaseCheckoutHandler {
  handle (checkoutPayload: CheckoutPayload): CheckoutPayload {
    const { payload: { address } } = checkoutPayload

    if (address.cep && address.country && address.neighborhood && address.number && address.stateOrProvince && address.city) {
      return super.handle(checkoutPayload)
    }

    return checkoutPayload
  }
}
