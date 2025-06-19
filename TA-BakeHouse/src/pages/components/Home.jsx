import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h1 className="text-5xl font-bold mb-8 text-center text-brown mt-18 animate-glow-float custom-glow mt-10">
        Welcome to T&A Bakehouse
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-6">
        <div className="md:w-1/2 text-center md:text-left space-y-6 animate-fade-in-slow">
          <h2 className="text-3xl font-extrabold text-orang animate-text-rise glow-heading">
            From Our Oven to Your Heart
          </h2>

          <p className="text-gray-700 font-semibold leading-relaxed text-lg animate-slide-fade">
            Handcrafted with love, each treat is freshly baked to bring warmth,
            comfort, and a little joy to your day. Whether it’s a celebration or
            a simple moment, we are here to make it sweeter.
          </p>

          <Link to="/login">
            <button className="mt-4 bg-yellow-500 text-white py-2 px-6 rounded-xl shadow-md hover:bg-yellow-600  ">
              Join now
            </button>
          </Link>
        </div>

        <div className="md:w-1/2 flex justify-center ">
          <img
           // src="/images/ChatGPT Image .png"
           src="/images/chocolate.gif"
            alt="Delicious baked goods"
            className="rounded-lg  w-[800px] h-auto " 
          />
        </div>
      </div>
    </>
  );
};

export default Home;
