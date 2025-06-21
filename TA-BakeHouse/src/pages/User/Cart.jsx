
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const nav = useNavigate();
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelect = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleQuantityChange = (id, delta) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      const newQty = Math.max(1, item.quantity + delta);
      updateQuantity(id, newQty);
    }
  };

  const handleRemove = (id) => {
    removeFromCart(id);
    setSelectedItems((prev) => prev.filter((item) => item !== id));
  };

  const total = cartItems
    .filter((item) => selectedItems.includes(item.id))
    .reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    const itemsToCheckout = cartItems.filter((item) =>
      selectedItems.includes(item.id)
    );
    nav("/user/checkout", { state: { selectedItems: itemsToCheckout } });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <h2 className="text-2xl font-bold mb-6">🛒 Your Cart</h2>

        <div className="grid gap-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-gray-50 rounded-xl shadow-sm p-4"
              >
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => toggleSelect(item.id)}
                  className="mr-4 w-5 h-5 accent-green-500"
                />

                <img
                  src={
                    item.image?.startsWith("http")
                      ? item.image
                      : `http://localhost:5000/${item.image?.replace(/\\/g, "/")}`
                  }
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
    </div>
  );
};

export default Cart;
