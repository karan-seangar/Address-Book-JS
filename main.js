const addressBookManager = require('./addressBookManager');
const addContact = require('./addContact');
const updateContact = require('./updateContact');
const deleteContact = require('./deleteContact');
const deleteContactByName = require('./deleteContactByName');
const viewContacts = require('./viewContacts');
const editContact = require('./editContact');
const countContacts = require('./countContacts'); // ✅ Import new function

console.log("\n📘 Creating Address Book...");
addressBookManager.createAddressBook("MyAddressBook");

console.log("\n✅ Adding Contact...");
addContact("MyAddressBook", "John", "Doe", "123 Main St", "New York", "NY", "12345", "123-456-7890", "john.doe@example.com");

console.log("\n📊 Counting Contacts After Adding...");
countContacts("MyAddressBook"); // ✅ Count contacts

console.log("\n📋 Viewing Contacts...");
viewContacts("MyAddressBook");

console.log("\n✏️ Editing Contact by Name...");
editContact("MyAddressBook", "John", "Doe", { phoneNumber: "555-555-5555", city: "Los Angeles" });

console.log("\n📊 Counting Contacts After Editing...");
countContacts("MyAddressBook"); // ✅ Count contacts

console.log("\n✏️ Updating Contact...");
updateContact("MyAddressBook", 1, { email: "updated.email@example.com" });

console.log("\n📊 Counting Contacts After Update...");
countContacts("MyAddressBook"); // ✅ Count contacts

console.log("\n🗑️ Deleting Contact by Name...");
deleteContactByName("MyAddressBook", "John", "Doe");

console.log("\n📊 Counting Contacts After Name Deletion...");
countContacts("MyAddressBook"); // ✅ Count contacts

console.log("\n🗑️ Deleting Contact by ID...");
deleteContact("MyAddressBook", 1);

console.log("\n📊 Counting Contacts After ID Deletion...");
countContacts("MyAddressBook"); // ✅ Count contacts
