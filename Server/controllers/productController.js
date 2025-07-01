import Product from "../models/productModel.js";


export const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, inStock } = req.body;
    const image = req.file ? req.file.path : null;

    const product = new Product({
      name,
      description,
      price,
      image,
      category,
      inStock,
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: "Failed to create product", error: err.message });
  }
};


export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('category', 'name');
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch products", error: err.message });
  }
};


export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('category', 'name');
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch product", error: err.message });
  }
};


export const updateProduct = async (req, res) => {
  try {
    const { name, description, price, category, inStock } = req.body;
    const updateFields = {
      name,
      description,
      price,
      category,
      inStock,
    };

    if (req.file) {
      updateFields.image = req.file.path;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      updateFields,
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: "Failed to update product", error: err.message });
  }
};


export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete product", error: err.message });
  }
};
