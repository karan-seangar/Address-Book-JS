const addressBookManager = require('./addressBookManager');
const addContact = require('./addContact');
const viewContacts = require('./viewContacts');
const searchContacts = require('./searchContacts');

console.log("\n📘 Creating Address Book...");
addressBookManager.createAddressBook("MyAddressBook");

console.log("\n✅ Adding Contacts...");
addContact("MyAddressBook", "Alice", "Smith", "789 Park Ave", "New York", "NY", "10001", "555-555-5555", "alice.smith@example.com");
addContact("MyAddressBook", "Bob", "Johnson", "456 Oak St", "Los Angeles", "CA", "90001", "444-444-4444", "bob.johnson@example.com");
addContact("MyAddressBook", "Charlie", "Brown", "123 Elm St", "New York", "NY", "10001", "333-333-3333", "charlie.brown@example.com");

console.log("\n📋 Viewing All Contacts...");
viewContacts("MyAddressBook");

console.log("\n🔎 Searching for Contacts in 'New York'...");
searchContacts("MyAddressBook", "city", "New York");

console.log("\n🔎 Searching for Contacts in 'CA'...");
searchContacts("MyAddressBook", "state", "CA");
