const addressBook = require('./addressBook');

function deleteContact(id) {
    return addressBook.deleteContact(id);
}

module.exports = deleteContact;
