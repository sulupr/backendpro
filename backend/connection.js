var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "posts",
  password: "Sulu@ammu1"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});