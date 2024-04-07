const { randomGenerateWheelSet } = require('./../cipher logic/WheelLogic');

const JeffersonCipher = require('./../models/jeffersonCipherModel');
const mongoose = require('mongoose');

// get all Jefferson Ciphers
const getAllJeffersonCiphers = async(req, res) => {
    const jeffersonCiphers = await JeffersonCipher.find({}).sort({createdAt: -1});

    res.status(200).json(jeffersonCiphers);
};


// get a single/specific Jefferson Cipher
const getJeffersonCipher = async(req, res) => {

    const { id } = req.params;

    //validate that id is mongoose/mongo id object type
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Jefferson Cipher.'});
    }

    const jeffersonCipher = await JeffersonCipher.findById(id);
    
    if (!jeffersonCipher){
        return res.status(400).json({error: 'No such Jefferson Cipher'})
    }

    res.status(200).json(jeffersonCipher);
}


// create a single Jefferson Cipher
const createJeffersonCipher = async(req, res) => {
    //input already validated client side

    const {unencrypted} = req.body;

    const {encrypted, solutionCombo, deliveryCombo, wheelSet} = randomGenerateWheelSet(unencrypted);

    // add doc to db
    try {
        const jeffersonCipher = await JeffersonCipher.create({unencrypted, encrypted, solutionCombo, deliveryCombo, wheelSet});  
        res.status(200).json(jeffersonCipher);
        console.log('Successfully Created.');
    } catch (error ) {
        res.status(400).json({error: error.message});
    }

    // res.json({mssg: 'POST a single/specific jefferson cipher'});

};


const deleteJeffersonCipher = async(req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Jefferson Cipher. Thus cannot delete.'});
    }

    const jeffersonCipher = await JeffersonCipher.findOneAndDelete({_id: id});

    if (!jeffersonCipher){
        return res.status(400).json({error: 'No such Jefferson Cipher.  Thus cannot delete'});
    }

    res.status(200).json(jeffersonCipher);
}

// updating Jefferson Cipher
const updateJeffersonCipher = async(req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Jefferson Cipher.  Thus cannot update.'});
    }

    const jeffersonCipher = await JeffersonCipher.findOneAndUpdate({_id: id}, {...req.body});

    if (!jeffersonCipher){
        return res.status(400).json({error: 'No such Jefferson Cipher.  Thus cannot update.'});
    }

    res.status(200).json(jeffersonCipher);
}


module.exports = {
    getAllJeffersonCiphers,
    getJeffersonCipher,
    createJeffersonCipher,
    deleteJeffersonCipher,
    updateJeffersonCipher,
};