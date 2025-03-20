const addressBookManager = require('./addressBookManager');

function editContact(addressBookName, firstName, lastName, updatedInfo) {
    const addressBook = addressBookManager.getAddressBook(addressBookName);
    if (!addressBook) {
        console.log(`❌ Error: Address book '${addressBookName}' not found.`);
        return null;
    }

    const contact = addressBook.find(contact => contact.firstName === firstName && contact.lastName === lastName);
    if (!contact) {
        console.log(`❌ Error: Contact '${firstName} ${lastName}' not found.`);
        return null;
    }

    Object.assign(contact, updatedInfo);
    console.log(`✅ Contact '${firstName} ${lastName}' updated successfully.`);
    return contact;
}

module.exports = editContact;
