const express = require("express");
const UserController = require("../controllers/user");
const router = express.Router();


const User = require("../models/user");

router.post("/signup", UserController.createUser);

router.post("/login", UserController.userLogin);

module.exports = router;