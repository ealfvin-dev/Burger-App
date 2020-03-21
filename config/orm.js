var connection = require("./connection.js");

var orm = {
    selectAll: function(cb) {
        connection.query("SELECT * FROM burgers", function(err, data) {
            if(err) throw err;
            cb(data);
        });
    },
    insertOne: function(burgerName, cb) {
        connection.query("INSERT INTO burgers(name) VALUES(?)", [burgerName], function(err, response) {
            if(err) throw err;
            cb(response);
        });
    },
    eatOne: function(burgerID, cb) {
        connection.query("UPDATE burgers SET devoured = true WHERE id = ?", [burgerID], function(err, response) {
            if(err) throw err;
            cb(response);
        });
    }
};

module.exports = orm;