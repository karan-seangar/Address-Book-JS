const addressBook = require('./addressBook');

function viewContacts() {
    return addressBook.getAllContacts();
}

module.exports = viewContacts;
