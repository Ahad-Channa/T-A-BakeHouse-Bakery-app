import React from "react";
import { Outlet } from "react-router-dom";
const Home = () => {

  return (
    <div className="p-6 ">
      <h1 className="text-4xl font-bold mb-8 text-center text-yellow-700 mt-20">
        Welcome to T&A Bakehouse
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-6">
        {/* Left side - Text */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-3xl font-bold mb-8  text-yellow-700">
            From Our Oven to Your Heart
          </h2>
          <p className="text-gray-700 font-bold">
            Handcrafted with love, each treat is freshly baked to bring warmth,
            comfort, and a little joy to your day. Whether it’s a celebration or a
            simple moment, we are here to make it sweeter.
          </p>

          <button className="bg-gray-200 py-2 px-4 rounded-lg ">Join now</button>
        </div>

        {/* Right side - Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/ChatGPT Image .png"
            alt="Delicious baked goods"
            className="rounded-lg  max-w-full h-auto"
          />
        </div>
      </div>
      <Outlet/>
    </div>
    
  );
};

export default Home;
