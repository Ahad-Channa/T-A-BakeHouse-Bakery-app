import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminCategories = () => {
  const [categories, setCategories] = useState([]);

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
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 my-12  animate-fadeIn">
      <div className="bg-gray-300 flex justify-between items-center p-4 m-4 rounded-lg ">
        <h2 className="text-2xl font-bold">All categories</h2>
        <Link to="/admin/add-category">
          <button className="font-bold bg-sky-300  rounded-lg py-2 px-4 hover:bg-sky-400 ">
            {" "}
            + add new category
          </button>
        </Link>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 border bg-gray-200">#ID</th>
            <th className="py-2 px-4 border bg-gray-200">Image</th>
            <th className="py-2 px-4 border bg-gray-200">Category</th>
            <th className="py-2 px-4 border bg-gray-200">Actions</th>
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
                <Link to={`/admin/edit-category/${category._id}`}>
                  <button className="bg-sky-300 hover:bg-sky-400 py-2 px-4 m-2 rounded-lg">
                    Edit
                  </button>
                </Link>
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

      <Link to="/admin">
        <button className="bg-sky-400 hover:bg-sky-500 py-2 px-4 rounded-lg m-4 w-20">
          Back{" "}
        </button>
      </Link>
    </div>
  );
};

export default AdminCategories;
