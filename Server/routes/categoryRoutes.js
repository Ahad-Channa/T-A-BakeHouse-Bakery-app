import express from 'express';
import {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
} from '../controllers/categoryController.js';

const router = express.Router();

// POST - Create category
router.post('/', createCategory);

// GET - All categories
router.get('/', getAllCategories);

// GET - Single category by ID
router.get('/:id', getCategoryById);

// PUT - Update category by ID
router.put('/:id', updateCategory);

// DELETE - Delete category by ID
router.delete('/:id', deleteCategory);

export default router;
