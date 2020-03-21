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
        console.log("Added new burger " + req.body.name);
    });
});

router.put("/api/burgers/:id", function(req, res) {
    orm.eatOne(req.params.id, function() {
        console.log("Ate burger with id " + req.params.id);
    })
});

module.exports = router;