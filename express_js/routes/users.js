const express=require('express')
const router=express.Router()


// // middleware
// router.use('/',(req,res,next)=>{
//     req.headers["content-type"]='application/json'
//     console.log("api call recieved")
//     next();
// });

// // // /users/
// router.get('/',(req,res)=>{
//     res.send('headers recieved' + req.headers['content-type'])
//     res.send('get request for users')
// });

// router.use('/',(req,res)=>{
//     console.log("api call ended")
// })


// // // /users/
// router.get('/',(req,res)=>{
//     res.send('get request for users')
// });

// // // /users/user-details
// router.get('/user-details/:id',(req,res)=>{
//     res.send('get request for specific user'+req.params.id)
// });

// router.get('/search-by-location/:state/:city',(req,res)=>{
//     res.send('get request for specific user'+req.params.state+req.params.city)
// });

// router.post("/create-user",(req,res)=>{
//     res.send("list of users")
// });

// router.put("/update-user",(req,res)=>{
//     res.send("list of users")
// });

// router.get("/read-all-users",(req,res)=>{
//     res.send("list of users")
// });

// router.get("/get-user-details",(req,res)=>{
//     const userobj={
//         id:10,
//         name:"jabeena",
//         desc:"student",
//         class:"12th"
//     }
//     res.send(userobj)
//     });
    
// router.delete("/delete-user",(req,res)=>{
//     res.send("list of users")
// });

module.exports=router;








