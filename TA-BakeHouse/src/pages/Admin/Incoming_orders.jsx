import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Incoming_orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchIncomingOrders = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/orders/incoming");
        setOrders(res.data || []);
      } catch (err) {
        console.error("Failed to fetch incoming orders:", err);
      }
    };

    fetchIncomingOrders();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center py-12 animate-fadeIn">
      <div className="w-auto min-w-[1000px] bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold bg-sky-200 m-3 text-center rounded-lg w-full py-2 px-4">
          Incoming Orders
        </h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-300">
              <th className="py-2 px-4 border">Order ID</th>
              <th className="py-2 px-4 border">User</th>
              <th className="py-2 px-4 border">Date</th>
              <th className="py-2 px-4 border">View Details</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td className="py-2 px-4 border text-center">{order._id.slice(-6).toUpperCase()}</td>
                <td className="py-2 px-4 border text-center">{order.userId?.name || "Unknown"}</td>
                <td className="py-2 px-4 border text-center">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
                <td className="py-2 px-4 border text-center">
                  <Link to={`/admin/order-details/${order._id}`}>
                    <button className="font-bold bg-green-400 hover:bg-green-500 rounded-lg py-2 px-4">
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-center my-4">
          <Link to="/admin">
            <button className="font-bold w-[150px] bg-red-500 hover:bg-red-600 rounded-lg py-2 px-4">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Incoming_orders;
