const addressBookManager = require('./addressBookManager');
const addContact = require('./addContact');
const updateContact = require('./updateContact');
const deleteContact = require('./deleteContact');
const deleteContactByName = require('./deleteContactByName'); 
const viewContacts = require('./viewContacts');
const editContact = require('./editContact');

console.log("\n📘 Creating Address Book...");
addressBookManager.createAddressBook("MyAddressBook");

console.log("\n✅ Adding Contact...");
addContact("MyAddressBook", "John", "Doe", "123 Main St", "New York", "NY", "12345", "123-456-7890", "john.doe@example.com");

console.log("\n📋 Viewing Contacts After Adding...");
viewContacts("MyAddressBook");

console.log("\n✏️ Editing Contact by Name...");
editContact("MyAddressBook", "John", "Doe", { phoneNumber: "555-555-5555", city: "Los Angeles" });

console.log("\n📋 Viewing Contacts After Editing...");
viewContacts("MyAddressBook");

console.log("\n✏️ Updating Contact...");
updateContact("MyAddressBook", 1, { email: "updated.email@example.com" });

console.log("\n📋 Viewing Contacts After Update...");
viewContacts("MyAddressBook");

console.log("\n🗑️ Deleting Contact by Name...");
deleteContactByName("MyAddressBook", "John", "Doe"); // ✅ New delete by name

console.log("\n📋 Viewing Contacts After Name Deletion...");
viewContacts("MyAddressBook");

console.log("\n🗑️ Deleting Contact by ID...");
deleteContact("MyAddressBook", 1);

console.log("\n📋 Viewing Contacts After ID Deletion...");
viewContacts("MyAddressBook");
