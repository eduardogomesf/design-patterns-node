import { Observable } from '../abstract/observable'
import { Observer } from '../abstract/observer'

export type CreateOrderDto = {
  email: string
  cartId: string
  userId: string
}

export class OrderService implements Observable {
  private observers: Observer[] = []

  subscribe (observers: Observer[]): void {
    observers.forEach(observer => {
      if (!this.observers.includes(observer)) {
        this.observers.push(observer)
      }
    })
  }

  unsubscribe (observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer)

    if (observerIndex !== -1) {
      this.observers.slice(observerIndex, 1)
    }
  }

  notify (data?: any): void {
    this.observers.forEach(observer => observer.update(data))
  }

  createOrder (dto: CreateOrderDto) {
    const { cartId, email, userId } = dto

    console.log(`Looking for user with id ${userId} and email ${email}...`)
    console.log(`Creating order from cart with id ${cartId}...`)
    console.log('Notifying observers...')
    this.notify({ email })

    return 'Order created'
  }
}
