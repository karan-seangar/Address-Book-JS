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

    // ✅ Check for duplicate contacts using `some()`
    const isDuplicate = addressBook.some(contact => contact.firstName === firstName && contact.lastName === lastName);
    if (isDuplicate) {
        console.log(`❌ Error: Contact '${firstName} ${lastName}' already exists in '${addressBookName}'.`);
        return;
    }

    // ✅ Validate input fields
    if (!namePattern.test(firstName) || !namePattern.test(lastName)) {
        console.log("❌ Error: Invalid Name! First and Last Name must start with a capital letter and have at least 3 characters.");
        return;
    }
    if (!addressPattern.test(address) || !addressPattern.test(city) || !statePattern.test(state)) {
        console.log("❌ Error: Address, City, and State must have at least 4 characters.");
        return;
    }
    if (!zipPattern.test(zip)) {
        console.log("❌ Error: Invalid Zip Code! Must be exactly 5 digits.");
        return;
    }
    if (!phonePattern.test(phoneNumber)) {
        console.log("❌ Error: Invalid Phone Number! Format must be XXX-XXX-XXXX.");
        return;
    }
    if (!emailPattern.test(email)) {
        console.log("❌ Error: Invalid Email Format.");
        return;
    }

    // ✅ Create new contact and add it
    const contact = { id: addressBook.length + 1, firstName, lastName, address, city, state, zip, phoneNumber, email };
    addressBook.push(contact);
    console.log(`✅ Contact '${firstName} ${lastName}' added successfully to '${addressBookName}'.`);
}

module.exports = addContact;
