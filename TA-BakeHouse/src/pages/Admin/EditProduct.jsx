import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    inStock: true,
    category: "",
  });

  const [categories, setCategories] = useState([]);

  // Fetch product and categories
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        const prod = res.data;
        setProduct({
          name: prod.name || "",
          price: prod.price || "",
          inStock: prod.inStock ?? true,
          category: prod.category?._id || "",
        });
      } catch (err) {
        console.error("Failed to fetch product", err);
      }
    };

    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/categories");
        setCategories(res.data);
      } catch (err) {
        console.error("Failed to fetch categories", err);
      }
    };

    fetchProduct();
    fetchCategories();
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Update product
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/products/${id}`, product);
      nav("/admin/admin-products");
    } catch (err) {
      console.error("Failed to update product", err);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-adminbg animate-fadeIn">
       <div className="w-[700px] bg-white shadow-lg rounded-xl p-8 border border-2 border-borderbrown ">
      <h2 className="text-2xl font-bold mb-6">Edit Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Product Name:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Category:</label>
          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="inStock"
            checked={product.inStock}
            onChange={handleChange}
          />
          <label className="font-semibold">In Stock</label>
        </div>

        <div className="flex justify-around">
          <button
            type="submit"
            className="bg-green-400 font-bold px-6 py-2 rounded hover:bg-green-500"
          >
            Update
          </button>
          <button
            type="button"
            onClick={() => nav("/admin/admin-products")}
            className="bg-red-400 px-6 py-2 font-bold rounded hover:bg-red-500"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
    </div>
   
  );
};

export default EditProduct;
