import { EmailService } from './email-service'
import { EmailTemplates } from './email-templates'
import { ValidateInput } from './validate-input'

export class SendEmailFacade {
  private validateInput: ValidateInput = new ValidateInput()
  private emailTemplates: EmailTemplates = new EmailTemplates()
  private emailService: EmailService = new EmailService()

  send (email: string, typeOfEmail: string) {
    const isValidEmail = this.validateInput.isValidEmail(email)

    if (!isValidEmail) {
      return { error: 'invalid email', success: false }
    }

    const emailTemplate = this.emailTemplates.getEmailTemplateByTypeOfEmail(typeOfEmail)

    if (!emailTemplate) {
      return { error: 'invalid type of email', success: false }
    }

    const sendEmailResut = this.emailService.sendEmail(email, emailTemplate)

    return { success: sendEmailResut.success }
  }
}
