import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Prev_orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [filteredStatus, setFilteredStatus] = useState("delivered");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/orders/previous");
        setAllOrders(res.data);
      } catch (error) {
        console.error("❌ Failed to fetch previous orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const filteredOrders = allOrders.filter(
    (order) => order.status === filteredStatus
  );

  return (
    <div className="min-h-screen flex items-center justify-center py-12 animate-fadeIn">
      <div className="w-auto min-w-[1000px] bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold bg-orange-300 m-3 text-center p-2 rounded-md">
          Previous Orders - {filteredStatus.charAt(0).toUpperCase() + filteredStatus.slice(1)}
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          {["delivered", "confirmed", "rejected"].map((status) => {
            const isActive = filteredStatus === status;
            const bgColor =
              status === "delivered"
                ? "bg-green-300"
                : status === "confirmed"
                ? "bg-blue-300"
                : "bg-red-300";

            return (
              <button
                key={status}
                onClick={() => setFilteredStatus(status)}
                className={`py-2 px-4 rounded-lg font-bold ${
                  isActive ? bgColor : "bg-gray-200"
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)} Orders
              </button>
            );
          })}
        </div>

        {/* Table */}
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border">Order ID</th>
              <th className="py-2 px-4 border">User</th>
              <th className="py-2 px-4 border">Date</th>
              <th className="py-2 px-4 border">Total Price (Rs.)</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <tr key={order._id}>
                  <td className="py-2 px-4 border text-center">
                    {order._id.slice(-5).toUpperCase()}
                  </td>
                  <td className="py-2 px-4 border text-center">
                    {order.userId?.name || "Unknown"}
                  </td>
                  <td className="py-2 px-4 border text-center">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-4 border text-center">
                    Rs. {order.totalAmount}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No {filteredStatus} orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Back Button */}
        <div className="text-center mt-6">
          <Link to="/admin">
            <button className="w-[150px] bg-red-400 hover:bg-red-500 font-bold px-5 py-2 rounded-lg">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Prev_orders;
