// knex.from('users').select("*")
//   .then((rows)=>{
//       for (row of rows){
//           console.log(`${row['id']} ${row['first_name']} ${row['last_name']}`);

//       }
//   }).catch((error)=>{console.log(error);throw error})
//   .finally(()=>{
//       knex.destroy();
//   })
