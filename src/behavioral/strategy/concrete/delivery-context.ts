import { DeliveryStrategy } from "../abstract/delivery-strategy";

export class DeliveryContext {
  private strategy: DeliveryStrategy = null as any

  setStrategy(strategy: DeliveryStrategy) {
    this.strategy = strategy
  }

  executeStrategy(orderPrice: number): number {
    return this.strategy.calculateDeliveryPrice(orderPrice)
  }

}
