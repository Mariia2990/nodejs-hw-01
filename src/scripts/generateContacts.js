import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (number) => {
    try {
        const existingContacts = await readContacts();
        const newContacts = [];
        for (let i = 0; i < number; i++) {
            newContacts.push(createFakeContact());
        }
        const updatedContacts = [...existingContacts, ...newContacts];
        await writeContacts(updatedContacts);
        console.log(`${number} new contacts successfully generated and added.`);

    } catch (error) {
console.error('Error generating contacts:', error);
    }
};

generateContacts(5);
