type CustomerPersonalInformation = {
  id: string
  name: string
  email: string
  phone: string
}

type CustomerAddress = {
  cep: string
  country: string
  stateOrProvince: string
  neighborhood: string
  number: string
  city: string
}

export interface CheckoutDto {
  customer: CustomerPersonalInformation
  address: CustomerAddress
}

export class CheckoutPayload {
  public approved = false

  constructor (public payload: CheckoutDto) { }
}
