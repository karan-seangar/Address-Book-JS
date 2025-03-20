class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        contact.id = this.contacts.length + 1;
        this.contacts.push(contact);
        return contact;
    }

    getAllContacts() {
        return this.contacts;
    }

    getContactById(id) {
        return this.contacts.find(contact => contact.id === id);
    }

    updateContact(id, updatedInfo) {
        const contact = this.getContactById(id);
        if (contact) {
            Object.assign(contact, updatedInfo);
            return contact;
        }
        return null;
    }

    deleteContact(id) {
        const index = this.contacts.findIndex(contact => contact.id === id);
        if (index !== -1) {
            return this.contacts.splice(index, 1)[0];
        }
        return null;
    }
}

module.exports = new AddressBook();
