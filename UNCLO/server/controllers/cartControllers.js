import User from '../models/userModel.js';

export const addToCart = async (req, res) => {
    let user = await User.findOne({ _id: req.user.id });
    user.cart[req.body.id] += 1;
    await User.findOneAndUpdate({ _id: req.user.id }, { cart: user.cart });
    res.send("Item added to cart");
};

//remove product from cart
export const removeFromCart = async(req , res)=>{
    let user = await User.findOne({_id: req.user.id});
    user.cart[req.body.id] -=1;
    await Users.findOneAndUpdate({_id: req.user.id} , {cart: user.cart});
    res.send("Item removed from cart");
}


//get all items in cart
export const getCartData = async(req, res)=>{
    let user = await User.findOne({_id: req.user.id});
    res.json(user.cart); 
}