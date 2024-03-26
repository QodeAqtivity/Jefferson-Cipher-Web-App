// mongoose documentation: https://mongoosejs.com/docs/schematypes.html

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jeffersonCipherSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    unencrypted: {
        type: String,
        required: true
    },
    encrypted: {
        type: String,
        required: true
    },
    solutionCombo: {
        type: String,
        required: true
    },
    deliveryCombo: {
        type: String,
        required: true
    },
    wheelSet: {
        type: [String],
        required: true
    }
}, { timestamps: true });