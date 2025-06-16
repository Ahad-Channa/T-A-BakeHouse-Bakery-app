
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const nav = useNavigate();

  // Fetch products and categories
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch products", err);
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

    fetchProducts();
    fetchCategories();
  }, []);

  // Filter products by selected category
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category?.name === selectedCategory);

  // Delete product handler
 const handleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/api/products/${id}`);
    setProducts(products.filter((p) => p._id !== id));
  } catch (err) {
    console.error("Failed to delete product", err);
  }
};

  // Toggle inStock status
  const toggleInStock = async (id, currentStatus) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/products/${id}`, {
        inStock: !currentStatus,
      });

      setProducts((prev) =>
        prev.map((prod) =>
          prod._id === id ? { ...prod, inStock: res.data.inStock } : prod
        )
      );
    } catch (err) {
      console.error("Toggle failed", err);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6 my-8  animate-fadeIn">
      <div className="flex justify-between  rounded-lg items-center mb-6 mt-12">
        <h1 className="text-2xl font-bold py-2 px-4">Product Management</h1>
        <button
          onClick={() => nav("/admin/add-product")}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-10 my-4 w-[200px]"
        >
          Add Product
        </button>
      </div>

      {/* Category filter */}
      <div className="mb-4">
        <label className="mr-2 font-semibold">Filter by Category:</label>
        <select
          className="p-2 border rounded"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Product Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">Image</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">In Stock</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((prod) => (
              <tr key={prod._id}>
                <td className="px-4 py-2 border">
                  {prod.image ? (
                    <img
                      src={`http://localhost:5000/${prod.image}`}
                      alt={prod.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  ) : (
                    <span>No image</span>
                  )}
                </td>
                <td className="px-4 py-2 border">{prod.name}</td>
                <td className="px-4 py-2 border">Rs. {prod.price}</td>
                <td className="px-4 py-2 border">{prod.category?.name || "Uncategorized"}</td>
                <td className="px-4 py-2 border text-center">
                  <button
                    onClick={() => toggleInStock(prod._id, prod.inStock)}
                    className={`px-3 py-1 rounded-full text-white ${
                      prod.inStock ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {prod.inStock ? "Yes" : "No"}
                  </button>
                </td>
                <td className="px-4 py-2 border space-x-2">
                  <button
                    // onClick={() => nav(`/admin/admin-products/edit-product/${prod._id}`)}
                    onClick={() => nav(`/admin/edit-product/${prod._id}`)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(prod._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        className="bg-red-400 py-2 px-4 mt-6 rounded hover:bg-red-500 w-[150px] "
        onClick={() => nav("/admin")}
      >
        Back
      </button>
    </div>
  );
};

export default AdminProducts;
