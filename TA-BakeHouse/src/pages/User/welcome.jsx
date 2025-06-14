import React from 'react'

const Welcome = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-40 gap-6 relative z-10">
        <div className="bg-white/50 backdrop-blur-md p-8 rounded-2xl max-w-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-amber-600 mb-2">
            Heyyy USERNAME
          </h2>
          <h2 className="text-3xl font-bold text-red-800 mb-4">
            WELCOME TO THE T&A BAKEHOUSE
          </h2>
          <h3 className="text-2xl text-orange-500 mb-2">
            Looking for something special?
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Order your favorites now and make every moment a little more
            special. <br />
            Freshly baked happiness is just a click away, explore our delights
            and treat yourself today!
          </p>
        </div>
        <div
          className="w-[500px] h-[350px] bg-cover bg-center shadow-lg"
          style={{
            backgroundImage:
              "url('/images/ChatGPT_Image_Jun_13__2025__11_03_50_PM-removebg-preview.png')",
          }}
        ></div>
      </div>
  )
}


export  default Welcome;