import React from "react";
import { Link } from "react-router-dom";

const Dashboards = () => {
  return (
    <>
      <div className="w-[1000px] min-h-[600px] grid grid-cols-2 gap-8 p-20 bg-adminbg animate-fadeIn">
        <h2 className="text-5xl text-welcome my-5 font-extrabold col-span-2 text-center transition-transform duration-700 hover:scale-105 underline underline-offset-8 decoration-solid drop-shadow-[0_0_10px_#f78764]">
          Hello, Admin
        </h2>

        <Link to="admin-category">
          <button className="bg-lime-500 rounded-lg text-2xl font-bold hover:bg-bggreen py-2 px-4 w-full h-[180px] transition-all duration-300 hover:scale-105">
            View Categories
          </button>
        </Link>

        <Link to="admin-products">
          <button className="bg-fuchsia-600 text-2xl font-bold hover:bg-fuchsia-700 py-2 px-4 rounded-lg w-full h-[180px] transition-all duration-300 hover:scale-105">
            View Products
          </button>
        </Link>

        <Link to="incoming-orders">
          <button className="bg-bgblue text-2xl font-bold hover:bg-bgbluehover py-2 px-4 rounded-lg w-full h-[180px] transition-all duration-300 hover:scale-105">
            View Incoming orders
          </button>
        </Link>

        <Link to="previous-orders">
          <button className="bg-orange-500 text-2xl font-bold hover:bg-bgorange py-2 px-4 rounded-lg w-full h-[180px] transition-all duration-300 hover:scale-105">
            View previous orders
          </button>
        </Link>

        <Link to="feedbacks">
          <button className="bg-bgpurp  text-2xl font-bold hover:bg-bgpurphover py-2 px-4 rounded-lg w-full h-[180px] ml-[200px] transition-all duration-300 hover:scale-105">
            View Feedbacks
          </button>
        </Link>
      </div>
    </>
  );
};

export default Dashboards;
