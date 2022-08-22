import assert from "assert";
import { CarDeliveryStrategy } from "./concrete/car-delivery-strategy";
import { DeliveryContext } from "./concrete/delivery-context";
import { MotorcycleDeliveryStrategy } from "./concrete/motorcycle-delivery-strategy";
import { TruckDeliveryStrategy } from "./concrete/truck-delivery-strategy";

const motorcycleDeliveryStrategy = new MotorcycleDeliveryStrategy()
const carDeliveryStrategy = new CarDeliveryStrategy()
const truckDeliveryStrategy = new TruckDeliveryStrategy()

const deliveryContext = new DeliveryContext()

const objectSizes = {
  small: 'SMALL',
  medium: 'MEDIUM',
  large: 'LARGE'
}

function getDeliveryPrice(orderPrice: number, objectSize: string) {
  if(objectSize === objectSizes.small) {
    deliveryContext.setStrategy(motorcycleDeliveryStrategy)
  } else if (objectSize === objectSizes.medium) {
    deliveryContext.setStrategy(carDeliveryStrategy)
  } else if (objectSize === objectSizes.large) {
    deliveryContext.setStrategy(truckDeliveryStrategy)
  }

  return deliveryContext.executeStrategy(orderPrice)
}

const motorcycleDeliveryPrice = getDeliveryPrice(130, objectSizes.small)
const carDeliveryPrice = getDeliveryPrice(320, objectSizes.medium)
const truckDeliveryPrice = getDeliveryPrice(780, objectSizes.large)

// Logs
console.log('-'.repeat(100))
console.log('Motocycle delivery price', motorcycleDeliveryPrice)
console.log('Car delivery price', carDeliveryPrice)
console.log('Truck delivery price', truckDeliveryPrice)
console.log('-'.repeat(100))

// Tests
assert.equal(motorcycleDeliveryPrice, 6.5)
assert.equal(carDeliveryPrice, 24)
assert.equal(truckDeliveryPrice, 93.6)

