const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const caesarCipherSchema = new Schema({
    unencrypted: {
        type: String,
        required: true
    },
    encrypted: {
        type: String,
        required: true,
    },
    shift: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Caesar Cipher', caesarCipherSchema);