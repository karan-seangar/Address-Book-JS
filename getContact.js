const addressBook = require('./addressBook');

function getContact(id) {
    return addressBook.getContactById(id);
}

module.exports = getContact;
