const express = require('express');
const {
    getAllJeffersonCiphers,
    getJeffersonCipher,
    createJeffersonCipher,
    deleteJeffersonCipher,
    updateJeffersonCipher,
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

// CREATE a single/specific Jefferson Cipher
router.post('/create', createJeffersonCipher);

// DELETE a single/specific Jefferson Cipher
router.delete('/:id', deleteJeffersonCipher);

// UPDATE a single/specific Jefferson Cipher
router.patch('/:id', updateJeffersonCipher);

module.exports = router;