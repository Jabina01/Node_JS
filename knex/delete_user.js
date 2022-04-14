// // Delete users data by id
function delete_by_id(id) {
  knex.schema.hasTable("users").then(function (exists) {
    if (exists) {
      console.log({ Success: `data deleted by id:${id} successfully.` });
      return knex("users").where("id", id).del();
    } else {
      console.log({ Sorry: `users table not found` });
    }
  });
}
// delete_by_id