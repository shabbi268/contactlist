const mongoose = require('mongoose');
// //connect to mongodb
// mongoose.connect('mongodb://localhost:27017/contactlist');

// //on connection and error
// mongoose.connection.on('connected', ()=>{
//     console.log("Successfully Connected to DB @27017");
// });
// mongoose.connection.on('error', (err)=>{
//     if(err){
//         console.log(`Error while connecting to DB ${err}`);
//     }
// });

const ContactSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;