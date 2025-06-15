import Category from '../models/categoryModel.js';

// Create Category
export const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    // Check if category already exists
    const existing = await Category.findOne({ name });
    if (existing) {
      return res.status(400).json({ message: 'Category already exists' });
    }

    const image = req.file ? req.file.filename : null;

    const category = new Category({ name, description, image });
    await category.save();

    res.status(201).json({ message: 'Category created', category });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get All Categories
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get Single Category
export const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });

    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Update Category
export const updateCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    const updateFields = { name, description };

    if (req.file) {
      updateFields.image = req.file.filename;
    }

    const updated = await Category.findByIdAndUpdate(
      req.params.id,
      updateFields,
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: 'Category not found' });

    res.status(200).json({ message: 'Category updated', category: updated });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// ✅ Delete Category
export const deleteCategory = async (req, res) => {
  try {
    const deleted = await Category.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Category not found' });

    res.status(200).json({ message: 'Category deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
