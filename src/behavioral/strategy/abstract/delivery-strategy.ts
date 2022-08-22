export interface DeliveryStrategy {
  calculateDeliveryPrice(orderPrice: number): number
}
