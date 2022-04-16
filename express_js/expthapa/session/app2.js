const express=require('express')
const web=require('.session/route/web')
const app=express();
const port=process.env.PORT || '3000'

// load routes
app.use('/',web)

app.listen(port,()=>{
    console.log(`sever listening at http://localhost:${port}`)
});
