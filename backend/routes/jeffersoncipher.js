const express = require('express');
const {
    getAllJeffersonCiphers,
    getJeffersonCipher,
    createJeffersonCipher,
} = require('./../controllers/jeffersonCipherController');
const router = express.Router();



// GET all jefferson cipher
router.get('/', getAllJeffersonCiphers);

//GET a single/specific jefferson cipher
router.get('/:id', getJeffersonCipher);

router.get('/about', (req, res) => {
    res.json({mssg: 'GET a jefferson cipher About page'});

});

router.get('/create', (req, res) => {
    res.json({mssg: 'GET a jefferson cipher Creation page'});

})

router.post('/create', createJeffersonCipher);

module.exports = router;