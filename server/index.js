import express from 'express'
import db from 'mongoose'
import jwt from 'jsonwebtoken'
import multer from 'multer'
import path from 'path'
import cors from 'cors'
import bcrypt from 'bcrypt'

const app = express();
const port = 4000;

//global middleware 
app.use(express.json()); // parse json request into javascript object (Content-type: 'application/json)
app.use(cors()); //enabling cross origin resource sharing,


//database connection
db.connect("mongodb+srv://liangmeng:nA01KMakNEvJnKoW@unclo.o4y3chv.mongodb.net/unclo");

//run app
app.listen(port, () =>{
    console.log(`app running on port ${port}`);
});


const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req , file , cb) =>{
        return cb(null , `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
})

const upload = multer({storage: storage});

app.use('/images' , express.static('upload/images'))
 

app.post("/upload", upload.single('product') , (req , res) =>{
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

const Product = db.model("Product" , {
    id: {
        type: Number,
        required:true,
    },
    name:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    new_price:{
        type: Number,
        required: true,
    },
    old_price:{
        type: Number,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now,
    },
    availability:{
        type: Boolean,
        default: true
    }
})

const Users = db.model("Users" , {
    username:{
        type:String,
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type:String,
    },
    cart:{ 
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

app.get("/" , (req , res) =>{
    res.send("App running");
})

//login 
app.post("/login" , async (req , res)=>{
    let user = await Users.findOne({email: req.body.email});
    if(user){
        const result = bcrypt.compare(req.body.password , user.password);
        if(result){
            const data = {
                user:{
                    id: user.id
                }
            }
            const token = jwt.sign(data , 'secret_ecom');
            res.json({success: true, token});
        }
        else{
            res.json({success: false , error: "Wrong Password"})
        }
    }else{
        res.json({success: false , error: "User does not exists"})

    }
})


//signup
app.post("/signup" , async (req ,res)=>{
    let check = await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false , error:"An account with this email already exists. Please try another email"});
    }
    let cart = {};
    for(let i = 0 ; i<300 ; i++){
        cart [i] = 0;
    }


    const hash  = await bcrypt.hash(req.body.password, 10)

    const  new_user = new Users({
        username: req.body.name,
        email:req.body.email,
        password: hash,
        cart: cart,
    }) 

    await new_user.save();
    const data = {
        user:{
            id:new_user.id
        }
    }
   
    const token = jwt.sign(data , 'secret_ecom');
    res.json({success: true , token})
})


//admin- add new product
app.post('/addproduct' , async(req ,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length > 0){
        let last_product = products.slice(-1)[0];
        id = last_product.id + 1; // 1 number can only use once 
    }
    else{
        id = 1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });
    
    try{
        await product.save();
        res.json({
            success: true,
            name: req.body.name,
        })
    }
    catch(err){
        res.json({
            success: false,
            error: err,
        })
    }
    
})

//admin remove product
app.post('/removeproduct' , async(req , res)=>{
    try{
        await Product.findOneAndDelete({id: req.body.id});
        console.log("Item deleted");
        res.json({
            success: true ,
            name: req.body.name,
        })
    }catch(err){
        res.json({
            success: false,
            error: err,
        })

    }
})

//admin edit product
app.patch('/editproduct' , async(req , res) => {
    try{
        await Product.findOneAndUpdate({id: req.body.id}, 
            {name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            old_price: req.body.old_price,
            new_price: req.body.new_price,})
        res.json({succuss: true})
    }
    catch(err){
        res.json({success: false , error:err})
    }
})

//get all products
app.get('/allproducts' , async(req , res) =>{
    
    try{
        let products = await Product.find({});
        console.log("All products loaded")
        if(products[0]){
            res.send(products);
        }
        else{
            res.send("No products available");
        }
    }
    catch(err){
        res.send(err)
    }
})


//get new collections, 8 items
app.get('/newcollection' , async (req ,res)=>{
    let products = await Product.find({});
    
    let new_collection = products.slice(0).slice(-8);
    res.send(new_collection);
    
})


//popular items in women
app.get('/womenpopular' , async(req ,res)=>{
    let products = await Product.find({category: "women"});
    let popular = products.slice(0,4);
    res.send(popular);
})

//User authentication middleware
const fetchUser = async (req , res ,next) =>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({errors: "Invalid token!" });
    }
    else{
        try{
            const data = jwt.verify(token , 'secret_ecom');
            req.user = data.user;
            next();
        }
        catch(err){
            res.status(401).send({error: "Please authenticate using a valid token"})
        }
    }
}

//add product to cart
app.post('/addtocart' , fetchUser , async (req ,res)=> {
    let user = await Users.findOne({_id: req.user.id});
    user.cart[req.body.id] += 1;
    await Users.findOneAndUpdate({_id: req.user.id} , {cart: user.cart});
    res.send("Item added to cart");
})   

//remove product from cart
app.post('/removefromcart' , fetchUser , async(req , res)=>{
    let user = await Users.findOne({_id: req.user.id});
    user.cart[req.body.id] -=1;
    await Users.findOneAndUpdate({_id: req.user.id} , {cart: user.cart});
    res.send("Item removed from cart");
})


//get all items in cart
app.post('/getcartdata' , fetchUser , async(req, res)=>{
    let user = await Users.findOne({_id: req.user.id});
    res.json(user.cart); 
})