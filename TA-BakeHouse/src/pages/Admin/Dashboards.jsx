import React from "react";
import { Link } from "react-router-dom";

 const Dashboards = () => {
  

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="w-[800px] min-h-[600px] grid grid-cols-2 gap-4 p-20 bg-slate-200 ">
          
          <h2 className="text-3xl text-yellow-600 my-4 font-extrabold col-span-2 text-center">WELCOME ADMIN</h2>

           <Link to="/admin/admin-category">
            <button className="bg-rose-400 rounded-lg font-bold hover:bg-rose-500 py-2 px-4 w-full h-[150px]">
              view Categories
            </button>
          </Link>

          <Link to="/admin/admin-products">
            <button className="bg-fuchsia-500 font-bold hover:bg-fuchsia-600 py-2 px-4 rounded-lg w-full h-[150px]">
              view Products
            </button>
          </Link>
          <Link to="/admin/incoming-orders">
            <button className="bg-violet-300 font-bold hover:bg-violet-500 py-2 px-4 rounded-lg w-full h-[150px]">
              view Incoming orders
            </button>
          </Link>

          <Link to="/admin/previous-orders">
            <button className="bg-orange-300 font-bold hover:bg-orange-500 py-2 px-4 rounded-lg w-full h-[150px]">
              view previous orders
            </button>
          </Link>

          <Link to="/admin/feedbacks">
            <button className="bg-lime-300 font-bold hover:bg-lime-500 py-2 px-4 rounded-lg w-full h-[150px]">
              view Feedbacks
            </button>
          </Link>
          
        </div>
      </div>
    </>
  );
};


export default Dashboards;