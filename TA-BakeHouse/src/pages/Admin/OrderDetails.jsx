import React from "react";
import { useParams, Link } from "react-router-dom";

const OrderDetails = () => {
  const { orderId } = useParams();

  // Dummy order data
  const order = {
    id: orderId,
    user: "Tasmia",
    address: "Shikarpur",
    phone: "9876543210",
    items: [
      {
        name: "Chocolate Cake",
        quantity: 2,
        price: 500,
        image: "/images/png-clipart-torta-cupcake-bakery-custard-sponge-cake-chocolate-cake-food-frozen-dessert-thumbnail-removebg-preview.png",
      },
      {
        name: "Butter Cookies",
        quantity: 5,
        price: 40,
        image: "/images/png-clipart-torta-cupcake-bakery-custard-sponge-cake-chocolate-cake-food-frozen-dessert-thumbnail-removebg-preview.png",
      },
    ],
  };

  const total = order.items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div className="min-h-screen flex items-center justify-center  py-12 animate-fadeIn">
      <div className="w-auto min-w-[1000px] bg-white rounded-xl shadow-md p-8 ">
        <h2 className="text-2xl font-bold mb-6">Order Details - #{order.id}</h2>

        <div className="mb-4 space-y-1">
          <p>
            <strong>User:</strong> {order.user}
          </p>
          <p>
            <strong>Phone No:</strong> {order.phone}
          </p>
          <p>
            <strong>Address:</strong> {order.address}
          </p>
        </div>

        {/* Order items */}
        <div className="space-y-4">
          {order.items.map((item, i) => (
            <div
              key={i}
              className="flex items-center border rounded-lg p-4 shadow-sm bg-gray-50"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded mr-4"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price per item: Rs. {item.price}</p>
                <p className="font-semibold text-gray-800">
                  Total: Rs. {item.quantity * item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-right text-xl font-bold text-blue-700">
          Final Total: Rs. {total}
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <Link to="/admin/incoming-orders">
            <button className="w-[150px] bg-green-600 font-bold px-5 py-2 rounded-lg hover:bg-green-700">
              Confirm
            </button>
          </Link>

          <Link to="/admin/incoming-orders">
            <button className="w-[150px] bg-red-500 font-bold px-5 py-2 rounded-lg hover:bg-red-600">
              Reject
            </button>
          </Link>

          <Link to="/admin/incoming-orders">
            <button className="w-[150px] bg-sky-400 font-bold px-5 py-2 rounded-lg hover:bg-sky-500">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
