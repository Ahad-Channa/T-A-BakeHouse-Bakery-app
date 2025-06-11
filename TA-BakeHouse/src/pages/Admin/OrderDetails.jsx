
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

 const OrderDetails = () => {
  const { orderId } = useParams();
  const nav = useNavigate();

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
        <p><strong>User:</strong> {order.user}</p>
        <p><strong>Phone No:</strong> {order.phone}</p>
        <p><strong>Address:</strong> {order.address}</p>
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
        <button
          className="bg-green-500  px-4 py-2 rounded-lg"
          onClick={() => {
            
            nav("/incoming-orders");
          }}
        >
          Confirm
        </button>
        <button
          className="bg-red-500  px-4 py-2 rounded-lg"
          onClick={() => {
           
            nav("/incoming-orders");
          }}
        >
          Reject
        </button>
        <button className="bg-gray-400 rounded-lg py-2 px-4" onClick={()=>nav("/incoming-orders")}>Back</button>
      </div>
      
    </div>
  );
};


export default OrderDetails;