// function insert_data() {
//   knex.schema.hasTable("users").then(function (exists) {
//     if (exists) {
//       console.log({ Success: `data inserted into users table.` });
//       return knex("users").insert({
//         id:1,
//         first_name: "Pratik",
//         last_name: "Deshmukh",
//       });
//     } else {
//       console.log({ Sorry: `users table not found` });
//     }
//   });
// }
// insert_data()