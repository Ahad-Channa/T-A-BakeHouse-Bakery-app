import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

// @desc    Register new user
export const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedPassword, role });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id, role: newUser.role }, JWT_SECRET, { expiresIn: "7d" });

    res.status(201).json({ token, user: { id: newUser._id, name: newUser.name, role: newUser.role } });
  } catch (err) {
    res.status(500).json({ message: "Registration failed", error: err.message });
  }
};

// @desc    Login user
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: "7d" });

    res.status(200).json({ token, user: { id: user._id, name: user.name, role: user.role } });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};

// @desc    Get user profile
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch profile", error: err.message });
  }
};