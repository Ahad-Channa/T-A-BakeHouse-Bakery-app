// 📁 routes/categoryRoutes.js
import express from 'express';
import {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from '../controllers/categoryController.js';

import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

router.post('/', upload.single('image'), createCategory);
router.put('/:id', upload.single('image'), updateCategory);

router.get('/', getAllCategories);
router.get('/:id', getCategoryById);
router.delete('/:id', deleteCategory);

export default router;
