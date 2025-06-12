import { Link} from 'react-router-dom';
import React, { useState } from 'react';

const Prev_orders = () => {
  const allOrders = [
    { id: '101', user: 'Tasmia', date: '2025-05-15', total: 1200, status: 'delivered' },
    { id: '102', user: 'Ahad', date: '2025-05-10', total: 850, status: 'confirmed' },
    { id: '103', user: 'Koebhi', date: '2025-04-28', total: 600, status: 'rejected' },
    { id: '104', user: 'person', date: '2025-04-20', total: 950, status: 'delivered' },
    { id: '105', user: 'kuchbhi', date: '2025-04-15', total: 720, status: 'confirmed' },
  ];

  const [filteredStatus, setFilteredStatus] = useState('delivered');

  const filteredOrders = allOrders.filter(order => order.status === filteredStatus);
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold bg-orange-200 m-3 text-center p-2 rounded-md">
          Previous Orders - {filteredStatus.charAt(0).toUpperCase() + filteredStatus.slice(1)}
        </h2>

        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setFilteredStatus('delivered')}
            className={`py-2 px-4 rounded-lg font-bold ${
              filteredStatus === 'delivered' ? 'bg-green-300' : 'bg-gray-200'
            }`}
          >
            Delivered Orders
          </button>
          <button
            onClick={() => setFilteredStatus('confirmed')}
            className={`py-2 px-4 rounded-lg font-bold ${
              filteredStatus === 'confirmed' ? 'bg-blue-300' : 'bg-gray-200'
            }`}
          >
            Confirmed Orders
          </button>
          <button
            onClick={() => setFilteredStatus('rejected')}
            className={`py-2 px-4 rounded-lg font-bold ${
              filteredStatus === 'rejected' ? 'bg-red-300' : 'bg-gray-200'
            }`}
          >
            Rejected Orders
          </button>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border">Order ID</th>
              <th className="py-2 px-4 border">User</th>
              <th className="py-2 px-4 border">Date</th>
              <th className="py-2 px-4 border">Total Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td className="py-2 px-4 border text-center">{order.id}</td>
                  <td className="py-2 px-4 border text-center">{order.user}</td>
                  <td className="py-2 px-4 border text-center">{order.date}</td>
                  <td className="py-2 px-4 border text-center">₹{order.total}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <Link to="/admin">
        <button className='bg-gray-400 py-2 px-4 m-5 rounded-lg  ' >Back</button>
        </Link>
        
      </div>
      
    </div>
  );
};


export  default Prev_orders;