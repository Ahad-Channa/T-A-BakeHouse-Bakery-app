import React from 'react';

const sampleProducts = [
  {
    id: 1,
    name: "Chocolate Cake",
    price: 1200,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Strawberry Tart",
    price: 850,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Garlic Bread",
    price: 300,
    image: "https://via.placeholder.com/150",
  },
];

const Home = () => {
  //return 
  (
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-40  relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white shadow-lg rounded-xl p-6"
        >
          <div className="bg-white/50 backdrop-blur-md p-8 rounded-2xl max-w-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-amber-600 mb-2">
              Heyyy USERNAME
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
          className="w-[500px] h-[350px] bg-cover bg-center shadow-lg rounded-2xl "
          style={{
            backgroundImage:
              "url('/images/ChatGPT_Image_Jun_13__2025__11_03_50_PM-removebg-preview.png')",
          }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
    );
};

export default Home;
