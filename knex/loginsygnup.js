const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "Jabina@123",
    database: "simpleknex",
  },
});
console.log("welcome to login and sign up page")
var a=require("readline-sync")
var user=a.question("what u want to do login or sign up:")
    if (user=="signup"){
        var user_name=a.question("enter the user_name :")
        var password1=a.question("enter ur password:")
        if (password1.match(/[A-Z]/m) && password1.match(/[a-z]/m) && password1.match(/[0-9]/m) &&  password1.match(/[$#&@]/m)){
            var password2=a.question("confirm ur password:")
            if (password1==password2){
                console.log("congrates")
                var description=a.question("enter ur descriptinon:")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                var dob=a.question("enter ur dob:")
                var hobbies=a.question("enter ur hobbies:")
                var gender=a.question("enter ur gender f/m :")
                console.log("congrates",user,"u r sucessfully signupped")
                l1=["name","password","describtion","DOB","Hobbies","Gender"]
                l2=[user_name,password1,description,dob,hobbies,gender]
                var list1=[]
                dic2={}
                for (i in l1){
                dic2[l1[i]]=l2[i]
                }
                list1.push(dic2)
                // return knex.schema.createTable("mydetails", function (t) {
                //             t.string("name");
                //             t.string("password");
                //             t.string("describtion")
                //             t.string("DOB")
                //             t.string("Hobbies")
                //             t.string("Gender");
                //           })
                //           .then(()=>{
                //               console.log("table_created")
                //           }).catch((error)=>{
                //               console.log(error)
                knex.schema.hasTable("mydetails").then(function (exists) {
                    if (exists) {
                        console.log({ Success: `data inserted into users table.` });
                        return knex("mydetails").insert({
                        name:user_name,
                        password:password1 ,
                        describtion:description ,
                        DOB:dob,
                        Hobbies:hobbies,
                        Gender:gender
                        });
                    } else {
                        console.log({ Sorry: `users table not found` });
                    }
                    });
                // })
            }
            else{
                console.log("Passwords didn't match.")
            }   
        }
        else{
            console.log("weak password")
        }
    }
else {
    if (user=="login"){
        var Name=a.question("enter the user_name:")
        var Password=a.question("enter the password:")
        // con.connect(function(err) {
            var name = Name;
            var password1 = Password;
            var sql = 'SELECT * FROM mydetails WHERE name = ? OR password = ?';
            query(sql, [name,password ], function (err, result) {
            if (err) {
                console.log("Username and password not matched.")
            }else{
            console.log("congrates",Name,"u have logged in sucessfully")
            }
            // });
            
          });
            }
            else{
                console.log("ur information is wrong")
            } 
            
    }