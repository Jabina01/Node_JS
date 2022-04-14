// // Disable an unique functionality of users column
// function drop_unique_name() {
//   knex.schema.hasTable("users").then(function (exists) {
//     if (exists) {
//       console.log({ Success: `alter unique_name successfully...` });
//       return knex.schema.alterTable("users", function (t) {
//         t.dropUnique("id");
//       });
//     } else {
//       console.log({ Sorry: `users table not found` });
//     }
//   });
// }
// drop_unique_name