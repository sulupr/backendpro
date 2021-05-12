module.exports = app => {
    const user = require("../controllers/auth.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", user.signup);
};