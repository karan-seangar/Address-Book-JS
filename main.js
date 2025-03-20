const addContact = require('./addContact');
const viewContacts = require('./viewContacts');
const getContact = require('./getContact');
const updateContact = require('./updateContact');
const deleteContact = require('./deleteContact');

// Adding Contacts
console.log("Adding Contacts...");
const contact1 = addContact("John", "Doe", "123 Street", "CityX", "StateY", "12345", "123-456-7890", "john@example.com");
const contact2 = addContact("Jane", "Doe", "456 Avenue", "CityA", "StateB", "67890", "987-654-3210", "jane@example.com");

console.log("Contacts Added:", contact1, contact2);

// Viewing All Contacts
console.log("\nAll Contacts:");
console.log(viewContacts());

// Getting a Contact by ID
console.log("\nFetching Contact with ID 1:");
console.log(getContact(1));

// Updating a Contact
console.log("\nUpdating Contact with ID 1...");
const updatedContact = updateContact(1, { city: "NewCity", phoneNumber: "111-222-3333" });
console.log("Updated Contact:", updatedContact);

// Deleting a Contact
console.log("\nDeleting Contact with ID 2...");
const deletedContact = deleteContact(2);
console.log("Deleted Contact:", deletedContact);

// Viewing All Contacts After Deletion
console.log("\nAll Contacts After Deletion:");
console.log(viewContacts());
