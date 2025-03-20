const addressBookManager = require('./addressBookManager');

function deleteContactByName(addressBookName, firstName, lastName) {
    const addressBook = addressBookManager.getAddressBook(addressBookName);
    if (!addressBook) {
        console.log(`❌ Error: Address book '${addressBookName}' not found.`);
        return null;
    }

    const index = addressBook.findIndex(contact => contact.firstName === firstName && contact.lastName === lastName);
    if (index === -1) {
        console.log(`❌ Error: Contact '${firstName} ${lastName}' not found.`);
        return null;
    }

    const deletedContact = addressBook.splice(index, 1)[0];
    console.log(`✅ Contact '${firstName} ${lastName}' deleted successfully.`);
    return deletedContact;
}

module.exports = deleteContactByName;
