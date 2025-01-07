import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    try {
    return JSON.parse(await readContacts()).length;
    } catch (error) {
        console.error('Error', error);
    }
};

console.log(await countContacts());
