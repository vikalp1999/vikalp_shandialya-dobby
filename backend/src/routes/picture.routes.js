const express = require("express");
const { postPicture } = require("../controller/picture.contoller");

const Router= express.Router();

Router.route("/addPost/:id").post(postPicture);


module.exports= Router