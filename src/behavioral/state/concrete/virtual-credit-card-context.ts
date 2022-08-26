import { Response, VirtualCreditCardState } from '../abstract/virtual-credit-card-state'
import { VirtualCreditCardLocked } from './virtual-credit-card-locked'

export class VirtualCreditCardContext implements VirtualCreditCardState {
  private state: VirtualCreditCardState = new VirtualCreditCardLocked(this)

  setState (virtualCreditCardState: VirtualCreditCardState) {
    this.state = virtualCreditCardState
  }

  pay (): Response {
    return this.state.pay()
  }

  lock (): Response {
    return this.state.lock()
  }

  unlock (): Response {
    return this.state.unlock()
  }

  getStateName (): string {
    return this.state.getStateName()
  }
}
