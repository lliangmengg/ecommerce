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
export const newCollection = async (req, res) => {
    try {
        // Get 3 latest products from Men's collection
        const menCollection = await Product.find({ category: 'men' })
            .sort({ createdAt: -1 })
            .limit(3);

        // Get 3 latest products from Women's collection
        const womenCollection = await Product.find({ category: 'women' })
            .sort({ createdAt: -1 })
            .limit(3);

        // Get 2 latest products from Kids' collection
        const kidsCollection = await Product.find({ category: 'kid' })
            .sort({ createdAt: -1 })
            .limit(2);

        // Combine all collections
        const new_collection = [
            ...womenCollection,
            ...menCollection,
            ...kidsCollection
        ];

        res.send(new_collection);
    } catch (error) {
        res.status(500).send({ message: 'Error retrieving new collections', error });
    }
};



//popular items in women
export const popular =  async(req ,res)=>{
    let products = await Product.find({category: "women"});
    let popular = products.slice(0,4);
    res.send(popular);
}
