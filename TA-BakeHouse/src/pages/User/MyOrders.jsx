import React, { useEffect, useState } from "react";
import axios from "axios";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/orders/my-orders/${user.id}`
        );
        setOrders(res.data || []);
      } catch (err) {
        console.error("Failed to fetch orders:", err);
      }
    };

    if (user?.id) {
      fetchOrders();
    }
  }, [user]);

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "text-green-600 bg-green-100";
      case "rejected":
        return "text-red-600 bg-red-100";
      default:
        return "text-yellow-700 bg-yellow-100";
    }
  };

  return (
    <div className="w-full min-h-[1000px] px-4 py-10 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="p-6 mt-[120px] bg-gray-50 rounded-xl border border-2 border-userborder">
        <h2 className="text-3xl font-bold mb-6 text-amber-700 text-center">
          🧾 My Orders
        </h2>

        {orders.length === 0 ? (
          <p className="text-center text-gray-600">
            You haven't placed any orders yet.
          </p>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order._id}
                className="border rounded-lg bg-white shadow p-5"
              >
                {/* Header */}
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Order #{order._id.slice(-6).toUpperCase()}
                  </h3>
                  <span
                    className={`text-sm px-3 py-1 rounded-full font-medium ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-2">
                  Placed on:{" "}
                  <span className="font-medium">
                    {new Date(order.createdAt).toLocaleString()}
                  </span>
                </p>

                <p className="text-sm text-gray-600 mb-2">
                  Phone: <span className="font-medium">{order.phone}</span>
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Address: <span className="font-medium">{order.address}</span>
                </p>

                {/* Items */}
                <div className="border-t pt-4">
                  <p className="font-semibold mb-2">Items:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {order.items.map((item, i) => (
                      <li key={i} className="flex gap-4 items-center">
                        <div className="text-sm">
                          <p className="font-medium">{item.name}</p>
                          <p>
                            {item.quantity} × Rs. {item.price} ={" "}
                            <span className="font-semibold">
                              Rs. {item.quantity * item.price}
                            </span>
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div className="text-right font-bold text-lg mt-4">
                  Total: Rs. {order.totalAmount}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
