require('dotenv').config()

const express = require('express');
const jeffersonCipherRoutes = require('./routes/jeffersoncipher');

const app = express();//server / express app

//middleware
// app.use(express.json); //checks to see if there is any body/data/message in request and if so, parses it and attaches it to request object
app.use((req, res, next) => {
    console.log(`Request Path: ${req.path}`);
    console.log(`Request Method: ${req.method}`);
    next();
});

app.use('/api/jefferson-cipher', jeffersonCipherRoutes);

//listen for requests
app.listen(process.env.PORT, () => {
    console.log(`listening on Port ${process.env.PORT}`);
});