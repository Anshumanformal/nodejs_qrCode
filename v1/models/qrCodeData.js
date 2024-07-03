const mongoose = require('mongoose');

const QRCodeData = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    uniqueURL: {
        type: String,
        required: true
    },
    qrCodeData: {
        type: String,
        required: true
    }
});

module.exports.QRCodeData = mongoose.model('QRCodeData', QRCodeData);


