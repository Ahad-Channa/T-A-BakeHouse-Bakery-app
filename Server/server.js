// server.js
import express from 'express';
import dotenv from 'dotenv';

import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from "./routes/productRoutes.js";

const app = express();

dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use('/api/categories', categoryRoutes);
app.use("/api/products", productRoutes);
app.use('/uploads/categories', express.static('uploads/categories'));

app.get('/', (req, res) => {
  res.send('API is running...');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
