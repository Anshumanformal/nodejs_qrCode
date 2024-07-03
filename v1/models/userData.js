const mongoose = require('mongoose');

const UserData = new mongoose.Schema({
    ID: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Phone: {
        type: String,
        required: true
    }
});

module.exports.UserData = mongoose.model('UserData', UserData);
