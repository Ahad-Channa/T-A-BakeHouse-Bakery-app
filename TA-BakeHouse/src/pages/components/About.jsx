import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-gradient-to-br  py-20 px-4 md:px-12 lg:px-24">
      
      <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-12 leading-tight tracking-wide">
        About Us
      </h2>

     
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-16">
       
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/png-clipart-torta-cupcake-bakery-custard-sponge-cake-chocolate-cake-food-frozen-dessert-thumbnail-removebg-preview.png"
            alt="Delicious baked goods from T&A Bakehouse"
            className="w-full max-w-xs md:max-w-md rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"

          />
        </div>

        <div className="md:w-1/2 lg:w-3/5 text-gray-800 text-lg leading-relaxed">
          <p className="mb-6">
            At <strong>T&A Bakehouse</strong>, we love making delicious baked
            goods and making it easy for you to get them! We offer everything
            from <span className="font-semibold text-orange-600">fresh breads baked daily</span> and
            <span className="font-semibold text-orange-600"> tasty pastries perfect for tea time</span>, to
            <span className="font-semibold text-orange-600"> beautiful custom cakes for all your special celebrations</span>.
            Our goal is to make ordering simple and enjoyable, so you can easily
            find what you love, place your order, and have it delivered fresh to
            your door.
          </p>
          <p>
            We mix classic baking with easy online service to make
            sure every visit is wonderful. Come and <span className="font-semibold text-orange-600">taste the joy of freshly
            baked treats!</span>
          </p>
        </div>
      </div>

      
      <h3 className="text-4xl font-bold text-center text-gray-800 mb-10 mt-16 leading-tight">
        What Makes Us Special
      </h3>

      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-12">
       
        <div className="w-full md:w-1/2 lg:w-2/5 flex justify-center">
          <img
            src="/images/girl.png" 
            alt="Our dedicated team member"
            className="w-full max-w-xs md:max-w-md rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"

          />
        </div>

       
        <div className="md:w-1/2 lg:w-3/5 text-gray-800">
          <ul className="list-disc list-inside space-y-5 text-lg pl-4"> 
            <li>
              <strong className="text-orange-600">Fresh, Quality Ingredients: </strong> We believe in using
              the finest and freshest ingredients in all our baked goods, ensuring
              every bite is pure delight.
            </li>
            <li>
              <strong className="text-orange-600">Traditional Recipes with a Passionate Touch: </strong> Our
              bakers bring years of experience, perfecting time-honored recipes
              passed down through generations.
            </li>
            <li>
              <strong className="text-orange-600">Friendly Service, Always: </strong> We value every customer,
              and our dedicated team is committed to providing a warm, helpful, and
              memorable experience every time you connect with us.
            </li>
            <li>
              <strong className="text-orange-600">Baked with Love and Care: </strong> Every item is made with
              a meticulous commitment to quality and a genuine passion for creating
              delicious treats that bring smiles.
            </li>
            <li>
              <strong className="text-orange-600">Here for Your Celebrations: </strong> From everyday moments
              of indulgence to the most special occasions like birthdays and anniversaries,
              we're delighted to craft treats that enhance your joyous memories.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}