var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Jabina@123",
  database: "mydb"
});
con.connect(function(err) {
  if (err) throw err;
  var sql = "DELETE FROM custome WHERE address = 'Mountain 21'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});