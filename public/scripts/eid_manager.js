
class EIDManager {
    constructor() {
        this.entries = new Map();
        this.loadEntries();
    }

    async loadEntries() {
        try {
            const response = await fetch('/database/eid_entries');
            const entries = await response.json();
            this.entries.clear();
            entries.forEach(entry => this.entries.set(entry.id, entry));
            return entries;
        } catch (error) {
            console.error('Error loading EID entries:', error);
            return [];
        }
    }

    validateNewId(id) {
        if (!/^\d{3,}$/.test(id)) return false;
        if (['000', '001'].includes(id)) return false;
        return !this.entries.has(id);
    }

    async addEntry(entry) {
        if (!this.validateNewId(entry.id)) {
            throw new Error('Invalid EID ID');
        }
        this.entries.set(entry.id, entry);
    }

    async deleteEntry(id) {
        if (!this.entries.has(id)) {
            throw new Error('EID not found');
        }
        this.entries.delete(id);
    }
}
