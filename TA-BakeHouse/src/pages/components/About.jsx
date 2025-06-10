import React from 'react'

export default function About() {
  return (
    
    <section id="about" className="bg-white py-16 px-6 md:px-20">
      <h2 className="text-5xl font-semibold text-center mb-8">About Us</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="/images/png-clipart-torta-cupcake-bakery-custard-sponge-cake-chocolate-cake-food-frozen-dessert-thumbnail-removebg-preview.png"
          alt="image not found"
          className="w-full md:w-1/2 rounded-xl "
        />
        <div className="md:w-1/2 text-gray-700">
          <p className="mb-4">
            Sweet Crumbs started in 2020 with a mission to spread joy through fresh baked goods.
          </p>
          <ul className="list-disc list-inside">
            <li>Fresh Ingredients</li>
            <li>Traditional Recipes</li>
            <li>Friendly Service</li>
          </ul>
        </div>
      </div>
    </section>
 



  )
}


