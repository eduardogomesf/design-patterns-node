import { DeliveryStrategy } from '../abstract/delivery-strategy'

export class MotorcycleDeliveryStrategy implements DeliveryStrategy {
  calculateDeliveryPrice (orderPrice: number): number {
    const deliveryPercentage = 5
    return orderPrice * (deliveryPercentage / 100)
  }
}
