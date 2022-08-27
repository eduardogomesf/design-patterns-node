type CustomerPersonalInformation = {
  id: string
  name: string
  email: string
  phone: number
}

type CustomerAddress = {
  cep: string
  country: string
  stateOrProvince: string
  neighborhood: string
  number: string
}

export interface CheckoutDto {
  customer: CustomerPersonalInformation
  address: CustomerAddress
}

export class CheckoutPayload {
  public approved = false

  constructor (private payload: CheckoutDto) {}
}
