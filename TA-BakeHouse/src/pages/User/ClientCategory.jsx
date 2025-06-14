
import React, { useState } from "react";

const ClientCategories = () => {
  const categories = [
    { id: 1, name: "Cakes", image: "/images/girl.png" },
    { id: 2, name: "Pastries", image: "/images/biscuits.jpg" },
    { id: 3, name: "Breads", image: "/images/ChatGPT Image .png" },
    { id: 4, name: "Cookies", image: "/images/chocolate-chip.png" },
    { id: 5, name: "Doughnuts", image: "/images/bread.jpg" },
    { id: 6, name: "Cupcakes", image: "/images/cupcake.webp" },
    { id: 7, name: "Brownies", image: "/images/brownie.png" },
    { id: 8, name: "Tarts", image: "/images/tart.png" },
  ];

  const itemsPerPage = 4;
  const [startIndex, setStartIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const canMoveLeft = startIndex > 0;
  const canMoveRight = startIndex + itemsPerPage < filteredCategories.length;

  const handleMoveLeft = () => {
    if (canMoveLeft) setStartIndex(startIndex - itemsPerPage);
  };

  const handleMoveRight = () => {
    if (canMoveRight) setStartIndex(startIndex + itemsPerPage);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setStartIndex(0); // reset to first page when search changes
  };

  const visibleCategories = filteredCategories.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-5xl font-bold mb-4 text-center text-deeppurp underline decoration-wavy underline-offset-[20px] mb=20">
      Categories 
      </h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search categories..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="mb-6  p-3 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-sky-300"
      />

      {/* Navigation */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handleMoveLeft}
          disabled={!canMoveLeft}
          className={`  px-4 py-2 rounded bg-dpurp border-2 border-bordercolor text-bordercolor shadow ${
            !canMoveLeft ? "opacity-40 cursor-not-allowed" : "hover:bg-dpurp"
          }`}
        >
          ← Prev
        </button>

        <button
          onClick={handleMoveRight}
          disabled={!canMoveRight}
          className={`bg-dpurp px-4 py-2 rounded bg-dpurp border-2 border-bordercolor text-bordercolor shadow ${
            !canMoveRight ? "opacity-100 cursor-not-allowed" : "hover:bg-dpurp"
          }`}
        >
          Next →
        </button>
      </div>

      {/* Cards */}
      {visibleCategories.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {visibleCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-compbg border-2 border-bordercolor  rounded-3xl shadow-lg hover:shadow-xl transition-all p-4 flex flex-col items-center justify-center text-center"
              title={cat.name}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-28 h-28 rounded-full object-cover mb-2  shadow-sm"
              />

              <p className="text-sm font-semibold text-gray-700">{cat.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-8">No categories found.</p>
      )}
    </div>
  );
};

export default ClientCategories;
