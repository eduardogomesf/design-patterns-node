import { Response, VirtualCreditCardState } from '../abstract/virtual-credit-card-state'
import { VirtualCreditCardUnlocked } from './virtual-credit-card-unlocked'

export class VirtualCreditCardLocked implements VirtualCreditCardState {
  private name = 'Locked'

  constructor (private virtualCreditCardContext: any) {}

  getStateName (): string {
    return this.name
  }

  pay (): Response {
    return {
      success: false,
      message: 'You cannot use your credit card while it is locked'
    }
  }

  lock (): Response {
    return {
      success: false,
      message: 'Your credit card is already locked'
    }
  }

  unlock (): Response {
    this.virtualCreditCardContext.setState(new VirtualCreditCardUnlocked(this.virtualCreditCardContext))
    return {
      success: true,
      message: 'Credit card unlocked'
    }
  }
}
