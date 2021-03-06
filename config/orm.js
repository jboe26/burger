// Import MySQL connection.
var connection = require("../config/connection.js");


function printQuestionMarks(num) {
   var arr = [];
   for (var i = 0; i < num; i++) {
     arr.push("?");
   }
   return arr.toString();
 }
 function objToSql(ob) {
   var arr = [];
   // loop through the keys and push the key/value as a string int arr
   for (var key in ob) {
     var value = ob[key];
     // check to skip hidden properties
     if (Object.hasOwnProperty.call(ob, key)) {
     if (typeof value === "string" && value.indexOf(" ") >= 0) {
         value = "'" + value + "'";
       }
      arr.push(key + "=" + value);
     }
   }
   // translate array of strings to a single comma-separated string
   return arr.toString();
 }
var orm = {
  //Create a method to selectAll
   selectAll: function (tableName, cb) {
       var queryString = "SELECT * FROM ??; ";
       connection.query(queryString, [tableName], function (err, result) {
           if (err) throw err;
           console.log(result);
           cb(result);
       });
   },
   //Create a method to insertOne
   insertOne: function(table, cols, vals, cb) {
       var queryString = "INSERT INTO " + table;
       queryString += " (";
       queryString += cols.toString();
       queryString += ") ";
       queryString += "VALUES (";
       queryString += printQuestionMarks(vals.length);
       queryString += ") ";
       console.log(queryString);
       connection.query(queryString, vals, function(err, result) {
         if (err) {
           throw err;
         }
         cb(result);
       });
     },
     //Create a method to updateOne
     update: function(table, objColVals, condition, cb) {
       var queryString = "UPDATE " + table;
       queryString += " SET ";
       queryString += objToSql(objColVals);
       queryString += " WHERE ";
       queryString += condition;
       console.log(queryString);
       connection.query(queryString, function(err, result) {
         if (err) {
           throw err;
         }
         cb(result);
       });
     }
};
module.exports = orm;