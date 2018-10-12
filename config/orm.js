const connection = require('./connection');

const orm = {
    selectAll: function(tableName, cb) {
      const queryString = 'SELECT * FROM ??';
      connection.query(queryString, [tableName], function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    insertOne: function(tableName, colName, value, cb) {
      const queryString = 'INSERT INTO ?? (??) VALUES (?)';
  
      connection.query(queryString, [tableName, colName, value], function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    updateOne: function(tableName, colName1, value1, colName2, value2, cb) {
        const queryString = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
    
        connection.query(queryString, [tableName, colName1, value1, colName2, value2], function(err, result) {
          if (err) throw err;
          cb(result);
        });
    }
  };
  
  module.exports = orm;