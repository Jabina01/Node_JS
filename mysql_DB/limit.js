// // Select the 5 first records in the "customers" table:
// var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Jabina@123",
//   database: "mydb"
// });
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "SELECT * FROM custome LIMIT 5";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });



// // Start from position 3, and return the next 5 records:
// var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Jabina@123",
//   database: "mydb"
// });
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "SELECT * FROM custome LIMIT 5 OFFSET 2";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });





// Start from position 3, and return the next 5 records:
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Jabina@123",
  database: "mydb"
});
con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT * FROM custome LIMIT 2, 5";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});