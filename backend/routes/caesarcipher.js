const express = require('express');
const {
    getAllCaesarCiphers,
    getCaesarCipher,
    createCaesarCipher,
    deleteCaesarCipher,
    updateCaesarCipher,
} = require('./../controllers/caesarCipherController');
const router = express.Router();

// GET all caesar ciphers
router.get('/', getAllCaesarCiphers);

// GET a single/specific caesar cipher
router.get('/:id', getCaesarCipher);

router.get('/create', (req, res) => {
    res.json({mssg: 'GET a caesar cipher Createion Page'});
});

// POST a single/specific Caesar Cipher
router.post('/', createCaesarCipher);

// DELETE a single/specific Caesar Cipher
router.delete('/:id', deleteCaesarCipher);

// PATCH a single/specific Caesar Cipher
router.delete('/:id', updateCaesarCipher);

module.exports = router;