const Contact = require('../models/contactModel');

const submitContact = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        
        // 1. Check if all fields exist
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // 2. Validate email format using Regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Invalid email format' });
        }

        // 3. Save to database
        await Contact.createContact(name, email, message);
        res.status(201).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error.' });
    }
};

module.exports = { submitContact };