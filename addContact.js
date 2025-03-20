const addressBook = require('./addressBook');

function addContact(firstName, lastName, address, city, state, zip, phoneNumber, email) {
    const contact = { firstName, lastName, address, city, state, zip, phoneNumber, email };
    return addressBook.addContact(contact);
}

module.exports = addContact;
