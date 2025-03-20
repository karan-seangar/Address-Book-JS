const addressBookManager = require('./addressBookManager');

function viewContacts(addressBookName) {
    const addressBook = addressBookManager.getAddressBook(addressBookName);
    if (!addressBook) {
        console.log(`❌ Error: Address book '${addressBookName}' not found.`);
        return [];
    }

    console.log(`\n📋 Viewing Contacts in '${addressBookName}' Address Book:`);
    console.log(addressBook); // Displays contacts in a neat table format
    return addressBook;
}

module.exports = viewContacts;
