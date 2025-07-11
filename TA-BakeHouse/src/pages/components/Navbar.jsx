import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" fixed top-0 left-0 w-full z-50 bg-yellow-500 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-3xl font-bold tracking-wide">🍰 T&A Bakehouse</h1>

      <div className="flex gap-4">
        <Link
          to="/"
          className="px-4 py-2 rounded-xl hover:bg-white hover:text-yellow-600 transition duration-300 font-medium"
        >
          Home
        </Link>
        <a
          href="#about"
          className="px-4 py-2 rounded-xl hover:bg-white hover:text-yellow-600 transition duration-300 font-medium"
        >
          About
        </a>
        <a
          href="#contactus"
          className="px-4 py-2 rounded-xl hover:bg-white hover:text-yellow-600 transition duration-300 font-medium"
        >
          Contact Us
        </a>

        <Link
          to="/login"
          className="px-4 py-2 rounded-xl hover:bg-white hover:text-yellow-600 transition duration-300 font-medium"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;


