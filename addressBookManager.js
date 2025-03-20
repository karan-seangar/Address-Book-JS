class AddressBookManager {
    constructor() {
        this.addressBooks = {}; // Store multiple address books
    }

    createAddressBook(name) {
        if (!this.addressBooks[name]) {
            this.addressBooks[name] = []; // Initialize empty address book
        }
    }

    getAddressBook(name) {
        return this.addressBooks[name] || null; // Return the address book if it exists
    }
}

module.exports = new AddressBookManager();
