const express = require("express");
const { login, register } = require("../controller/user.controller");
const Router= express.Router();

Router.route("/signup").post(register);
Router.route("/login").post(login)


module.exports= Router