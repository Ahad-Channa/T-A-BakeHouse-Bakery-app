// AdminProducts.jsx
import { useState } from "react";
import Products from "../components/Products";
import { Link } from "react-router-dom";

const AdminProducts = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Chocolate Cake",
      description: "Rich chocolate",
      price: 500,
    },
    {
      id: 2,
      name: "Vanilla Pastry",
      description: "Classic vanilla",
      price: 200,
    },
  ]);

  const handleEdit = (product) => {
    // navigate to edit page with product info (optional)
    <Link to=" /edit-product/${product.id}">
    </Link>
   
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="p-6 ">
      <div className="flex justify-between items-center mb-4 mt-50 ">
        <h2 className="text-2xl font-bold">All Products</h2>
        <Link to="/admin/add-product">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            + Add Product
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((prod) => (
          <Products
            key={prod.id}
            product={prod}
            isAdmin={true}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
      <Link to="/admin/dashboard">
      <button className="bg-gray-200 py-3 px-4 m-4 rounded-lg" >Back</button>      
      </Link>
    </div>
  );
};

export default AdminProducts;
