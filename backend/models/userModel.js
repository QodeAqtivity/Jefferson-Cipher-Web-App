const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); //uses salt
const validator = require('validator');
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

// static signup method

userSchema.statics.signup = async function (email, password) {

    // validation
    if (!email || !password){
        if (!email && !password) {
            throw Error('You must provide an email and password.');
        } else if (!email) {
            throw Error('You must provide an email.');
        } else if (!password) {
            throw Error('You must provide a password.');
        }
    } 

    if (!validator.isEmail(email)) {
        throw Error('You did not provide a valid email.');
    }

    if (!validator.isStrongPassword(password)) {
        throw Error('You did not provide a strong enough password.');
    }

    const exists = await this.findOne({ email });

    if (exists) {
        throw Error('Email already used for a different account!');
    }

    const salt = await bcrypt.genSalt(10); // random string added : number of rounds 
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ 
        email, 
        password: hash, 
        name: 'fakename', 
        ciphers: [] // array of objects
    });

    return user;
};

userSchema.statics.login = async function(email, password) {
    // validation
    if (!email || !password){
        if (!email && !password) {
            throw Error('You must provide an email and password.');
        } else if (!email) {
            throw Error('You must provide an email.');
        } else if (!password) {
            throw Error('You must provide a password.');
        }
    } 

    const user = await this.findOne({ email });

    if (!user) {
        throw Error('An account with that email does not exist!');
    }

    const passwordMatch = await bcrypt.compare(password, user.password); //password is the plaintext version that the user is currently providing, user.password is the (salt) hashed (correct) password stored on the document
    
    if (!passwordMatch) {
        throw Error('Incorrect password for this account!');
    }

    return user;
};

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
