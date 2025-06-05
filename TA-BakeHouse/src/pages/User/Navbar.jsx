import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-yellow-100 shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-yellow-700">
          🧁 T.A. Bakehouse
        </Link>
        <div className="space-x-6 text-lg hidden md:flex">
          <Link to="/" className="text-gray-700 hover:text-yellow-600">Home</Link>
          <Link to="/products" className="text-gray-700 hover:text-yellow-600">Products</Link>
          <Link to="/cart" className="text-gray-700 hover:text-yellow-600">Cart</Link>
          <Link to="/login" className="text-gray-700 hover:text-yellow-600">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
