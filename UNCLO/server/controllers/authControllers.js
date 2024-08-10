import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const loginUser = async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        const result = await bcrypt.compare(req.body.password, user.password);
        if (result) {
            const data = {
                user: {
                    id: user.id
                }
            };
            const token = jwt.sign(data, process.env.JWT_SECRET);
            res.json({ success: true, token });
        } else {
            res.json({ success: false, error: "Wrong Password" });
        }
    } else {
        res.json({ success: false, error: "User does not exist" });
    }
};

export const signupUser = async (req ,res)=>{
    let check = await User.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false , error:"An account with this email already exists. Please try another email"});
    }
    let cart = {};
    for(let i = 0 ; i<300 ; i++){
        cart [i] = 0;
    }


    const hash  = await bcrypt.hash(req.body.password, 10)

    const  new_user = new User({
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
}