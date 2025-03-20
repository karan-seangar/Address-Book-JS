const addressBookManager = require('./addressBookManager');

function sortContactsByName(addressBookName) {
    const addressBook = addressBookManager.getAddressBook(addressBookName);

    // Debugging logs
    console.log("📌 Retrieved Address Book for Sorting:", addressBook); 

    if (!addressBook) {
        console.log("❌ Address Book not found!");
        return [];
    }

    if (addressBook.length === 0) {
        console.log("⚠️ Address Book is empty!");
        return [];
    }

    const sortedContacts = addressBook.slice().sort((a, b) =>
        (a.firstName + " " + a.lastName).localeCompare(b.firstName + " " + b.lastName)
    );

    console.log("✅ Sorted Contacts by Name:", sortedContacts);
    return sortedContacts;
}

module.exports = sortContactsByName;
