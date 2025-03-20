const addressBookManager = require('./addressBookManager');

function viewByLocation(addressBookName, locationType) {
    const addressBook = addressBookManager.getAddressBook(addressBookName);
    if (!addressBook) {
        console.log(`❌ Error: Address book '${addressBookName}' not found.`);
        return;
    }

    // ✅ Group contacts by city or state using reduce()
    const groupedContacts = addressBook.reduce((acc, contact) => {
        const key = locationType === "city" ? contact.city : contact.state;
        if (!acc[key]) acc[key] = [];
        acc[key].push(contact);
        return acc;
    }, {});

    // ✅ Display grouped contacts
    console.log(`\n📌 Viewing Contacts by ${locationType.charAt(0).toUpperCase() + locationType.slice(1)}:`);
    Object.keys(groupedContacts).forEach(location => {
        console.log(`\n📍 ${location}:`);
        groupedContacts[location].map(contact => 
            console.log(`👤 ${contact.firstName} ${contact.lastName} - ${contact.city}, ${contact.state}`)
        );
    });
}

module.exports = viewByLocation;
