import React from "react";
import { Link} from "react-router-dom";

 const Dashboards = () => {
  

  return (
    <>
      <div className="w-[1100px] grid grid-cols-2 m-5 gap-x-10 gap-y-10 p-5 bg-adminbg rounded-xl animate-fadeIn justify-items-center">
        <h2 className="text-5xl text-welcome my-10 font-extrabold col-span-2 text-center transition-transform duration-700 hover:scale-105 drop-shadow-[0_0_10px_#f78764]">
          Hello, Admin
        </h2>

        <Link to="admin-category">
          <button className="bg-bgpink rounded-lg text-xl font-bold hover:bg-bgpinkhover py-2 px-4 w-[350px] h-[160px] transition-all duration-300 hover:scale-105">
            View Categories
          </button>
        </Link>

        <Link to="admin-products">
          <button className="bg-fuchsia-400 text-xl font-bold hover:bg-fuchsia-500 py-2 px-4 rounded-lg w-[350px] h-[160px] transition-all duration-300 hover:scale-105">
            View Products
          </button>
        </Link>

        <Link to="incoming-orders">
          <button className="bg-bggreen text-xl font-bold hover:bg-bggreenhover py-2 px-4 rounded-lg w-[350px] h-[160px] transition-all duration-300 hover:scale-105">
            View Incoming orders
          </button>
        </Link>

        <Link to="previous-orders">
          <button className="bg-orange-400 text-xl font-bold hover:bg-bgorangehover py-2 px-4 rounded-lg w-[350px] h-[160px] transition-all duration-300 hover:scale-105">
            View previous orders
          </button>
        </Link>

        <Link to="feedbacks" className="col-span-2 mx-auto">
          <button className="bg-lime-300 text-xl font-bold hover:bg-lime-400 py-2 px-4 rounded-lg w-[350px] h-[160px] transition-all duration-300 hover:scale-105">
            View Feedbacks
          </button>
        </Link>
      </div>
    </>
  );
};


export default Dashboards;