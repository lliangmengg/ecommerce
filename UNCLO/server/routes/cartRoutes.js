import express from 'express';
import { addToCart, removeFromCart , getCartData } from '../controllers/cartControllers.js'
import { fetchUser } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/addtocart', fetchUser, addToCart);
router.post('/removefromcart' , fetchUser , removeFromCart);
router.post('/getcartdata' , fetchUser , getCartData)
export default router;
