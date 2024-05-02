const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String, 
        required: true
    },
    ciphers: {
        type: [
            {
                variant: {
                    type: String,
                    enum: ['caesar', 'jefferson', 'vigenere'],
                    required: true
                },
                cipherIDs: {
                    type: Schema.Types.ObjectId,
                    refPath: 'ciphers.type.variant', //ciphers.variant
                    required: true
                }
            }
        ],
        required: true
    },
    // caesarCiphers: {
    //     type: [
    //         {
    //             type: Schema.Types.ObjectId,
    //             ref: 'Caesar'
    //         }
    //     ],
    //     required: true
    // },
    // jeffersonCiphers: {
    //     type: [
    //         {
    //             type: Schema.Types.ObjectId,
    //             ref: 'Jefferson'
    //         }
    //     ],
    //     required: true
    // }
});

module.exports = mongoose.model('User', userSchema);







// const UserModel = new Schema({

//     ciphers:{ 
//         type: [{
//             type: String, // Type of cipher
//             cipher: {
//                 type: Schema.Types.ObjectId,
//                 refPath: 'ciphers.type' // Dynamic reference to target model
//             }
//         }],
//         required: true
//     }
// });
