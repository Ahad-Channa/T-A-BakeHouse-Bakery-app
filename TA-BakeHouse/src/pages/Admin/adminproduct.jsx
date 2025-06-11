// AdminProducts.jsx
import { useState } from "react";
import Products from "../components/Products";
import { useNavigate } from "react-router-dom";

const AdminProducts = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Chocolate Cake", description: "Rich chocolate", price: 500 },
    { id: 2, name: "Vanilla Pastry", description: "Classic vanilla", price: 200 },
  ]);

  const nav = useNavigate();

  const handleEdit = (product) => {
    // navigate to edit page with product info (optional)
    nav(`/edit-product/${product.id}`);
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  return (
    <div className="p-6 ">
      <div className="flex justify-between items-center mb-4 mt-50 ">
        <h2 className="text-2xl font-bold">All Products</h2>
        <button
          onClick={() => nav("/admin/add-product")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          + Add Product
        </button>
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
    </div>
  );
};


export  default AdminProducts;