const express = require('express');
const {
    getCaesarCiphersInvalidUser,
    getCaesarCiphersValidUser,
    getAllCaesarCiphers,
    getCaesarCipher,
    createCaesarCipherInvalidUser,
    createCaesarCipherValidUser,
    deleteCaesarCipher,
    updateCaesarCipher
} = require('./../controllers/caesarCipherController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

// GET public caesar cipher posts for all users including non-users and invalid users
router.get('/public', getCaesarCiphersInvalidUser);

// POST public caesar cipher to allow non-users and invalid users to participate
router.post('/public', createCaesarCipherInvalidUser);

// GET a single/specific caesar cipher
router.get('/:id', getCaesarCipher);

//require auth for all routes
router.use(requireAuth); //by placing this middleware function before other functional middleware functions, we protect them from unauthorized access and use

// GET all caesar ciphers
router.get('/', getCaesarCiphersValidUser);

// GET a single/specific caesar cipher
router.get('/:id', getCaesarCipher);

router.get('/create', (req, res) => {
    res.json({mssg: 'GET a caesar cipher Createion Page'});
});

// POST a single/specific Caesar Cipher
router.post('/', createCaesarCipherValidUser);

// DELETE a single/specific Caesar Cipher
router.delete('/:id', deleteCaesarCipher);

// PATCH a single/specific Caesar Cipher
router.delete('/:id', updateCaesarCipher);

module.exports = router;