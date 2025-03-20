const addressBookManager = require('./addressBookManager');

function deleteContact(addressBookName, contactId) {
    const addressBook = addressBookManager.getAddressBook(addressBookName);
    if (!addressBook) {
        console.log(`❌ Error: Address book '${addressBookName}' not found.`);
        return;
    }

    const contactIndex = addressBook.findIndex(c => c.id === contactId);
    if (contactIndex === -1) {
        console.log(`❌ Error: Contact with ID ${contactId} not found.`);
        return;
    }

    addressBook.splice(contactIndex, 1);
    console.log(`🗑️ Contact deleted from '${addressBookName}' Address Book.`);
}

module.exports = deleteContact;
