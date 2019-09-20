
// Connect Node to MySQL 
const mysql = require("mysql");
const connection; 

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection({process.env.JAWSDB_URL); 
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "Huong1225",
    database: "burgers_db"
  });
}; 

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export the connection
module.exports = connection;
