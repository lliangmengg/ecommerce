import Product from '../models/productModel.js';

//admin add product
export const addProduct = async (req, res) => {
    let products = await Product.find({});
    let id = products.length > 0 ? products.slice(-1)[0].id + 1 : 1;

    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });

    try {
        await product.save();
        res.json({ success: true, name: req.body.name });
    } catch (err) {
        res.json({ success: false, error: err });
    }
};

//admin remove product
export const removeProduct =  async(req , res)=>{
    try{
        let response = await Product.findOneAndDelete({id: req.body.id});
       
        console.log(response)
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
}


export const allproducts = async(req , res) =>{
    
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
}


//get new collections, 8 items
export const newCollection =  async (req ,res)=>{
    let products = await Product.find({});
    
    let new_collection = products.slice(0).slice(-8);
    res.send(new_collection);
    
}


//popular items in women
export const popular =  async(req ,res)=>{
    let products = await Product.find({category: "women"});
    let popular = products.slice(0,4);
    res.send(popular);
}
