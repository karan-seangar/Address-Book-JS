const addressBookManager = require('./addressBookManager');

function getContact(addressBookName, id) {
    const addressBook = addressBookManager.getAddressBook(addressBookName);
    if (!addressBook) return null; 

    return addressBook.find(contact => contact.id === id);
}

module.exports = getContact;
