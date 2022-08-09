export interface ValidationResponse {
  isValid: boolean
  error: string
}

export interface ValidateComponent {
  validate: (data: any) => ValidationResponse
}
