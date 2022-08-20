import { Observer } from '../abstract/observer'

export class MobileNotificationService implements Observer {
  update (data: any): void {
    this.sendOrderCreatedNotification(data.email)
  }

  sendOrderCreatedNotification (email: string) {
    console.log(`Mobile notification sent to devices linked to the following email: ${email}`)
  }
}
