// var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Jabina@123",
//   database: "mydb"
// });
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM custome WHERE address = 'Park Lane 38'", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });




// // Select records where the address starts with the letter 'S':
// var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Jabina@123",
//   database: "mydb"
// });
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM custome WHERE address LIKE 'S%'", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });





// // Escape query values by using the mysql.escape() method:
// var adr = 'Mountain 21';
// var sql = 'SELECT * FROM custome WHERE address = ' + mysql.escape(adr);
// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });


