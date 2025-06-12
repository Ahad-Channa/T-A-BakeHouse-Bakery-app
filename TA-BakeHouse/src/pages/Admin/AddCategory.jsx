

import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";


const AddCategory = () => {
  const nav = useNavigate();
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      await axios.post("http://localhost:5000/api/categories", { name });
      nav("/admin/admin-category"); // go back to category list after success
    } catch (err) {
      console.error("Failed to add category", err);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[700px] bg-white shadow-lg rounded-xl p-8">
        <h2 className="font-bold bg-sky-100 rounded-lg my-3 py-2 px-4">
          Add new category
        </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Enter category here"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

            <div className="flex justyfy-between  ">
              <Link to="admin-category"> 
              <button className="bg-gray-200 py-2 px-4 m-4 rounded-lg" >Add</button>
              </Link>
              <Link to="admin-category">
              <button className="bg-gray-200 py-2 px-4 m-4 rounded-lg">Cancel</button>
              </Link>
              
            </div>
          </form>
        </div>
      </div>

  );
};

export default AddCategory;
