const addressBookManager = require('./addressBookManager');

function sortContacts(addressBookName, sortBy) {
    const addressBook = addressBookManager.getAddressBook(addressBookName);
    if (!addressBook) return [];

    const validSortFields = ["city", "state", "zip"];
    if (!validSortFields.includes(sortBy)) {
        console.log("❌ Invalid sorting field! Choose 'city', 'state', or 'zip'.");
        return [];
    }

    return addressBook.slice().sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
}

module.exports = sortContacts;
