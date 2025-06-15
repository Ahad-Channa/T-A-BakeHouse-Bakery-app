import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });
  const [categories, setCategories] = useState([]);

  // Fetch categories from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Failed to fetch categories", err));
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send product data to backend
      await axios.post("http://localhost:5000/api/products", formData);
      
      nav("/admin/admin-products");
    } catch (err) {
      console.error("Failed to add product", err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-adminbg animate-fadeIn">
      <div className="w-[700px] bg-white shadow-lg rounded-xl p-8 border border-2 border-borderbrown ">
        <h2 className="text-xl font-bold mb-4">Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mb-4 border border-gray-300 px-4 py-2 rounded-lg"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full mb-4 border border-gray-300 px-4 py-2 rounded-lg"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full mb-4 border border-gray-300 px-4 py-2 rounded-lg"
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full mb-4 border border-gray-300 px-4 py-2 rounded-lg"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>

          <div className="flex justify-around">
            <button type="submit" className="w-[150px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              Add
            </button>
            <button
              type="button"
              onClick={() => nav("/admin/admin-products")}
              className="w-[150px] bg-red-400 hover:bg-red-500 px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
