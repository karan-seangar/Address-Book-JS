const addressBook = require('./addressBook');

function updateContact(id, updatedInfo) {
    return addressBook.updateContact(id, updatedInfo);
}

module.exports = updateContact;
