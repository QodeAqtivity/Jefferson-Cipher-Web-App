const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// hash passwords before interacting with database or user

const createJWToken = (id) => {
    return jwt.sign({_id: id}, process.env.SECRET, { expiresIn: '2d'});
};


// login user
const loginUser = async(req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);

        const token = createJWToken(user._id);

        res.status(200).json({email, token});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

// signup user
const signupUser = async(req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.signup(email, password);

        const token = createJWToken(user._id);

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message});
    };
}

module.exports = {
    loginUser, 
    signupUser
}