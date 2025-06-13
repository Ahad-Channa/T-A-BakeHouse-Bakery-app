import React from "react";
import ClientCategories from "./ClientCategory";
import Clientproducts from "./cliendproduct";

export const Usermodule = () => {
  return (
    <div className="bg-purp">
      {/* Hero Section */}
      <div
        className="w-full bg-cover bg-center  min-h-[600px] rounded-2xl shadow-md flex items-center"
        style={{ backgroundImage: "url('/images/birthday.avif')" }}
      >
        {/* Text box */}
        <div className="bg-white/80 p-8 rounded-xl ml-10 max-w-2xl">
          <h2 className="text-3xl font-bold text-amber-600 mb-2">
            Heyyy USERNAME
          </h2>

          <h2 className="text-3xl font-bold text-red-800 mb-4">
            WELCOME TO THE T&A BAKEHOUSE
          </h2>

          <h3 className="text-2xl text-orange-500 mb-2">
            Looking for something special?
          </h3>

          <p className="text-lg text-gray-700">
            Order your favorites now and make every moment a little more
            special. <br />
            Freshly baked happiness is just a click away, explore our delights
            and treat yourself today!
          </p>
        </div>
      </div>

    

      <div className="px-6 mt-10">
        <ClientCategories />
      </div>
      

      <div className="px-6 mt-6 mb-10">
        <Clientproducts />
      </div>
    </div>
  );
};
