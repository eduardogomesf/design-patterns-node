import { Observer } from '../abstract/observer'

export class EmailNotificationService implements Observer {
  update (data: any): void {
    this.sendOrderCreatedEmail(data.email)
  }

  sendOrderCreatedEmail (email: string) {
    console.log(`Email sent to ${email}`)
  }
}
