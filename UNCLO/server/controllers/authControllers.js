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

export const signupUser = async (req, res) => {
    let check = await User.findOne({ email: req.body.email });
    if (check) {
        return res.status(400).json({ success: false, error: "Email already exists" });
    }

    const hash = await bcrypt.hash(req.body.password, 10);
    const cart = {};

    const new_user = new User({
        username: req.body.name,
        email: req.body.email,
        password: hash,
        cart: cart,
    });

    await new_user.save();
    const data = {
        user: {
            id: new_user.id
        }
    };

    const token = jwt.sign(data, process.env.JWT_SECRET);
    res.json({ success: true, token });
};
