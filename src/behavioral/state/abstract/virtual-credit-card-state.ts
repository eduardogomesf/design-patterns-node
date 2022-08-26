export type Response = {
  message: string
  success: boolean
}

export interface VirtualCreditCardState {
  pay(): Response
  lock(): Response
  unlock(): Response
  getStateName(): string
}
