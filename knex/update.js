// function update_data(id) {
//   knex.schema.hasTable("users").then(function (exists) {
//     if (exists) {
//       console.log({ Success: `users data updated successfully.` });
//       return knex("users")
//         .update({ first_name: "Anand", last_name: "Patel" })
//         .where("id", id);
//     } else {
//       console.log({ Sorry: `users table not found` });
//     }
//   });
// }
// update_data()