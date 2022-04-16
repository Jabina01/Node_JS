// const express=require('express')
// const app=express();

// app.get("/read-all-users",(req,res)=>{
//     res.send("list of users")
// });

// app.get("/get-user-details",(req,res)=>{
//     const userobj={
//         id:10,
//         name:"jabeena",
//         desc:"student",
//         class:"12th"
//     }
//     res.send(userobj)
    
// });
// app.listen(4000);



// // CRUD_users
// app.post("/create-user",(req,res)=>{
//     res.send("list of users")
// });

// app.put("/update-user",(req,res)=>{
//     res.send("list of users")
// });

// app.get("/read-all-users",(req,res)=>{
//     res.send("list of users")
// });

// app.get("/get-user-details",(req,res)=>{
//     const userobj={
//         id:10,
//         name:"jabeena",
//         desc:"student",
//         class:"12th"
//     }
//     res.send(userobj)
//     });
    
// app.delete("/delete_user",(req,res)=>{
//     res.send("list of users")
// });
// app.listen(4000);




// CRUD_product
app.post("/create-product",(req,res)=>{
    res.send("list of users")
});

app.put("/update-products",(req,res)=>{
    res.send("list of users")
});

app.get("/read-all-products",(req,res)=>{
    res.send("list of users")
});

app.get("/get-product-details",(req,res)=>{
    const userobj={
        id:10,
        name:"jabeena",
        desc:"student",
        class:"12th"
    }
    res.send(userobj)
    });
    
app.delete("/delete_user",(req,res)=>{
    res.send("list of products")
});
app.listen(4000);




