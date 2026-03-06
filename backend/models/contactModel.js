const db = require('../config/db');

const createContact = async (name, email, message) => {
    const [result] = await db.execute(
        'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
        [name, email, message]
    );
    return result;
};

module.exports = { createContact };