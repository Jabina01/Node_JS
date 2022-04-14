var fs=require('fs')
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Jabina@123",
    database: "mydb"
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
                con.connect(function(err) {
                if (err) throw err;
                console.log("Connected!");
                var sql = "CREATE TABLE details (name VARCHAR(255), password VARCHAR(255),describtion VARCHAR(255),DOB VARCHAR(255),Hobbies VARCHAR(255),Gender VARCHAR(255))";
                con.query(sql, function (err, result) {
                    if (err){ 
                    var sql = "INSERT INTO details (name, password,describtion,DOB,Hobbies,Gender) VALUES ?";
                      var values = [[user_name,password1,description,dob,hobbies,gender]]
                        con.query(sql,[values], function (err, result) {
                          if (err){
                              console.log("Error while inserting")
                            throw err
                          }else{
                            console.log("record inserted : ",result.affectedRows); 
                          }
                        });
                    }else{
                        console.log("Table created")
                    }
                      });
                
                });
            }
            else{
                console.log("Passwords didn't match.")
            }   
        }
        else{
            console.log("weak password")
        }
    }
// if(user == "login"){

//     var password = request.question("enter your password :");
//     var email= request.question("enter your email :");
//     var sql="SELECT*FROM deatils "; 
//     v1=password
//     v2=email              
//     con.query(sql, function(err, results,fields){     
//       if(err) {
//         console.log(err);
//         }
//         else{
//             console.log(results)
//             var found=results.find(function(user){
//                 if (user.password==password && user.email==email ){

//                     return user
//                 }
//             })
//             if (found){

//             console.log("login successfully")
//             console.log(found)
//             }else{
//                 console.log('User not found')
//             }
//         }
                    
//        });
//     }}
else {
    if (user=="login"){
        var user_name=a.question("enter the user_name:")
        var password2=a.question("enter the password:")
        var sql = 'SELECT * FROM details';
        // var v1 = Name;
        // var v2 = Password;
        con.query(sql,function (err, results,field) {
        if (err) {
            console.log(err)
            }
            else{
                // console.log(results)
                var found=results.find(function(users){
                    if (users.password2==password2 && users.user_name==user_name){
                        return user
                    }
                });
                if (found){
                console.log("login sucessfully")
                // console.log(found)
                }
                else{
                    console.log("ur information is wrong")
            }; 
            
        }; 
    });
}};
