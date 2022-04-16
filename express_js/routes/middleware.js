const express=require("express")

var router=express.Router();


router.use('/',(req,res,next)=>{
    console.log("api call recieved")
    next();
})

// // /users/
router.get('/',(req,res)=>{
    res.send('get request for users')
});

router.use('/',(req,res)=>{
    console.log("api call ended")
})
