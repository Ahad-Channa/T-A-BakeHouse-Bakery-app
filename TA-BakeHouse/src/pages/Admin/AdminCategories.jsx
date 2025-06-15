
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const AdminCategories = () => {
//   const [categories, setCategories] = useState([]);
//   const nav = useNavigate();

//   // Fetch categories from backend on component mount
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/categories");
//         setCategories(res.data);
//       } catch (err) {
//         console.error("Failed to fetch categories", err);
//       }
//     };

//     fetchCategories();
//   }, []);

//   // Delete category
//   const deleteCategory = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/categories/${id}`);
//       setCategories(categories.filter((cat) => cat._id !== id));
//     } catch (err) {
//       console.error("Failed to delete category", err);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 m-50">
//       <div className="bg-gray-200 flex justify-between items-center p-4 m-4 rounded-lg ">
//         <h2 className="text-2xl font-bold">All Categories</h2>
//         <button
//           className="font-bold bg-sky-200 rounded-lg py-2 px-4 hover:bg-sky-300"
//           onClick={() => nav("/admin/add-category")}
//         >
//           + Add New Category
//         </button>
//       </div>

//       <table className="w-full border-collapse">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border bg-gray-100">#ID</th>
//             <th className="py-2 px-4 border bg-gray-100">Category</th>
//             <th className="py-2 px-4 border bg-gray-100">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {categories.map((category, index) => (
//             <tr key={category._id}>
//               <td className="text-center border">{index + 1}</td>
//               <td className="text-center border">{category.name}</td>
//               <td className="text-center border">
                
//                 <button
//                   className="bg-sky-200 py-2 px-4 m-2 rounded-lg"
//                   onClick={() => nav(`/admin/edit-category/${category._id}`)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="bg-red-400 py-2 px-4 m-2 rounded-lg text-white hover:bg-red-500"
//                   onClick={() => deleteCategory(category._id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <button
//         className="bg-sky-400 py-2 px-4 rounded-lg m-4 w-20"
//         onClick={() => nav("/dashboard")}
//       >
//         Back
//       </button>
//     </div>
//   );
// };

// export default AdminCategories;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminCategories = () => {
  const [categories, setCategories] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/categories");
        setCategories(res.data);
      } catch (err) {
        console.error("Failed to fetch categories", err);
      }
    };

    fetchCategories();
  }, []);

  const deleteCategory = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/categories/${id}`);
      setCategories(categories.filter((cat) => cat._id !== id));
    } catch (err) {
      console.error("Failed to delete category", err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 mt-8">
      <div className="bg-gray-200 flex justify-between items-center p-4 rounded-lg mb-6">
        <h2 className="text-2xl font-bold">All Categories</h2>
        <button
          className="font-bold bg-sky-200 rounded-lg py-2 px-4 hover:bg-sky-300"
          onClick={() => nav("/admin/add-category")}
        >
          + Add New Category
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 border bg-gray-100">#ID</th>
            <th className="py-2 px-4 border bg-gray-100">Image</th>
            <th className="py-2 px-4 border bg-gray-100">Category</th>
            <th className="py-2 px-4 border bg-gray-100">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={category._id}>
              <td className="text-center border">{index + 1}</td>
              <td className="text-center border">
                {category.image ? (
                  <img
                    src={`http://localhost:5000/uploads/categories/${category.image}`}
                    alt={category.name}
                    className="w-16 h-16 object-cover rounded mx-auto"
                  />
                ) : (
                  <span className="text-gray-400">No image</span>
                )}
              </td>
              <td className="text-center border">{category.name}</td>
              <td className="text-center border">
                <button
                  className="bg-sky-200 py-2 px-4 m-2 rounded-lg"
                  onClick={() => nav(`/admin/edit-category/${category._id}`)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-400 py-2 px-4 m-2 rounded-lg text-white hover:bg-red-500"
                  onClick={() => deleteCategory(category._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        className="bg-sky-400 py-2 px-4 rounded-lg mt-6"
        onClick={() => nav("/admin")}
      >
        Back
      </button>
    </div>
  );
};

export default AdminCategories;
