import { DeliveryStrategy } from '../abstract/delivery-strategy'

export class TruckDeliveryStrategy implements DeliveryStrategy {
  calculateDeliveryPrice (orderPrice: number): number {
    const basePriceToCalculatePercentage = 500
    const deliveryPercentage = orderPrice > basePriceToCalculatePercentage ? 12 : 10
    return orderPrice * (deliveryPercentage / 100)
  }
}
