import express from 'express';
import { addProduct, removeProduct , allproducts , newCollection , popular } from '../controllers/productControllers.js';

import upload from '../middleware/imageUploadMiddleware.js';

const router = express.Router();

router.post('/upload', upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${process.env.PORT}/images/${req.file.filename}`
    });
});

//admin
router.post('/addproduct', addProduct);
router.post('/removeproduct',  removeProduct);


//client
router.get('/allproducts' , allproducts);
router.get('/new' , newCollection);
router.get('/popular' , popular)

export default router;
