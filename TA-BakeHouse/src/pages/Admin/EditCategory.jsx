import React, { useEffect, useState } from "react";
import {Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditCategory = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [name, setName] = useState("");

  // Fetch category details
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/categories/${id}`);
        setName(res.data.name);
      } catch (err) {
        console.error("Failed to fetch category", err);
      }
    };

    fetchCategory();
  }, [id]);

  // Handle update
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/categories/${id}`, { name });
      
      nav("/admin/admin-category");
    } catch (err) {
      console.error("Failed to update category", err);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-adminbg animate-fadeIn">
      <div className="w-[700px] bg-white shadow-lg rounded-xl p-8 border border-2 border-borderbrown">
        <h2 className="text-2xl font-bold mb-4">Edit Category</h2>
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={name}
            placeholder="Update category name"
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 mb-4"
            required
          />
          <div className="flex justify-around">
            <button
              type="submit"
              className=" w-[150px] bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
            >
              Update
            </button>
            <Link to="/admin/admin-category">
            <button
              type="button"
             
              className="w-[150px] bg-red-400 py-2 px-4 rounded-lg hover:bg-red-500"
            >
              Cancel
            </button>
            </Link>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCategory;
