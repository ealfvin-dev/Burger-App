var orm = require("../config/orm.js");

//Why have burger.js? This just calls functions in the orm?
var burger = {
    selectAll: function() {
        orm.selectAll();
    },
    insertOne: function() {
        orm.insertOne();
    },
    eatOnr: function() {
        orm.eatOne();
    }
};