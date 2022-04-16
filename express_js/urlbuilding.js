const express=require('express')
var app=express();

app.get("/",(req,res)=>{
    res.send("some information")
});

app.get("/:id([a-z,0-9]{4})",(req,res)=>{
    res.send("id is:"+req.params.id);
});

app.get('/users/:name/:id',(req,res)=>{
    res.send('users name is:'+req.params.name+'& id is:'+req.params.id)
});

app.get('*',(req,res)=>{
    res.send('url is not working');
});

app.listen(3000,()=>{
    console.log('requesting!')

});