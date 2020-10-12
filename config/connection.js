// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.TEST_MODE == true || process.env.TEST_MODE == null) {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "toor",
        database: "burger_db"
    });
} else {
    connnection = mysql.createConnection(process.env.JAWSDB_URL);
}


// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;