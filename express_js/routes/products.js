const express=require('express')
const router=express.Router()

// /products/
router.get('/',(req,res)=>{
    res.send('get request for products')
});

// /products/get_product_details
router.get('/get-product-details',(req,res)=>{
    res.send('get request for specific product')
});


// router.post("/create-product",(req,res)=>{
//     res.send("list of users")
// });

// router.put("/update-products",(req,res)=>{
//     res.send("list of users")
// });

// router.get("/read-all-products",(req,res)=>{
//     res.send("list of users")
// });

// router.get("/get-product-details",(req,res)=>{
//     const userobj={
//         id:10,
//         name:"jabeena",
//         desc:"student",
//         class:"12th"
//     }
//     res.send(userobj)
//     });
    
// router.delete("/delete-product",(req,res)=>{
//     res.send("list of products")
// });

module.exports=router;
