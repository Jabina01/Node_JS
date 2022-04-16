const express=require('express')
var products=require('./routes/products');
var users=require('./routes/users')
var app=express();


app.use('/products',products)
app.use('/users',users);
app.listen(4000,()=>{
    console.log("listening the port at 4000!")
});





