// var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Jabina@123",
//   database: "mydb"
// });
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "DROP TABLE custome";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table deleted");
//   });
// });



// // Delete the table "customers" if it exists:
// var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Jabina@123",
//   database: "mydb"
// });
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "DROP TABLE IF EXISTS custome";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });