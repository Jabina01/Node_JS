function create_table() {
        return knex.schema.createTable("users", function (t) {
          t.integer("id");
          t.string("first_name");
          t.string("last_name");
        })
        .then(()=>{
            console.log("table_created")
        }).catch((error)=>{
            console.log(error)
        })
    }

create_table()
