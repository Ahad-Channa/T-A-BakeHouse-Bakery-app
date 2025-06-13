
/*import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const cartItems = [
    { name: "Chocolate Cake", quantity: 2, price: 500, image: "/images/cupcake.webp" },
    { name: "Butter Cookies", quantity: 5, price: 40, image: "/images/cupcake.webp" },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirm = () => {
    // 👇 Yahan future me API call ya localStorage use kar sakti ho
    console.log("Order placed:", { ...formData, cartItems });

    // Show message
    alert("Order placed successfully!");

    // Redirect to homepage or incoming orders (admin)
    navigate("/"); // Or navigate("/orders")
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>

      <div className="mb-6 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
      </div>

      <h3 className="text-xl font-semibold mb-4">Your Order</h3>
      <div className="space-y-4 mb-6">
        {cartItems.map((item, i) => (
          <div key={i} className="flex items-center border rounded-lg p-4 bg-gray-50 shadow-sm">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded mr-4" />
            <div>
              <h4 className="font-semibold">{item.name}</h4>
              <p>Quantity: {item.quantity}</p>
              <p>Price: Rs. {item.price}</p>
              <p className="font-bold">Total: Rs. {item.quantity * item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-right text-lg font-bold mb-6">
        Final Total: Rs. {total}
      </div>

      <div className="flex justify-end gap-4">
        <button
          onClick={handleConfirm}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
        >
          Confirm Order
        </button>
        <button
          onClick={() => navigate("/cart")}
          className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Checkout;
*/

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const { state } = useLocation();
  const nav = useNavigate();
  const [showPopup, setShowPopup] = useState(false);


  const cartItems = state?.selectedItems || [];

  const total = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirm = () => {
  
  setShowPopup(true);


  setTimeout(() => {
    setShowPopup(false);
    nav("/");
  }, 3000);
};


  return (

    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>

      <div className="mb-6 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
      </div>

      <h3 className="text-xl font-semibold mb-4">Your Order</h3>
      <div className="space-y-4 mb-6">
        {cartItems.map((item, i) => (
          <div key={i} className="flex items-center border rounded-lg p-4 bg-gray-50 shadow-sm">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded mr-4" />
            <div>
              <h4 className="font-semibold">{item.name}</h4>
              <p>Quantity: {item.quantity}</p>
              <p>Price: Rs. {item.price}</p>
              <p className="font-bold">Total: Rs. {item.quantity * item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-right text-lg font-bold mb-6">
        Final Total: Rs. {total}
      </div>

      <div className="flex justify-end gap-4">
        <button
          onClick={handleConfirm}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
        >
          Confirm Order
        </button>
        {showPopup && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
      <h3 className="text-xl font-bold mb-2 text-green-600">Order Placed!</h3>
      <p className="text-gray-700">Thank you for your order. We will contact you shortly.</p>
    </div>
  </div>
)}

        <button
          onClick={() => nav("/cart")}
          className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Checkout;
