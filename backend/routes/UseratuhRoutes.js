// routes/UserauthRoutes.js
import express from 'express';
import { login, register } from '../controllers/authController.js';
import { getUserProfile, getAllUsers, deleteUserById } from '../controllers/userController.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// 🧑‍💼 Get logged-in user's profile
router.get('/profile', authenticate, getUserProfile);

// 🛡️ Protected dashboards
router.get('/user/dashboard', authenticate, authorize(['user']), (req, res) => {
  res.json({ message: 'User dashboard', user: req.user });
});

router.get('/admin/dashboard', authenticate, authorize(['admin']), (req, res) => {
  res.json({ message: 'Admin dashboard', user: req.user });
});

// 👑 Admin-only: view all users
router.get('/admin/users', authenticate, authorize(['admin']), getAllUsers);


// 👑 Admin-only: delete user by ID
router.delete('/admin/users/:id', authenticate, authorize(['admin']), deleteUserById);
export default router;
