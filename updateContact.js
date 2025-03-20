const addressBookManager = require('./addressBookManager');

function updateContact(addressBookName, contactId, updatedInfo) {
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

    Object.assign(addressBook[contactIndex], updatedInfo);
    console.log(`✅ Contact updated in '${addressBookName}' Address Book.`);
}

module.exports = updateContact;
