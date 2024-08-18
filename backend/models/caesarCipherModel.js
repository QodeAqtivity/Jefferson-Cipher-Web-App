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
    visibility: {
        type: String,
        required: true
    },
    user_id: {
        type: String, 
        required: true
    }, 
    is_comment: {
        type: Boolean,
        required: true
    },
    has_comments: {
        type: Boolean,
        required: true
    },
    parent: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Caesar Cipher', caesarCipherSchema);