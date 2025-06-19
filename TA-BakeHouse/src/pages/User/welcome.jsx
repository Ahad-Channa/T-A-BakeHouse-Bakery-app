
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";
import cakeimg from "./images/coffeecake.jpg";
import { useCart } from "../../context/CartContext"; 



const Welcome = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
const { addToCart } = useCart();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data.slice(0, 8)); // Only show first 8 products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-orange-50 min-h-screen">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-20 md:py-32 relative z-10 bg-gradient-to-br from-orange-50 to-amber-100">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-10 max-w-2xl w-full"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-amber-600 mb-3">
            Heyyy {user?.name || "Guest"} 👋
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4">
            WELCOME TO T&A BAKEHOUSE
          </h2>
          <h3 className="text-2xl text-orange-500 mb-2">
            Looking for something special?
          </h3>
          <p className="text-lg text-gray-800 leading-relaxed">
            Order your favorites now and make every moment a little more
            special. <br />
            Freshly baked happiness is just a click away – explore our delights
            and treat yourself today!
          </p>
        </motion.div>

        <motion.div
          className="w-[300px] md:w-[400px] h-[250px] md:h-[350px] mt-10 md:mt-0 bg-cover bg-center rounded-2xl shadow-lg"
          style={{
            backgroundImage:
              "url('/images/ChatGPT_Image_Jun_13__2025__11_03_50_PM-removebg-preview.png')",
          }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      {/* Featured Cake */}
      <div className="relative bg-black text-yellow-300 px-6 md:px-20 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold">COFFEE FUDGE CAKE</h2>
          <p className="text-sm md:text-base text-yellow-100">
            Our iconic cake, loved throughout generations. <br />
            Perfectly moist sponge, rich and creamy. Have it with tea or coffee
            for a perfect afternoon.
          </p>
          <button className="mt-4 px-6 py-2 border border-yellow-300 rounded-full hover:bg-yellow-300 hover:text-black transition duration-300">
            Order Now
          </button>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src={cakeimg}
            alt="Coffee Fudge Cake"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* Product Showcase */}
      <div className="px-6 md:px-10 py-16">
      <h2 className="text-4xl font-extrabold text-center text-amber-700 mb-12">
           Our Featured Products
         </h2>
         </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-16 py-12">
  {products.map((product) => (
    <div
      key={product._id}
      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
    >
      <img
        src={`http://localhost:5000/${product.image.replace(/\\/g, "/")}`}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
      <p className="text-sm text-gray-500 mb-1">{product.category?.name}</p>
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


      <div className="text-center mt-8 mb-20">
        <Link
  to="/client-products"
  className="inline-block px-6 py-2 border border-amber-600 text-amber-700 rounded-full hover:bg-amber-600 hover:text-white transition"
>
  View More Products →
</Link>
      </div>

       <div className="bg-white py-16 px-6 md:px-12 text-center">
         <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-amber-600 mb-4"
        >
          Share the Joy of Gifting 🎁
        </motion.h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
          Whether you're celebrating a birthday, an achievement, or simply saying
          thank you — our curated gift sets are the perfect way to show you care.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Deluxe Gift Basket",
              description:
                "A thoughtful mix of premium cookies, chocolates, and mini cakes. Wrapped and ready to delight.",
              image: "/images/0a68ed5f-577a-462f-aeca-b1c5f558261b.png",
            },
            {
              title: "Signature Biscuits Box",
              description:
                "Crispy, buttery, and handcrafted – our biscuit box is perfect for every mood and moment.",
              image: '/images/biscut.jpg',
            },
            {
              title: "Royal Celebration Cake",
              description:
                "Celebrate the sweet moments with our luxurious celebration cakes made for grand occasions.",
              image: "https://tehzeeb.com.pk/wp-content/uploads/2022/07/royal-cake.jpg",
            },
          ].map((gift, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-amber-50 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={gift.image}
                alt={gift.title}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-amber-700 mb-2">
                {gift.title}
              </h3>
              <p className="text-gray-600 text-sm">{gift.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Welcome;
