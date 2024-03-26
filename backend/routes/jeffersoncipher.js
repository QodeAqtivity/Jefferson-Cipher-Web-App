const express = require('express');

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

router.post('/create', (req, res) => {
    res.json({mssg: 'POST a single/specific jefferson cipher'});

});

module.exports = router;