require('dotenv').config()

const express = require('express');
const jeffersonCipherRoutes = require('./routes/jeffersoncipher');
const caesarCipherRoutes = require('./routes/caesarcipher');
const mongoose = require('mongoose');

const app = express();//server / express app

//middleware
app.use(express.json()); //checks to see if there is any body/data/message in request and if so, parses it and attaches it to request object

app.use((req, res, next) => {
    console.log(`Request Path: ${req.path}`);
    console.log(`Request Method: ${req.method}`);
    next();
});

// jefferson cipher routes
app.use('/api/jefferson-cipher', jeffersonCipherRoutes);
app.use('/api/caesar-cipher', caesarCipherRoutes);
//app.use('/api/vigenere-cipher, vigenereCipherRoutes);

// connect to mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Successfully connected to MongoDB Database!');
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`Now Listening on Port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error)
    });

