export class EmailTemplates {
  getEmailTemplateByTypeOfEmail (typeOfEmail: string) {
    if (typeOfEmail === 'new-user') {
      return '<p>Welcome to the website!</p>'
    } else {
      return null
    }
  }
}
