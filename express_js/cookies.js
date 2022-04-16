const express=require('express')
const cookieParser=require('cookie-parser')
const app =express()
app.use(cookieParser())
app.get('/',(req,res)=>{
    res.send('hellow cookies')
});
app.get('/set-cookie',(req,res)=>{
    // res.setHeader('set-cookie','foo=bar')
    res.send("foo","bar",{
    // res.send("fizz","bazz")
    // maxage:5000,
    // expires:new Date('26 july 2021'),
    // HttpOnly:true,
    // secure:true,
//     domain:"example.com"
})
    res.send('cookies is set foo=bar ')
})

app.get('/get-cookie',(req,res)=>{
    console.log(req.cookies)
    res.send(req.cookies)
})

// app.get('/del-cookie',(req,res)=>{
//     res.clearCookie("foo")
//     res.send("cookie has been deleted")
// })

app.listen(3000,()=>console.log("server is on port 3000"))