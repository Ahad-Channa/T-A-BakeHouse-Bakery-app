import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import isAdmin from '../middleware/isAdmin.js';

const router = express.Router();

// 🟢 Any logged-in user
router.get('/user-dashboard', authMiddleware, (req, res) => {
  res.json({ message: `Welcome ${req.user.name}, this is your dashboard.` });
});

// 🔴 Only admin
router.get('/admin-dashboard', authMiddleware, isAdmin, (req, res) => {
  res.json({ message: `Welcome Admin ${req.user.name}, you have full access.` });
});

export default router;
