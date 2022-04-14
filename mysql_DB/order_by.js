// var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Jabina@123",
//   database: "mydb"
// });
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM custome ORDER BY name", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });




// ORDER BY DESC
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Jabina@123",
  database: "mydb"
});
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM custome ORDER BY name DESC", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});