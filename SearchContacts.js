const addressBookManager = require('./addressBookManager');

function searchContacts(addressBookName, locationType, locationValue) {
    const addressBook = addressBookManager.getAddressBook(addressBookName);
    if (!addressBook) {
        console.log(`❌ Error: Address book '${addressBookName}' not found.`);
        return [];
    }

    // ✅ Filter contacts by city or state
    const results = addressBook.filter(contact => 
        locationType === "city" ? contact.city === locationValue : contact.state === locationValue
    );

    // ✅ Display search results
    if (results.length > 0) {
        console.log(`\n🔍 Found ${results.length} contact(s) in ${locationValue}:`);
        results.map(contact => console.log(`👤 ${contact.firstName} ${contact.lastName} - ${contact.city}, ${contact.state}`));
    } else {
        console.log(`❌ No contacts found in ${locationValue}.`);
    }

    return results;
}

module.exports = searchContacts;
