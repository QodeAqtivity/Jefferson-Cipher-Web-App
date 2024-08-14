const { caesarShiftEncryption } = require('./../cipher logic/CaesarShift');
const CaesarCipher = require('./../models/caesarCipherModel');
const mongoose = require('mongoose');

// get ALL public caesar ciphers
const getAllCaesarCiphersPublic = async(req, res) => {
    const caesarCiphersPublic = await CaesarCipher.find({"accessibility" : "public"}).sort({createdAt: -1});

    res.status(200).json(caesarCiphersPublic);
}

// create a single Caesar Cipher
const createCaesarCipherPublic = async(req, res) => {
    const { unencrypted, shift, accessibility } = req.body;
    const { encrypted } = caesarShiftEncryption(unencrypted, shift);

    try {
        const caesarCipher = await CaesarCipher.create({unencrypted, encrypted, shift, accessibility});
        res.status(200).json(caesarCipher);
        console.log('Successfully Created');
    } catch (error) {
        res.status(400).json({error: error.message});
        console.log('Could not create Caesar Cipher');
    }
};

// get ALL caesar ciphers (Admin)
const getAllCaesarCiphers = async(req, res) => {
    const caesarCiphers = await CaesarCipher.find({}).sort({createdAt: -1});

    res.status(200).json(caesarCiphers);
};

// get a single/specific Caesar Cipher
const getCaesarCipher = async(req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Caesar Cipher'});
    }

    const caesarCipher = await CaesarCipher.findById(id);

    if (!caesarCipher){
        return res.status(400).json({error: 'No such Caesar Cipher'});
    }

    res.status(200).json(caesarCipher);
};

// create a single Caesar Cipher
const createCaesarCipher = async(req, res) => {
    const { unencrypted, shift, accessibility } = req.body;

    const { encrypted } = caesarShiftEncryption(unencrypted, shift);

    try {
        const caesarCipher = await CaesarCipher.create({unencrypted, encrypted, shift, accessibility});
        res.status(200).json(caesarCipher);
        console.log('Successfully Created');
    } catch (error) {
        res.status(400).json({error: error.message});
        console.log('Could not create Caesar Cipher');
    }
};

// Deleting Specific caesar cipher
const deleteCaesarCipher = async(req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        console.log('Not a valid mongo document ID');
        return res.status(404).json({error: 'No such Caesar Cipher.  Thus cannot delete.'});
    }

    const caesarCipher = await CaesarCipher.findOneAndDelete({_id: id});

    if (!caesarCipher){
        console.log('No such Caesar Cipher exists');
        return res.status(400).json({error: 'No such Caesar Cipher.  Thus cannot delete'});
    }

    res.status(200).json(caesarCipher);
};

// updating Caesar Cipher
const updateCaesarCipher = async(req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectsId.isValid(id)){
        console.log('Not a valid mongo document ID');
        return res.status(404).json({error: 'No such Caesar Cipher.  Thus cannot update.'})
    }

    // const caesarCipher = await CaesarCipher.findOneAndDelete()
};

module.exports = {
    getAllCaesarCiphersPublic,
    createCaesarCipherPublic,
    getAllCaesarCiphers,
    getCaesarCipher,
    createCaesarCipher,
    deleteCaesarCipher,
    updateCaesarCipher
};