const addressBookManager = require('./addressBookManager');

function countContacts(addressBookName) {
    const addressBook = addressBookManager.getAddressBook(addressBookName);
    if (!addressBook) {
        console.log(`❌ Error: Address book '${addressBookName}' not found.`);
        return 0;
    }

    const count = addressBook.reduce((total) => total + 1, 0); // Using reduce()
    console.log(`📊 Total Contacts in '${addressBookName}': ${count}`);
    return count;
}

module.exports = countContacts;
