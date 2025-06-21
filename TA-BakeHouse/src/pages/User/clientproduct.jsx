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
      : products.filter(
          (product) => product.category?.name === selectedCategory
        );

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[800px] bg-white">
        <div className="text-center py-4 text-xl z-10">Loading products...</div>
        <img
          src="/images/Cake.gif"
          alt="Loading..."
          className="w-[300px] h-auto sm:w-[400px] md:w-[500px] hover:scale-105 transition-transform duration-300 ease-in-out z-0"
        />
      </div>
    );
  }

  return (
    <div className="w-full min-h-[1000px] px-4 py-10 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="px-4 py-10 sm:px-6 lg:px-8 max-w-7xl mx-auto ">
        <h2 className=" text-4xl font-extrabold text-center text-amber-700 mb-8 mt-20">
          Explore Our Products
        </h2>

       {/* Category filter */}
        <div className="w-full mb-8 flex items-center gap-4">
          <button
            onClick={() =>
              (document.getElementById("cat-scroll").scrollLeft -= 200)
            }
            className="px-4 py-2 bg-white border rounded shadow text-amber-800 font-semibold hover:bg-amber-50"
          >
            ← Prev
          </button>

          <div id="cat-scroll" className="w-full overflow-x-auto no-scrollbar">
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

          <button
            onClick={() =>
              (document.getElementById("cat-scroll").scrollLeft += 200)
            }
            className="px-4 py-2 bg-white border rounded shadow text-amber-800 font-semibold hover:bg-amber-50"
          >
            Next →
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="border border-2 border-userborder rounded-xl p-4 shadow hover:shadow-lg transition bg-white"
            >
              <img
                src={`http://localhost:5000/${product.image.replace(
                  /\\/g,
                  "/"
                )}`}
                alt={product.name}
                className="aspect-square w-full rounded-md object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
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
              <p className="text-sm text-gray-600 mb-4">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold text-amber-700">
                  Rs {product.price}
                </p>
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
    </div>
  );
}

export default ClientProducts;
