class Phone {
  constructor(phoneNumber) {
    this.phoneNumber = phoneNumber
    this.contacts = []
  }
  addContact(contact) {

    const number = contact.phoneNumber
    const name = contact.name
    if (!number || !name) return 'Invalid'
    if (number.length !== 10) return 'Invalid'
    this.contacts.push(contact)
    return `${name} added.`
  }
  makeCall(str) {
    for (let i = 0; i < this.contacts.length; i++) {
      const contact = this.contacts[i];
      if (str === contact.phoneNumber) {
        return `Calling ${contact.name}...`
      }
    }

    for (let i = 0; i < this.contacts.length; i++) {
      const names = this.contacts[i].name
      if (str === names) return `Calling ${str}...`
    }

    if (str.length === 10) return `Calling ${str}...`
    return "Invalid"
  }
  removeContact(str) {
    for (let i = 0; i < this.contacts.length; i++) {

      const names = this.contacts[i].name

      if (str === names) {
        this.contacts.splice(i, 1)
        return `${str} removed.`
      }
    }
    return `Contact not found.`
  }
}

class AppleIPhone extends Phone {

  constructor(phoneNumber, model) {
    super(phoneNumber)
    this.model = model
  }

  sendIMessage(phone, msg) {
    let brand = phone.model || ""
    let [type, version] = brand.split(' ')

    if (!phone.model) return `Message could not be sent.`
    if (type === "iPhon") return `Message could not be sent.`

    return `Message: ${msg} - sent from iPhone 6S`
  }
}

module.exports = {
  Phone,
  AppleIPhone,
};
