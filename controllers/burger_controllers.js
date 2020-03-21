var express = require("express");
var burger = require("../model/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
    res.render("index", {things: "hello"});
});

module.exports = router;