const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const requireAuth = async (req, res, next) => { 

    // verify authentication
    const { authorization } = req.headers

    if (!authorization) {  //ensure that the request had an authorization (JWT) token with it
        return res.status(401).json({error: 'Authorization (JWT) token required'});
    };

    //now ensure it is a valid JWT
    // authorization will look like: Bearer tokenpt1.tokenpt2.tokenpt3

    const token = authorization.split(' ')[1];

    try {
        const { _id } = jwt.verify(token, process.env.SECRET); //returns payload from that token, specifically destructure to find _id
        req.user = await User.findOne({ _id }).select('_id'); //this authentication middleware function runs first and attaches the user property for next middleware functions
        // for clarification we are appending/attaching a user property.
        next();
    } catch (error) {
        res.status(401).json({error: 'Request is not authorized (Invalid JWT)'});
    }
};

module.exports = requireAuth;