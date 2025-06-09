import React from "react";
import { Link } from "react-router-dom";


 const AddCategory = () => {
    
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="w-[700px] bg-white shadow-lg rounded-xl p-8 ">
          <h2 className="font-bold bg-sky-100 rounded-lg my-3 py-2 px-4 ">
            Add new category
          </h2>
          <form>
            <div>
              <input
                type="text"
                placeholder="Enter category here"
                className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex justyfy-between  ">
              <Link to="/admin/admin-category"> 
              <button className="bg-gray-200 py-2 px-4 m-4 rounded-lg" onClick={()=>{}}>Add</button>
              </Link>
              <Link to="/admin/admin-category">
              <button className="bg-gray-200 py-2 px-4 m-4 rounded-lg">Cancel</button>
              </Link>
              
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCategory;