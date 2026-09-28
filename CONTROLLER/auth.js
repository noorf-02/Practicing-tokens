const mongoose = require('mongoose');
const Auth = require('../MODEL/auth');

const signUp = async (req,res) =>{
    res.send('Sign Up function');
};

const logIn = async (req,res) =>{
    res.send('Log In function');
};

module.exports = {signUp, logIn}


