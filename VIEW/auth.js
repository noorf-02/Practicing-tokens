const express = require('express');
const Router = express.Router();
const {signUp, logIn} = require('../CONTROLLER/auth');

Router.post('/sign-up', signUp);
Router.post('/log-in', logIn);

module.exports = Router;