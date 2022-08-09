import { ValidateComponent, ValidationResponse } from '../abstract/validate-component'

export class ValidateComposite implements ValidateComponent {
  private validators: ValidateComponent[] = []

  add (validators: ValidateComponent[]) {
    validators.forEach(validator => this.validators.push(validator))
  }

  validate (data: any): ValidationResponse {
    for (const validator of this.validators) {
      const validation = validator.validate(data)

      if (!validation.isValid) {
        return validation
      }
    }

    return {
      isValid: true,
      error: ''
    }
  }
}
