const addressBookManager = require('./addressBookManager');
const addContact = require('./addContact');
const viewContacts = require('./viewContacts');
const countContacts = require('./countContacts');

console.log("\n📘 Creating Address Book...");
addressBookManager.createAddressBook("MyAddressBook");

console.log("\n✅ Adding First Contact...");
addContact("MyAddressBook", "John", "Doe", "123 Main St", "New York", "NY", "12345", "123-456-7890", "john.doe@example.com");

console.log("\n⚠️ Attempting to Add Duplicate Contact...");
addContact("MyAddressBook", "John", "Doe", "456 Another St", "Los Angeles", "CA", "54321", "987-654-3210", "john.doe@newdomain.com");

console.log("\n📋 Viewing Contacts...");
viewContacts("MyAddressBook");

console.log("\n📊 Counting Contacts...");
countContacts("MyAddressBook");
