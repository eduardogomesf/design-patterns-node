import { DeliveryStrategy } from "../abstract/delivery-strategy";

export class CarDeliveryStrategy implements DeliveryStrategy {

  calculateDeliveryPrice(orderPrice: number): number {
    const basePriceToCalculatePercentage = 300
    const deliveryPercentage = orderPrice > basePriceToCalculatePercentage ? 7.5 : 6
    return orderPrice * (deliveryPercentage / 100)
  }

}
