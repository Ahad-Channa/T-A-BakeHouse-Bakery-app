import React from "react";
import { Outlet, Link } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4 space-y-4">
        <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
        <nav className="flex flex-col space-y-2">
          <Link to="/admin" className="hover:bg-gray-700 p-2 rounded">Dashboard</Link>
          <Link to="/admin/admin-category" className="hover:bg-gray-700 p-2 rounded">Categories</Link>
          <Link to="/admin/add-category" className="hover:bg-gray-700 p-2 rounded">Add Category</Link>
          <Link to="/admin/admin-products" className="hover:bg-gray-700 p-2 rounded">Products</Link>
          <Link to="/admin/add-product" className="hover:bg-gray-700 p-2 rounded">Add Product</Link>
          <Link to="/admin/incoming-orders" className="hover:bg-gray-700 p-2 rounded">Incoming Orders</Link>
          <Link to="/admin/previous-orders" className="hover:bg-gray-700 p-2 rounded">Previous Orders</Link>
          <Link to="/admin/feedbacks" className="hover:bg-gray-700 p-2 rounded">Feedbacks</Link>
          <Link to="/" className="hover:bg-gray-700 p-2 rounded">Logout</Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
