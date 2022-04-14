// Drop table
// function drop_table() {
//     knex.schema.hasTable("users").then(function (exists) {
//       if (exists) {
//         console.log({ Success: `users table deleted successfully.` });
//         return knex.schema.dropTable("users");
//       } else {
//         console.log({ Sorry: `users table not found.` });
//       }
//     });
//   }
// drop_table()