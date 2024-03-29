const express = require('express');
const JeffersonCipher = require('./../models/jeffersonCipherModel');

const router = express.Router();



// GET all jefferson cipher
router.get('/', (req, res) => {
    res.json({mssg: 'GET all jefferson ciphers'});

});

//GET a single/specific jefferson cipher
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single/specific jefferson cipher'});
});

router.get('/about', (req, res) => {
    res.json({mssg: 'GET a jefferson cipher About page'});

});

router.get('/create', (req, res) => {
    res.json({mssg: 'GET a jefferson cipher Creation page'});

})

router.post('/create', async (req, res) => {
    console.log('hit');
    const {unencrypted, encrypted, solutionCombo, deliveryCombo, wheelSet} = req.body;

    try {
        const jeffersonCipher = await JeffersonCipher.create({unencrypted, encrypted, solutionCombo, deliveryCombo, wheelSet});  
        res.status(200).json(jeffersonCipher);
    } catch (error ) {
        res.status(400).json({error: error.message});
    }

    res.json({mssg: 'POST a single/specific jefferson cipher'});

});

module.exports = router;