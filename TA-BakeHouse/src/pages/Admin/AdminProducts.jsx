// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const AdminProducts = () => {
//   const [products, setProducts] = useState([]);
//   const nav = useNavigate();

//   // Fetch all products
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/products");
//         setProducts(res.data);
//       } catch (err) {
//         console.error("Failed to fetch products", err);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Delete product
//   const deleteProduct = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/products/${id}`);
//       setProducts(products.filter((prod) => prod._id !== id));
//     } catch (err) {
//       console.error("Failed to delete product", err);
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 m-10">
//       <div className="bg-gray-200 flex justify-between items-center p-4 m-4 rounded-lg">
//         <h2 className="text-2xl font-bold">All Products</h2>
//         <button
//           className="font-bold bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600"
//           onClick={() => nav("/admin/add-product")}
//         >
//           + Add Product
//         </button>
//       </div>

//       <table className="w-full border-collapse mt-4">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border bg-gray-100">#ID</th>
//             <th className="py-2 px-4 border bg-gray-100">Name</th>
//             <th className="py-2 px-4 border bg-gray-100">Description</th>
//             <th className="py-2 px-4 border bg-gray-100">Price (Rs)</th>
//             <th className="py-2 px-4 border bg-gray-100">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product, index) => (
//             <tr key={product._id}>
//               <td className="text-center border">{index + 1}</td>
//               <td className="text-center border">{product.name}</td>
//               <td className="text-center border">{product.description}</td>
//               <td className="text-center border">{product.price}</td>
//               <td className="text-center border">
//                 <button
//                   className="bg-yellow-400 py-2 px-4 m-2 rounded-lg hover:bg-yellow-500"
//                   onClick={() => nav(`/admin/edit-product/${product._id}`)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="bg-red-500 text-white py-2 px-4 m-2 rounded-lg hover:bg-red-600"
//                   onClick={() => deleteProduct(product._id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <button
//         className="bg-blue-400 py-2 px-4 rounded-lg m-4 w-20 text-white hover:bg-blue-500"
//         onClick={() => nav("/dashboard")}
//       >
//         Back
//       </button>
//     </div>
//   );
// };

// export default AdminProducts;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const nav = useNavigate();

  // Fetch products and categories
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch products", err);
      }
    };

    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/categories");
        setCategories(res.data);
      } catch (err) {
        console.error("Failed to fetch categories", err);
      }
    };

    fetchProducts();
    fetchCategories();
  }, []);

  // Filtered products based on category
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(
          (p) => p.category?.name === selectedCategory
        );

  // Delete handler
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  // Toggle inStock status
  const toggleInStock = async (id, currentStatus) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/products/${id}`, {
        inStock: !currentStatus,
      });

      setProducts((prev) =>
        prev.map((prod) =>
          prod._id === id ? { ...prod, inStock: res.data.inStock } : prod
        )
      );
    } catch (err) {
      console.error("Toggle failed", err);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6 my-8 border border-2 border-borderbrown animate-fadeIn">
      <div className="flex justify-between  rounded-lg items-center mb-6 mt-12 bg-gray-200 ">
        <h2 className="text-2xl font-bold py-2 px-4">All Products</h2>
        <button
          onClick={() => nav("/admin/add-product")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-10 my-4 w-[200px]"
        >
          + Add Product
        </button>
      </div>

      {/* Category filter */}
      <div className="mb-4">
        <label className="mr-2 font-semibold">Filter by Category:</label>
        <select
          className="p-2 border rounded"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Product table */}
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">#</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">In Stock</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((prod, index) => (
            <tr key={prod._id}>
              <td className="border text-center">{index + 1}</td>
              <td className="border text-center">{prod.name}</td>
              <td className="border text-center">${prod.price}</td>
              <td className="border text-center">{prod.category?.name || "Uncategorized"}</td>
              <td className="border text-center">
                <button
                  onClick={() => toggleInStock(prod._id, prod.inStock)}
                  className={`px-3 py-1 rounded-full text-white ${
                    prod.inStock ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {prod.inStock ? "In Stock" : "Out of Stock"}
                </button>
              </td>
              <td className="border text-center space-x-2">
                <button
                  className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500"
                  onClick={() => nav(`/admin/edit-product/${prod._id}`)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  onClick={() => handleDelete(prod._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        className="bg-red-400 py-2 px-4 mt-6 rounded hover:bg-red-500 w-[150px] "
        onClick={() => nav("/admin")}
      >
        Back
      </button>
    </div>
  );
};

export default AdminProducts;
