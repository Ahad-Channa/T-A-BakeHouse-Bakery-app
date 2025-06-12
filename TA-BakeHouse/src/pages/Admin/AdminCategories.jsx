
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminCategories = () => {
  const [categories, setCategories] = useState([]);
 

  // Fetch categories from backend on component mount
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

  // Delete category
  const deleteCategory = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/categories/${id}`);
      setCategories(categories.filter((cat) => cat._id !== id));
    } catch (err) {
      console.error("Failed to delete category", err);
    }
  };

  return (
  
    
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 m-50">
        <div className="bg-gray-200 flex justify-between items-center p-4 m-4 rounded-lg ">
          <h2 className="text-2xl font-bold">All categories</h2>
          <Link to="/admin/add-category">
          <button className="font-bold bg-sky-200  rounded-lg py-2 px-4 hover:bg-sky-300 " > + add new category</button>
          </Link>
          
        </div>

      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 border bg-gray-100">#ID</th>
            <th className="py-2 px-4 border bg-gray-100">Category</th>
            <th className="py-2 px-4 border bg-gray-100">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={category._id}>
              <td className="text-center border">{index + 1}</td>
              <td className="text-center border">{category.name}</td>
              <td className="text-center border">
                
               <Link to={`/admin/edit-category/${category._id}`}>
               <button
                  className="bg-sky-200 py-2 px-4 m-2 rounded-lg"
                 
                >
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

      <Link to="/Admin"> 
         <button className="bg-sky-400 py-2 px-4 rounded-lg m-4 w-20">Back </button>
        </Link>
    </div>
  );
};

export default AdminCategories;
