const addressBookManager = require('./addressBookManager');
const addContact = require('./addContact');
const updateContact = require('./updateContact');
const deleteContact = require('./deleteContact');
const viewContacts = require('./viewContacts');
const editContact = require('./editContact'); // ✅ Import the new function

console.log("\n📘 Creating Address Book...");
addressBookManager.createAddressBook("MyAddressBook");

console.log("\n✅ Adding Contact...");
addContact("MyAddressBook", "John", "Doe", "123 Main St", "New York", "NY", "12345", "123-456-7890", "john.doe@example.com");

console.log("\n📋 Viewing Contacts After Adding...");
viewContacts("MyAddressBook"); // ✅ View contacts after adding

console.log("\n✏️ Editing Contact by Name...");
editContact("MyAddressBook", "John", "Doe", { phoneNumber: "555-555-5555", city: "Los Angeles" });

console.log("\n📋 Viewing Contacts After Editing...");
viewContacts("MyAddressBook"); // ✅ View contacts after editing

console.log("\n✏️ Updating Contact...");
updateContact("MyAddressBook", 1, { email: "updated.email@example.com" });

console.log("\n📋 Viewing Contacts After Update...");
viewContacts("MyAddressBook"); // ✅ View contacts after updating

console.log("\n🗑️ Deleting Contact...");
deleteContact("MyAddressBook", 1);

console.log("\n📋 Viewing Contacts After Deletion...");
viewContacts("MyAddressBook"); // ✅ View contacts after deleting
