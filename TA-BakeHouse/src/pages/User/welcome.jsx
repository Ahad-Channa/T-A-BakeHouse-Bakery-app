// // import React from "react";
// // import { motion } from "framer-motion";
// // import { useAuth } from "../../context/AuthContext";
// // import cakeimg from "./images/coffeecake.jpg"
// // import cookie from "./images/biscut.jpg"

// // const Welcome = () => {
// //   const { user } = useAuth();

// //   return (
// //     <div className="bg-orange-50 min-h-screen">
// //       {/* 👋 Greeting Section */}
// //       <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-20 md:py-32 relative z-10 bg-gradient-to-br from-orange-50 to-amber-100">
// //         <motion.div
// //           initial={{ scale: 0.8, opacity: 0 }}
// //           whileInView={{ scale: 1, opacity: 1 }}
// //           transition={{ duration: 0.6 }}
// //           viewport={{ once: true }}
// //           className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-10 max-w-2xl w-full"
// //         >
// //           <h2 className="text-3xl md:text-4xl font-extrabold text-amber-600 mb-3">
// //             Heyyy {user?.name || "Guest"} 👋
// //           </h2>
// //           <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4">
// //             WELCOME TO T&A BAKEHOUSE
// //           </h2>
// //           <h3 className="text-2xl text-orange-500 mb-2">
// //             Looking for something special?
// //           </h3>
// //           <p className="text-lg text-gray-800 leading-relaxed">
// //             Order your favorites now and make every moment a little more
// //             special. <br />
// //             Freshly baked happiness is just a click away – explore our delights
// //             and treat yourself today!
// //           </p>
// //         </motion.div>

// //         <motion.div
// //           className="w-[300px] md:w-[400px] h-[250px] md:h-[350px] mt-10 md:mt-0 bg-cover bg-center rounded-2xl shadow-lg"
// //           style={{
// //             backgroundImage:
// //               "url('/images/ChatGPT_Image_Jun_13__2025__11_03_50_PM-removebg-preview.png')",
// //           }}
// //           animate={{ y: [0, -10, 0] }}
// //           transition={{ duration: 3, repeat: Infinity }}
// //         />
// //       </div>

// //       {/* 🎂 Hero Cake Section */}
// //       <div className="relative bg-black text-yellow-300 px-6 md:px-20 py-16 flex flex-col md:flex-row items-center">
// //         <div className="md:w-1/2 space-y-4">
// //           <h2 className="text-2xl md:text-4xl font-bold">COFFEE FUDGE CAKE</h2>
// //           <p className="text-sm md:text-base text-yellow-100">
// //             Our iconic cake, loved throughout generations. <br />
// //             Perfectly moist sponge, rich and creamy. Have it with tea or coffee
// //             for a perfect afternoon.
// //           </p>
// //           <button className="mt-4 px-6 py-2 border border-yellow-300 rounded-full hover:bg-yellow-300 hover:text-black transition duration-300">
// //             Order Now
// //           </button>
// //         </div>
// //         <div className="md:w-1/2 mt-10 md:mt-0">
// //           <img
// //             src={cakeimg}
// //             alt="Coffee Fudge Cake"
// //             className="rounded-xl shadow-lg w-full object-cover"
// //           />
// //         </div>
// //       </div>
// //             {/* 🎁 Custom Gifting Section */}
// // <div className="bg-white py-16 px-6 md:px-12 text-center">
// //   <motion.h2
// //     initial={{ opacity: 0, y: 50 }}
// //     whileInView={{ opacity: 1, y: 0 }}
// //     transition={{ duration: 0.6 }}
// //     viewport={{ once: true }}
// //     className="text-4xl font-bold text-amber-600 mb-4"
// //   >
// //     Share the Joy of Gifting 🎁
// //   </motion.h2>
// //   <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
// //     Whether you're celebrating a birthday, an achievement, or simply saying
// //     thank you — our curated gift sets are the perfect way to show you care.
// //   </p>

// //   <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
// //     {[
// //       {
// //         title: "Deluxe Gift Basket",
// //         description:
// //           "A thoughtful mix of premium cookies, chocolates, and mini cakes. Wrapped and ready to delight.",
// //         image: "/images/0a68ed5f-577a-462f-aeca-b1c5f558261b.png",
// //       },
// //       {
// //         title: "Signature Biscuits Box",
// //         description:
// //           "Crispy, buttery, and handcrafted – our biscuit box is perfect for every mood and moment.",
// //         image: '/images/biscut.jpg',
// //       },
// //       {
// //         title: "Royal Celebration Cake",
// //         description:
// //           "Celebrate the sweet moments with our luxurious celebration cakes made for grand occasions.",
// //         image: "https://tehzeeb.com.pk/wp-content/uploads/2022/07/royal-cake.jpg",
// //       },
// //     ].map((gift, idx) => (
// //       <motion.div
// //         key={idx}
// //         whileHover={{ scale: 1.05 }}
// //         transition={{ type: "spring", stiffness: 300 }}
// //         className="bg-amber-50 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
// //       >
// //         <img
// //           src={gift.image}
// //           alt={gift.title}
// //           className="w-full h-56 object-cover rounded-lg mb-4"
// //         />
// //         <h3 className="text-xl font-semibold text-amber-700 mb-2">
// //           {gift.title}
// //         </h3>
// //         <p className="text-gray-600 text-sm">{gift.description}</p>
// //       </motion.div>
// //     ))}
// //   </div>
// // </div>

// //     </div>
// //   );
// // };

// // export default Welcome;
// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { useAuth } from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import cakeimg from "./images/coffeecake.jpg";

// const Welcome = () => {
//   const { user } = useAuth();
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/products");
//         const data = await res.json();
//         setProducts(data.slice(0, 8));
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };
//     fetchProducts();
//   }, []);

//   return (
//     <div className="bg-orange-50 min-h-screen">
//       {/* 👋 Greeting Section */}
//       <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-20 md:py-32 relative z-10 bg-gradient-to-br from-orange-50 to-amber-100">
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-10 max-w-2xl w-full"
//         >
//           <h2 className="text-3xl md:text-4xl font-extrabold text-amber-600 mb-3">
//             Heyyy {user?.name || "Guest"} 👋
//           </h2>
//           <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4">
//             WELCOME TO T&A BAKEHOUSE
//           </h2>
//           <h3 className="text-2xl text-orange-500 mb-2">
//             Looking for something special?
//           </h3>
//           <p className="text-lg text-gray-800 leading-relaxed">
//             Order your favorites now and make every moment a little more
//             special. <br />
//             Freshly baked happiness is just a click away – explore our delights
//             and treat yourself today!
//           </p>
//         </motion.div>

//         <motion.div
//           className="w-[300px] md:w-[400px] h-[250px] md:h-[350px] mt-10 md:mt-0 bg-cover bg-center rounded-2xl shadow-lg"
//           style={{
//             backgroundImage:
//               "url('/images/ChatGPT_Image_Jun_13__2025__11_03_50_PM-removebg-preview.png')",
//           }}
//           animate={{ y: [0, -10, 0] }}
//           transition={{ duration: 3, repeat: Infinity }}
//         />
//       </div>

//       {/* Featured Products */}
//       <div className="px-6 md:px-12 py-16">
//         <h2 className="text-4xl font-extrabold text-center text-amber-700 mb-12">
//           Our Featured Products
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {products.map((product) => (
//             <div
//               key={product._id}
//               className="border rounded-xl p-4 shadow hover:shadow-lg transition bg-white"
//             >
//               <img
//                 src={`http://localhost:5000/${product.image.replace(/\\/g, "/")}`}
//                 alt={product.name}
//                 className="aspect-square w-full rounded-md object-cover mb-4"
//               />
//               <h3 className="text-lg font-semibold text-gray-800">
//                 {product.name}
//               </h3>
//               <p className="text-sm text-gray-500 mb-1">
//                 {product.category?.name || "Uncategorized"}
//               </p>
//               <p className="text-sm text-gray-600 mb-4">
//                 {product.description}
//               </p>
//               <p className="text-lg font-bold text-amber-700">
//                 Rs {product.price}
//               </p>
//             </div>
//           ))}
//         </div>
//         <div className="text-center mt-10">
//           <button
//             onClick={() => navigate("/products")}
//             className="px-6 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition"
//           >
//             View More Products
//           </button>
//         </div>
//       </div>

//       {/* 🎂 Hero Cake Section */}
//       <div className="relative bg-black text-yellow-300 px-6 md:px-20 py-16 flex flex-col md:flex-row items-center">
//         <div className="md:w-1/2 space-y-4">
//           <h2 className="text-2xl md:text-4xl font-bold">COFFEE FUDGE CAKE</h2>
//           <p className="text-sm md:text-base text-yellow-100">
//             Our iconic cake, loved throughout generations. <br />
//             Perfectly moist sponge, rich and creamy. Have it with tea or coffee
//             for a perfect afternoon.
//           </p>
//           <button className="mt-4 px-6 py-2 border border-yellow-300 rounded-full hover:bg-yellow-300 hover:text-black transition duration-300">
//             Order Now
//           </button>
//         </div>
//         <div className="md:w-1/2 mt-10 md:mt-0">
//           <img
//             src={cakeimg}
//             alt="Coffee Fudge Cake"
//             className="rounded-xl shadow-lg w-full object-cover"
//           />
//         </div>
//       </div>

//       {/* 🎁 Custom Gifting Section */}
//       <div className="bg-white py-16 px-6 md:px-12 text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-4xl font-bold text-amber-600 mb-4"
//         >
//           Share the Joy of Gifting 🎁
//         </motion.h2>
//         <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
//           Whether you're celebrating a birthday, an achievement, or simply saying
//           thank you — our curated gift sets are the perfect way to show you care.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {[
//             {
//               title: "Deluxe Gift Basket",
//               description:
//                 "A thoughtful mix of premium cookies, chocolates, and mini cakes. Wrapped and ready to delight.",
//               image: "/images/0a68ed5f-577a-462f-aeca-b1c5f558261b.png",
//             },
//             {
//               title: "Signature Biscuits Box",
//               description:
//                 "Crispy, buttery, and handcrafted – our biscuit box is perfect for every mood and moment.",
//               image: '/images/biscut.jpg',
//             },
//             {
//               title: "Royal Celebration Cake",
//               description:
//                 "Celebrate the sweet moments with our luxurious celebration cakes made for grand occasions.",
//               image: "https://tehzeeb.com.pk/wp-content/uploads/2022/07/royal-cake.jpg",
//             },
//           ].map((gift, idx) => (
//             <motion.div
//               key={idx}
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 300 }}
//               className="bg-amber-50 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
//             >
//               <img
//                 src={gift.image}
//                 alt={gift.title}
//                 className="w-full h-56 object-cover rounded-lg mb-4"
//               />
//               <h3 className="text-xl font-semibold text-amber-700 mb-2">
//                 {gift.title}
//               </h3>
//               <p className="text-gray-600 text-sm">{gift.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Welcome;
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";
import cakeimg from "./images/coffeecake.jpg";

const Welcome = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);

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
    <div className="relative">
      <div className="absolute top-0 left-0 w-full z-0">
        <svg viewBox="0 0 1440 320" className="w-full h-auto">
          <path
            fill="#a68a64"
            opacity="0.6"
            d="M0,32L1440,320L1440,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Hero Section */}
      <div className="mb-20 flex flex-col md:flex-row items-center justify-around px-6 md:px-12 py-40 relative z-10 ">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white shadow-lg rounded-xl p-6 border-2 border-userborder "
        >
          <div className="bg-white/50 backdrop-blur-md p-8 rounded-2xl max-w-2xl shadow-xl border-2 border-userborder ">
            <h2 className="text-3xl font-bold text-amber-600 mb-2">
              Heyyy {user?.name || "Guest"} 👋
            </h2>
            <h2 className="text-3xl font-bold text-red-800 mb-4 text-center">
              WELCOME TO THE T&A BAKEHOUSE
            </h2>
            <h3 className="text-2xl text-orange-500 mb-2">
              Looking for something special?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Order your favorites now and make every moment a little more
              special. <br />
              Freshly baked happiness is just a click away, explore our delights
              and treat yourself today!
            </p>
          </div>
        </motion.div>

        <motion.div
          className="w-[500px] h-[350px] bg-cover bg-center shadow-lg rounded-2xl  "
          style={{
            backgroundImage:
              "url('/images/ChatGPT_Image_Jun_13__2025__11_03_50_PM-removebg-preview.png')",
          }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      {/* Featured Cake */}
      <div className="  rounded-xl bg-black  relative text-yellow-300 px-6 md:px-20 py-16 flex flex-col md:flex-row items-center my-12">
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

      <div>
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="px-6 md:px-10 py-16"
  >
    <h2 className="text-4xl font-extrabold text-center text-amber-700 mb-8 underline decoration-solid underline-offset-[20px]">
      Our Featured Products
    </h2>
  </motion.div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-16 py-12">
    {products.map((product, index) => (
      <motion.div
        key={product._id}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition border-2 border-userborder"
      >
        <img
          src={`http://localhost:5000/${product.image.replace(/\\/g, "/")}`}
          alt={product.name}
          className="w-full h-80 object-cover rounded-md mb-4"
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
          <p className="text-lg font-bold text-amber-700">
            Rs {product.price}
          </p>
          <button
            disabled={!product.inStock}
            className={`px-3 py-1 text-sm rounded ${
              product.inStock
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
          >
            Add to Cart
          </button>
        </div>
      </motion.div>
    ))}
  </div>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="text-center mt-8 mb-12"
  >
    <Link
      to="/client-products"
      className="w-[300px] inline-block px-6 py-2 border border-amber-800 text-amber-800 rounded-full hover:bg-amber-600 hover:text-white transition"
    >
      View More Products →
    </Link>
  </motion.div>
</div>
      {/*"Gift section"*/}
      <div className=" py-16 px-6 md:px-12 text-center ">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-amber-600 mb-4 "
        >
          Share the Joy of Gifting 🎁
        </motion.h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto text-xl">
          Whether you're celebrating a birthday, an achievement, or simply
          saying thank you — our curated gift sets are the perfect way to show
          you care.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
          {[
            {
              title: "Deluxe Gift Basket",
              description:
                "A thoughtful mix of premium cookies, chocolates, and mini cakes. Wrapped and ready to delight.",
              image: "/images/small_hamper.webp",
            },
            {
              title: "Signature Biscuits Box",
              description:
                "Crispy, buttery, and handcrafted, our biscuit box is perfect for every mood and moment.",
              image: "/images/signature-mix-butter.webp",
            },
            {
              title: "Royal Celebration Cake",
              description:
                "Celebrate the sweet moments with our luxurious celebration cakes made for grand occasions.",
              image:
                "/images/graduate-cake.jpg",
            },
          ].map((gift, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-amber-50 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 border-2 border-userborder"
            >
              <img
                src={gift.image}
                alt={gift.title}
                className="w-full  object-cover rounded-lg mb-4"
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
