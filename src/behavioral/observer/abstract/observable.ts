import { Observer } from './observer'

export interface Observable {
  subscribe (observers: Observer[]): void
  unsubscribe (observer: Observer): void
  notify (data?: any): void
}
