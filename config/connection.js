// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "s554ongw9quh1xjs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "by5cd29xbrmb8wn9",
  password: "pd3pg4z9xj5c48we",
  database: "burger_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
