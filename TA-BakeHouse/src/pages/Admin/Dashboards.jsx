import React from "react";
import { useNavigate } from "react-router-dom";

 const Dashboards = () => {
  const nav = useNavigate();

  function handler(kuchbhi) {
    switch (kuchbhi) {
      case "category":
        nav("/admin-category");
        break;
      case "products":
        nav("/admin-products");
        break;
      case "feedbacks":
        nav("/feedbacks");
        break;
      case "inc_orders":
        nav("/incoming-orders");
        break;
      case "prev_orders":
        nav("/previous-orders");
        break;
    }
  }

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="w-[800px] min-h-[600px] grid grid-cols-2 gap-4 p-20 bg-slate-200 ">
          <button className="bg-rose-400 rounded-lg font-bold hover:bg-rose-500 py-2 px-4" onClick={()=>handler("category")}>
            view Categories
          </button>
          <button className="bg-fuchsia-500 font-bold hover:bg-fuchsia-600 py-2 px-4 rounded-lg" onClick={()=>handler("products")}>
            view Products
          </button>

          <button className="bg-violet-300 font-bold hover:bg-violet-500 py-2 px-4 rounded-lg" onClick={()=>handler("inc_orders")}>
            view Incoming orders
          </button>
          <button className="bg-orange-300 font-bold hover:bg-orange-500 py-2 px-4 rounded-lg" onClick={()=>handler("prev_orders")}>
            view previous orders
          </button>
          <button className="bg-lime-300 font-bold hover:bg-lime-500 py-2 px-4 rounded-lg" onClick={()=>handler("feedbacks")}>
            view Feedbacks
          </button>
          
        </div>
      </div>
    </>
  );
};


export default Dashboards;