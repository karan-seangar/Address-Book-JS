const addressBookManager = require('./addressBookManager');
const addContact = require('./addContact');
const updateContact = require('./updateContact');
const deleteContact = require('./deleteContact');
const viewContacts = require('./viewContacts'); // Import the new function

console.log("\n📘 Creating Address Book...");
addressBookManager.createAddressBook("MyAddressBook");

console.log("\n✅ Adding Contact...");
addContact("MyAddressBook", "John", "Doe", "123 Main St", "New York", "NY", "12345", "123-456-7890", "john.doe@example.com");

console.log("\n📋 Viewing Contacts After Adding...");
viewContacts("MyAddressBook"); // ✅ View contacts after adding

console.log("\n✏️ Updating Contact...");
updateContact("MyAddressBook", 1, { phoneNumber: "111-222-3333", email: "new.email@example.com" });

console.log("\n📋 Viewing Contacts After Update...");
viewContacts("MyAddressBook"); // ✅ View contacts after updating

console.log("\n🗑️ Deleting Contact...");
deleteContact("MyAddressBook", 1);

console.log("\n📋 Viewing Contacts After Deletion...");
viewContacts("MyAddressBook"); // ✅ View contacts after deleting
