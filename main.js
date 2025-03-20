const addressBookManager = require('./addressBookManager');
const addContact = require('./addContact');
const viewContacts = require('./viewContacts');
const updateContact = require('./updateContact');
const deleteContact = require('./deleteContact');
const getContact = require('./getContact');
const editContact = require('./editContact');
const searchContacts = require('./searchContacts');
const viewByLocation = require('./viewByLocation');

// ✅ Creating Address Book
console.log("\n📘 Creating Address Book...");
addressBookManager.createAddressBook("MyAddressBook");

// ✅ Adding Contacts
console.log("\n✅ Adding Contacts...");
addContact("MyAddressBook", "Alice", "Smith", "789 Park Ave", "New York", "NY", "10001", "555-555-5555", "alice.smith@example.com");
addContact("MyAddressBook", "Bob", "Johnson", "456 Oak St", "Los Angeles", "CA", "90001", "444-444-4444", "bob.johnson@example.com");
addContact("MyAddressBook", "Charlie", "Brown", "123 Elm St", "New York", "NY", "10001", "333-333-3333", "charlie.brown@example.com");

// ✅ Viewing All Contacts
console.log("\n📋 Viewing All Contacts...");
viewContacts("MyAddressBook");

// ✅ Searching Contact by Name
console.log("\n🔍 Searching for Contact...");
console.log(searchContacts("MyAddressBook", "Alice"));

// ✅ Viewing Contact by City
console.log("\n🏙️ Viewing Contacts by City...");
viewByLocation("MyAddressBook", "city");

// ✅ Viewing Contact by State
console.log("\n🌎 Viewing Contacts by State...");
viewByLocation("MyAddressBook", "state");

// ✅ Getting Contact by Name
console.log("\n📇 Getting Contact Details...");
console.log(getContact("MyAddressBook", "Bob"));

// ✅ Editing Contact
console.log("\n✏️ Editing Contact...");
editContact("MyAddressBook", "Alice", { phoneNumber: "111-222-3333", email: "new.email@example.com" });

//✅ Count Contact by city or state
const countContactsByCityState = require('./countContactsByCityState');

console.log("📊 Contact Counts by City & State:");
console.log(countContactsByCityState("MyAddressBook")); 

// ✅ Viewing Contacts After Edit
console.log("\n📋 Viewing All Contacts After Edit...");
viewContacts("MyAddressBook");

// ✅ Updating Contact
console.log("\n🔄 Updating Contact...");
updateContact("MyAddressBook", "Charlie", { city: "San Francisco" });

// ✅ Viewing Contacts After Update
console.log("\n📋 Viewing All Contacts After Update...");
viewContacts("MyAddressBook");

// ✅ Deleting Contact
console.log("\n🗑️ Deleting Contact...");
deleteContact("MyAddressBook", "Bob");

// ✅ Viewing Contacts After Deletion
console.log("\n📋 Viewing All Contacts After Deletion...");
viewContacts("MyAddressBook");

//✅ Sort contact 
const sortContacts = require('./sortContacts');

console.log("📌 Sorting Contacts by City:");
console.log(sortContacts("MyAddressBook", "city"));

console.log("📌 Sorting Contacts by State:");
console.log(sortContacts("MyAddressBook", "state"));

console.log("📌 Sorting Contacts by Zip:");
console.log(sortContacts("MyAddressBook", "zip"));

// ✅ Sort contact by name
const sortContactsByName = require('./sortContactsByName');

console.log("🔠 Sorting Contacts Alphabetically...");
console.log(sortContactsByName("MyAdressBook"));