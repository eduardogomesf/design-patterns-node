type PersonalInfo = {
  name: string
  birthDate: Date
  gender: string
}

type Address = {
  postalCode: string
  street: string
  number: number
}

export class Developer {
  public profession?: string
  public personalInfo?: PersonalInfo
  public skills?: string[]
  public address?: Address
}
