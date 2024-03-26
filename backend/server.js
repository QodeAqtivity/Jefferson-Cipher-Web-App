require('dotenv').config()

const express = require('express');

const app = express();//server / express app

app.get('/', (req, res) => {
    res.json(
        {mssg: 'Welcome to the app'}
    );
})

//listen for requests
app.listen(process.env.PORT, () => {
    console.log(`listening on Port ${process.env.PORT}`);
});