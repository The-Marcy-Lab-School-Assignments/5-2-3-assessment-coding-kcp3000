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
      /** FEEDBACK: I highly encourage you to use {} so that you can clearly see where your code blocks are. 
       * This method also needs to be edited so that it can also check for a phoneNumber! In the tests for the iPhone that checks for inheritance, a phone number is passed in but we return calling and the name of the contact!
       * This might mean that we need to check if the contact exists in our contacts and then return different messages based on whether it is found. */
      //why no work
    }
  }
  removeContact(str) {
    for (let i = 0; i < this.contacts.length; i++) {
      const names = this.contacts[i].name
/** FEEDBACK: Yes we can use delete from an object however will this delete our entire object from our array?
 */
      if (str === names) {
        delete this.contacts[i]
        return `${str} removed.`
      }
    }


    // this.contacts.filter((a) => (!str === a.name))
    // return `${str} removed.`
  }
  /** FEEDBACK: What are some edge cases we need to watch out for? */
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
