const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: false
    },
    last_name: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    user_id: {
        type: String,
        required: true
    }
});

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;