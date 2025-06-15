// 📁 models/categoryModel.js
import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Category name is required'],
      unique: true,
      trim: true,
    },
    description: { 
      type: String,
    },
    image: {
      type: String, // filename (e.g., "bread.png")
    },
  },
  { timestamps: true }
);

export default mongoose.model('Category', categorySchema);
