import express from 'express';
import { login, register } from '../controllers/adminAuthController.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// Protected routes
router.get('/user/dashboard', authenticate, authorize(['user']), (req, res) => {
  res.json({ message: 'User dashboard', user: req.user });
});

router.get('/admin/dashboard', authenticate, authorize(['admin']), (req, res) => {
  res.json({ message: 'Admin dashboard', user: req.user });
});

export default router;
