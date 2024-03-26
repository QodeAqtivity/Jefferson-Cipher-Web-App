require('dotenv').config()

const express = require('express');

const app = express();//server / express app

//middleware
app.use((req, res, next) => {
    console.log(`Request Path: ${req.path}`);
    console.log(`Request Method: ${req.method}`);
    next();
});

app.get('/', (req, res) => {
    res.json(
        {mssg: 'Welcome to the app'}
    );
})

//listen for requests
app.listen(process.env.PORT, () => {
    console.log(`listening on Port ${process.env.PORT}`);
});