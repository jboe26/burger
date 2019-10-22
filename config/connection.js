// Connect Node to MySQL.
var mysql = require("mysql");

// if () {
//     connection = mysql.createConnection();
// } else {
//     connection = mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         password: "root",
//         database: "burger_db"
//     });
// };

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export the connection.
module.exports = connection;