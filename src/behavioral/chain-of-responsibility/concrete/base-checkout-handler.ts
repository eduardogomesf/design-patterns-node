import { CheckoutPayload } from './customer-order'

export abstract class BaseCheckoutHandler {
  // eslint-disable-next-line no-use-before-define
  protected nextHandler: BaseCheckoutHandler | null = null

  setNextHandler (handler: BaseCheckoutHandler): BaseCheckoutHandler {
    this.nextHandler = handler
    return handler
  }

  handle (checkoutPayload: CheckoutPayload): CheckoutPayload {
    if (this.nextHandler) return this.nextHandler.handle(checkoutPayload)
    return checkoutPayload
  }
}
