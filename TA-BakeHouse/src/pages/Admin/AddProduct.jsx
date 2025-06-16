
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
    image: null,
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Failed to fetch categories", err));
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", formData.name);
      productData.append("description", formData.description);
      productData.append("price", formData.price);
      productData.append("category", formData.category);
      if (formData.image) {
        productData.append("image", formData.image);
      }

      await axios.post("http://localhost:5000/api/products", productData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      nav("/admin/admin-products");
    } catch (err) {
      console.error("Failed to add product", err);
      alert("Something went wrong!");
    }
  };

  return (
     <div className="w-[900px] h-[600px] flex items-center rounded-xl m-20 justify-center animate-fadeIn">
      <div className="w-[800px] bg-white shadow-lg rounded-xl p-8  ">
        <h2 className="text-xl font-bold mb-4">Add New Product</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
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

          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full mb-4"
          />

          <div className="flex justify-between">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Add
            </button>
            <button
              type="button"
              onClick={() => nav("/admin/admin-products")}
              className="bg-gray-200 px-4 py-2 rounded"
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
