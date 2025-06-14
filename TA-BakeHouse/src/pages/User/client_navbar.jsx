import { Link } from 'react-router-dom';

function Client_Navbar() {
  return (
    <nav className="bg-yellow-500 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-3xl font-bold tracking-wide">🍰 Sweet Bites</h1>
      
      <div className="flex gap-4">
        <Link 
          to="/user" 
          className="px-4 py-2 rounded-xl hover:bg-white hover:text-yellow-600 transition duration-300 font-medium"
        >
          Home
        </Link>
        <a
          href="#client-category"
          className="px-4 py-2 rounded-xl hover:bg-white hover:text-yellow-600 transition duration-300 font-medium"
        >
          Categories
        </a>
        <a
          href="#client-products"
          className="px-4 py-2 rounded-xl hover:bg-white hover:text-yellow-600 transition duration-300 font-medium"
        >
          products
        </a>
        <Link 
          to="/user/cart" 
          className="px-4 py-2 rounded-xl hover:bg-white hover:text-yellow-600 transition duration-300 font-medium"
        >
          Cart
        </Link>
        <Link 
          to="/" 
          className="px-4 py-2 rounded-xl hover:bg-white hover:text-yellow-600 transition duration-300 font-medium"
        >
          Logout
        </Link>
        
      </div>
    </nav>
  );
}

export default Client_Navbar;
