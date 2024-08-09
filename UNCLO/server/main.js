import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT;

// Middleware
app.use(express.json());
app.use(cors()); 

// Routes
app.use('/auth', authRoutes);
app.use('/product', productRoutes);
app.use('/cart', cartRoutes);

//serve static file
app.use('/images', express.static('upload/images'));

app.get('/', (req, res) => { 
    res.send('App running');
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
  