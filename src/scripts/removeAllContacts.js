import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
    try {
        await writeContacts([]);
        console.log('Contact is clear');
    } catch (error) {
        console.error(error);
    }
};

removeAllContacts();
