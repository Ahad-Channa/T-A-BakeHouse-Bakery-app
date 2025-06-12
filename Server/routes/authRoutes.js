import express from "express";
import { registerUser, loginUser, getUserProfile } from "../controllers/authController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// POST /api/auth/register
router.post("/register", registerUser);

// POST /api/auth/login
router.post("/login", loginUser);

// GET /api/auth/profile (Optional - Protected)
router.get("/profile", verifyToken, getUserProfile);

export default router;
