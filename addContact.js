const addressBook = require('./addressBook');

// Validation regex patterns
const namePattern = /^[A-Z][a-zA-Z]{2,}$/; // First letter capital + at least 3 characters
const addressPattern = /^.{4,}$/; // Minimum 4 characters
const zipPattern = /^\d{5}$/; // Exactly 5 digits
const phonePattern = /^\d{3}-\d{3}-\d{4}$/; // Phone number format XXX-XXX-XXXX
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Standard email format
const statePattern = /^([A-Z]{2}|.{4,})$/; // Either 2 uppercase letters (NY, CA) or at least 4 characters

function addContact(firstName, lastName, address, city, state, zip, phoneNumber, email) {
    // Validate first name
    if (!namePattern.test(firstName)) return;
    
    // Validate last name
    if (!namePattern.test(lastName)) return;
    
    // Validate address
    if (!addressPattern.test(address)) return;
    
    // Validate city
    if (!addressPattern.test(city)) return;
    
    // ✅ FIX: Accepts either a **2-letter uppercase state abbreviation** or a **full state name**
    if (!statePattern.test(state)) return;
    
    // Validate ZIP code
    if (!zipPattern.test(zip)) return;
    
    // Validate phone number format
    if (!phonePattern.test(phoneNumber)) return;
    
    // Validate email format
    if (!emailPattern.test(email)) return;

    // If all validations pass, add the contact
    const contact = { firstName, lastName, address, city, state, zip, phoneNumber, email };
    return addressBook.addContact(contact);
}

module.exports = addContact;
