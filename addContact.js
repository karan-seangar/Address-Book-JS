const addressBookManager = require('./addressBookManager');

// Validation regex patterns
const namePattern = /^[A-Z][a-zA-Z]{2,}$/; 
const addressPattern = /^.{4,}$/; 
const zipPattern = /^\d{5}$/; 
const phonePattern = /^\d{3}-\d{3}-\d{4}$/; 
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
const statePattern = /^([A-Z]{2}|.{4,})$/; 

function addContact(addressBookName, firstName, lastName, address, city, state, zip, phoneNumber, email) {
    const addressBook = addressBookManager.getAddressBook(addressBookName);
    if (!addressBook) {
        console.log(`❌ Error: Address book '${addressBookName}' not found.`);
        return;
    }

    if (!namePattern.test(firstName) || !namePattern.test(lastName)) return;
    if (!addressPattern.test(address) || !addressPattern.test(city) || !statePattern.test(state)) return;
    if (!zipPattern.test(zip) || !phonePattern.test(phoneNumber) || !emailPattern.test(email)) return;

    const contact = { id: addressBook.length + 1, firstName, lastName, address, city, state, zip, phoneNumber, email };
    addressBook.push(contact);
    console.log(`✅ Contact added to '${addressBookName}' Address Book.`);
}

module.exports = addContact;
