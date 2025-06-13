/*import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const OrderDetails = () => {
  const { orderId } = useParams();

  // Dummy data (ideally should be fetched)
  const order = {
    id: orderId,
    user: "Tasmia",
    address: "shikarpur",
    phone: "9876543210",
    items: [
      { category: "Cakes", quantity: 2 },
      { category: "Cookies", quantity: 5 },
    ],
    total: 1200,
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Order Details - {order.id}</h2>
      <div className="mb-4">
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

      <table className="w-full mb-4 border">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border">Category</th>
            <th className="py-2 px-4 border">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {order.items.map((item, i) => (
            <tr key={i}>
              <td className="py-2 px-4 border text-center">{item.category}</td>
              <td className="py-2 px-4 border text-center">{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="font-bold text-lg mb-4">Total Price: {order.total}</p>

      <div className="flex gap-4">
        <Link to="/admin/incoming-orders">
          <button className="bg-green-500  px-4 py-2 rounded-lg">
            Confirm
          </button>
        </Link>

        <Link to="/admin/incoming-orders">
          <button className="bg-red-500  px-4 py-2 rounded-lg">Reject</button>
        </Link>

        <Link to="/admin/incoming-orders">
          <button className="bg-gray-400 rounded-lg py-2 px-4">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default OrderDetails;
*/
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
        image: "/images/cupcake.webp",
      },
      {
        name: "Butter Cookies",
        quantity: 5,
        price: 40,
        image: "/images/cupcake.webp",
      },
    ],
  };

  const total = order.items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Order Details - #{order.id}</h2>

      <div className="mb-4 space-y-1">
        <p><strong>User:</strong> {order.user}</p>
        <p><strong>Phone No:</strong> {order.phone}</p>
        <p><strong>Address:</strong> {order.address}</p>
      </div>

      {/* Order items */}
      <div className="space-y-4">
        {order.items.map((item, i) => (
          <div key={i} className="flex items-center border rounded-lg p-4 shadow-sm bg-gray-50">
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
          <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700">
            Confirm
          </button>
        </Link>

        <Link to="/admin/incoming-orders">
          <button className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600">
            Reject
          </button>
        </Link>

        <Link to="/admin/incoming-orders">
          <button className="bg-gray-400 text-white px-5 py-2 rounded-lg hover:bg-gray-500">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderDetails;
