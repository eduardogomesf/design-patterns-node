import { CheckoutPayload } from '../concrete/customer-order'

export interface CheckoutHandler {
  request: () => CheckoutPayload
}
