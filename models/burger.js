const orm = require('../config/orm');

const burger = {
    all: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },
    insert: function(val, cb) {
        orm.insertOne('burgers', 'burger_name', val, function(res) {
            cb(res);
        });
    },
    update: function(val, cb) {
        orm.updateOne('burgers', 'devoured', true, 'burger_name', val, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;