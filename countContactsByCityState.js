const addressBookManager = require('./addressBookManager');

function countContactsByCityState(addressBookName) {
    const addressBook = addressBookManager.getAddressBook(addressBookName);
    if (!addressBook) return { cityCounts: {}, stateCounts: {} };

    const cityCounts = addressBook.reduce((acc, contact) => {
        acc[contact.city] = (acc[contact.city] || 0) + 1;
        return acc;
    }, {});

    const stateCounts = addressBook.reduce((acc, contact) => {
        acc[contact.state] = (acc[contact.state] || 0) + 1;
        return acc;
    }, {});

    return { cityCounts, stateCounts };
}

module.exports = countContactsByCityState;
