export class EmailService {
  sendEmail (email: string, template: string) {
    return { success: true, message: 'email sent successfully' }
  }
}
