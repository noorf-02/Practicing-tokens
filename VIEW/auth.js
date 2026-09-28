const express = require("express");
const Router = express.Router();
const { signUp, logIn, decoded } = require("../CONTROLLER/auth");

Router.post("/sign-up", signUp);
Router.post("/log-in", logIn);
Router.get("/get-token", decoded);

module.exports = Router;
