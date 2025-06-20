import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

function Client_Navbar() {
  const { logout } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Clear token and user
    navigate('/'); // Redirect to login or landing page
  };

  // 🧮 Total quantity (optional: can use just cartItems.length if you only want count of products)
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-yellow-500 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-3xl font-bold tracking-wide">🍰 TA-bakeHouse</h1>

      <div className="flex gap-4 items-center">
        <Link 
          to="/user" 
          className="px-4 py-2 rounded-xl hover:bg-white hover:text-yellow-600 transition duration-300 font-medium"
        >
          Home
        </Link>
        <Link 
          to="/user/client-products" 
          className="px-4 py-2 rounded-xl hover:bg-white hover:text-yellow-600 transition duration-300 font-medium"
        >
          Products
        </Link>
         <Link 
          to="/user/my-order" 
          className="px-4 py-2 rounded-xl hover:bg-white hover:text-yellow-600 transition duration-300 font-medium"
        >
          My Order
        </Link>
        <Link 
          to="/user/cart" 
          className="relative px-4 py-2 rounded-xl hover:bg-white hover:text-yellow-600 transition duration-300 font-medium"
        >
          Cart
          {/* ✅ Cart Count Badge */}
          {totalQuantity > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1.5 py-0.5 animate-pulse">
              {totalQuantity}
            </span>
          )}
        </Link>
        <button 
          onClick={handleLogout} 
          className="px-4 py-2 rounded-xl hover:bg-white hover:text-yellow-600 transition duration-300 font-medium"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Client_Navbar;
