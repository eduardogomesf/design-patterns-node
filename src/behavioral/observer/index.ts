import assert from 'assert'
import { EmailNotificationService } from './concrete/email-notification-service'
import { MobileNotificationService } from './concrete/mobile-notification-service'
import { OrderService } from './concrete/order-service'

const emailNotificationService = new EmailNotificationService()
const mobileNotificationService = new MobileNotificationService()
const orderService = new OrderService()

orderService.subscribe([emailNotificationService, mobileNotificationService])

const createOrderResult = orderService.createOrder({ cartId: '123', email: 'eduardo@mail.com', userId: '123' })

// Logs
console.log('-'.repeat(100))
console.log('Create order result: ', createOrderResult)
console.log('-'.repeat(100))

// Tests
assert.equal(createOrderResult, 'Order created')
