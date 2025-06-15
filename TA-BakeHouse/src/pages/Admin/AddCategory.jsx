

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
    <div className="h-screen flex items-center justify-center bg-adminbg animate-fadeIn ">
      <div className="w-[700px] bg-white shadow-lg rounded-xl p-8 border border-2 border-borderbrown">
        <h2 className="font-bold bg-sky-300  rounded-lg my-3 py-4 px-4">
          Add new category
        </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Enter category here"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-400 rounded-lg px-4 py-4  m-4 focus:outline-none focus:border-blue-500"
            />
          </div> 

            <div className="flex justify-around  ">
             
              <button type="submit" className="w-[150px] bg-green-400 hover:bg-green-500  py-2 font-bold px-4 m-4 rounded-lg" >Add</button>
              
              <Link to="/admin/admin-category">
              <button className=" w-[150px] bg-red-400 hover:bg-red-500 py-2 px-4 m-4 rounded-lg font-bold">Cancel</button>
              </Link>
              
            </div>
          </form>
        </div>
      </div>

  );
};

export default AddCategory;
