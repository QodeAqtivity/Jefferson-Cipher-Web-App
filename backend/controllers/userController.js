const User = require('../models/userModel');

// login user
const loginUser = async(req, res) => {
    res.json({mssg: 'log user'})
}

// signup user
const signupUser = async(req, res) => {
    res.json({mssg: 'sign user'});
}

module.exports = {
    loginUser, 
    signupUser
}