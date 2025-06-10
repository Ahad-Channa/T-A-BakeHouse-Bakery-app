import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userAuthRoutes from './routes/UseratuhRoutes.js';
import cors from 'cors';
import protectedRoutes from './routes/protectedRoutes.js';



dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173',
 credentials: true,
 }));

app.use('/api/protected', protectedRoutes);

app.use('/api/auth', userAuthRoutes);

export default app;

// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors'; // ✅ Import CORS
// import connectDB from './config/db.js';
// import userAuthRoutes from './routes/UseratuhRoutes.js';
// import protectedRoutes from './routes/protectedRoutes.js';

// dotenv.config();
// connectDB();

// const app = express();

// // ✅ Enable CORS for Vite's dev server on port 5173
// app.use(cors({
//   origin: 'http://localhost:5173',
//   credentials: true,
// }));

// app.use(express.json());

// app.use('/api/protected', protectedRoutes);
// app.use('/api/auth', userAuthRoutes);

// export default app;
