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
      const names = this.contacts[i].name

      if (str.length !== 10 && !names) return `Invalid`
      if (str === names) return `Calling ${str}...`
      else if (str !== names && str.length === 10) return `Calling ${str}...`
      //why no work
    }
  }
  removeContact(str) {
    for (let i = 0; i < this.contacts.length; i++) {
      const names = this.contacts[i].name

      if (str === names) {
        delete this.contacts[i]
        return `${str} removed.`
      }
    }


    // this.contacts.filter((a) => (!str === a.name))
    // return `${str} removed.`
  }
}

class AppleIPhone extends Phone {

  constructor(phoneNumber, model) {
    super(phoneNumber),
      this.model = model
  }
  sendIMessage() {

  }

}

module.exports = {
  Phone,
  AppleIPhone,
};
