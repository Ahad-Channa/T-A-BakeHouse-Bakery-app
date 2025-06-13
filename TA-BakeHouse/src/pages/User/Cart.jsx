/*

import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
const initialCart = [
  {
    id: 1,
    name: "Chocolate Cake",
    price: 500,
    image: "/images/chocolate-chip.png", 
  },
  {
    id: 2,
    name: "Cupcake",
    price: 150,
    image: "/images/cupcake.webp",
  },
  {
    id: 3,
    name: "Cookies Pack",
    price: 300,
    image: "/images/bread.jpg",
  },
];

const Cart = () => {
  const nav=useNavigate()
  const [cartItems, setCartItems] = useState(initialCart);
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelect = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    setSelectedItems((prev) => prev.filter((item) => item !== id));
  };

  const total = cartItems
    .filter((item) => selectedItems.includes(item.id))
    .reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    const itemsToCheckout = cartItems.filter((item) =>
      selectedItems.includes(item.id)
    );
    alert("Checkout Items:\n" + itemsToCheckout.map(i => i.name).join(", "));
    nav("/checkout")
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">🛒 Your Cart</h2>
      <div className="grid gap-4">
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-white rounded-xl shadow-md p-4"
            >
              <input
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => toggleSelect(item.id)}
                className="mr-4 w-5 h-5 accent-green-500"
              />
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg mr-4"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">Rs. {item.price}</p>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-500 hover:text-red-700 text-lg"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-6 bg-white rounded-lg p-4 shadow-md">
          <div className="flex justify-between text-lg font-medium">
            <span>Total (Selected):</span>
            <span>Rs. {total}</span>
          </div>
          <button
            onClick={handleCheckout}
            className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 disabled:opacity-50"
            disabled={selectedItems.length === 0}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;*/
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialCart = [
  {
    id: 1,
    name: "Chocolate Cake",
    price: 500,
    quantity: 1,
    image: "/images/chocolate-chip.png",
  },
  {
    id: 2,
    name: "Cupcake",
    price: 150,
    quantity: 1,
    image: "/images/cupcake.webp",
  },
  {
    id: 3,
    name: "Cookies Pack",
    price: 300,
    quantity: 1,
    image: "/images/bread.jpg",
  },
];

const Cart = () => {
  const nav = useNavigate();
  const [cartItems, setCartItems] = useState(initialCart);
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelect = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    setSelectedItems((prev) => prev.filter((item) => item !== id));
  };

  const handleQuantityChange = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const total = cartItems
    .filter((item) => selectedItems.includes(item.id))
    .reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    const itemsToCheckout = cartItems.filter((item) =>
      selectedItems.includes(item.id)
    );
    
    nav("/checkout", { state: { selectedItems: itemsToCheckout } });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">🛒 Your Cart</h2>
      <div className="grid gap-4">
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-white rounded-xl shadow-md p-4"
            >
              <input
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => toggleSelect(item.id)}
                className="mr-4 w-5 h-5 accent-green-500"
              />
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg mr-4"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">Rs. {item.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="bg-gray-200 px-2 rounded-l hover:bg-gray-300"
                  >
                    −
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="bg-gray-200 px-2 rounded-r hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-500 hover:text-red-700 text-lg"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-6 bg-white rounded-lg p-4 shadow-md">
          <div className="flex justify-between text-lg font-medium">
            <span>Total (Selected):</span>
            <span>Rs. {total}</span>
          </div>
          <button
            onClick={handleCheckout}
            className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 disabled:opacity-50"
            disabled={selectedItems.length === 0}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
