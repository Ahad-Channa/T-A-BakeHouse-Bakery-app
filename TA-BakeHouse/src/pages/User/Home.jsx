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
  return (
    <div className="p-6 bg-yellow-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-yellow-700">Welcome to Sweet Bites Bakery</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sampleProducts.map((product) => (
          <div key={product.id} className="bg-white border rounded-2xl shadow-lg p-4 hover:shadow-2xl transition">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-xl mb-4" />
            <h2 className="text-xl font-semibold text-yellow-700">{product.name}</h2>
            <p className="text-gray-600">Rs. {product.price}</p>
            <button className="mt-3 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-xl w-full transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
