
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../../context/CartContext";

function ClientProducts() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

    const { addToCart } = useCart();
  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data || []);
      } catch (err) {
        console.error("Error fetching products:", err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Get unique category names
  const categories = [
    "All",
    ...new Set(
      products
        .map((p) => p.category?.name)
        .filter((name) => name !== undefined && name !== null)
    ),
  ];

  // Filter by selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category?.name === selectedCategory);

  if (loading) {
    return <div className="text-center py-20 text-xl">Loading products...</div>;
  }

  return (
   
    <div className="px-4 py-10 sm:px-6 lg:px-8 max-w-7xl mx-auto ">
    <h2 className="text-4xl font-extrabold text-center text-amber-700 mb-8">
      Explore Our Products
    </h2>

    {/* Category filter */}
    <div className="w-full overflow-x-auto mb-8">
      <div className="flex space-x-3 min-w-max px-2">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border font-medium transition whitespace-nowrap ${
              selectedCategory === cat
                ? "bg-amber-600 text-white border-amber-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-amber-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>

    {/* Product Grid */}
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {filteredProducts.map((product) => (
        <div
          key={product._id}
          className="border rounded-xl p-4 shadow hover:shadow-lg transition bg-white"
        >
          <img
            src={`http://localhost:5000/${product.image.replace(/\\/g, "/")}`}
            alt={product.name}
            className="aspect-square w-full rounded-md object-cover mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <p className="text-sm text-gray-500 mb-1">
            {product.category?.name || "Uncategorized"}
          </p>
          <p className="text-sm mb-2">
            {product.inStock ? (
              <span className="text-green-600 font-medium">In Stock</span>
            ) : (
              <span className="text-red-600 font-medium">Out of Stock</span>
            )}
          </p>
          <p className="text-sm text-gray-600 mb-4">{product.description}</p>
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold text-amber-700">Rs {product.price}</p>
            <button
              onClick={() => addToCart(product)}
              disabled={!product.inStock}
              className={`px-4 py-1 text-sm rounded ${
                product.inStock
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default ClientProducts;
