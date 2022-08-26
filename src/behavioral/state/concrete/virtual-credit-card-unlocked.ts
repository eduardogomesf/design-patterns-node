import { Response, VirtualCreditCardState } from '../abstract/virtual-credit-card-state'
import { VirtualCreditCardLocked } from './virtual-credit-card-locked'

export class VirtualCreditCardUnlocked implements VirtualCreditCardState {
  private name = 'Unlocked'

  constructor (private virtualCreditCardContext: any) {}

  getStateName (): string {
    return this.name
  }

  pay (): Response {
    return {
      success: true,
      message: 'Payment completed'
    }
  }

  lock (): Response {
    this.virtualCreditCardContext.setState(new VirtualCreditCardLocked(this.virtualCreditCardContext))
    return {
      success: true,
      message: 'Credit card locked'
    }
  }

  unlock (): Response {
    return {
      success: false,
      message: 'Your credit card is already unlocked'
    }
  }
}
