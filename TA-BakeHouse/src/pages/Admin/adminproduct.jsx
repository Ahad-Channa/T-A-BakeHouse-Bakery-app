import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Products from "../components/Products";

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

  const navigate = useNavigate();

  const handleEdit = (product) => {
    navigate(`/admin/edit-product/${product.id}`);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center animate-fadeIn">
      <div className="w-full max-w-6xl bg-slate-200 rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">All Products</h2>
          <Link to="/admin/add-product">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              + Add Product
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

        <div className="mt-6">
          <Link to="/admin/dashboard">
            <button className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
              Back to Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
