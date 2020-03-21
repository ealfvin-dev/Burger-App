var express = require("express");
var orm = require("../config/orm.js");

var router = express.Router();

router.get("/", function(req, res) {
    orm.selectAll(function(burgerData) {
        console.log(burgerData);
        res.render("index", {burgers: burgerData});
    });
});

router.post("/api/burgers", function(req, res) {
    orm.insertOne(req.body.name, function() {
        res.redirect("/");
    });
});

module.exports = router;