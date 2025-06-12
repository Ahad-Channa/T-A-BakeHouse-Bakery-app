/*import { useState } from "react";

const ClientCategories = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categories] = useState([
    { id: 1, name: "Cakes" },
    { id: 2, name: "Pastries" },
    { id: 3, name: "Breads" },
    { id: 4, name: "Cookies" },
  ]);

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-md p-6">
        <div className="bg-gray-200 flex flex-col md:flex-row md:justify-between md:items-center gap-4 p-4 mb-6 rounded-lg">
          <h2 className="text-2xl font-bold">Browse Categories</h2>
          <input
            type="text"
            placeholder="Search category..."
            className="w-full md:w-64 border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {filteredCategories.length > 0 ? (
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="py-2 px-4 border bg-gray-100">#</th>
                <th className="py-2 px-4 border bg-gray-100">Category</th>
              </tr>
            </thead>
            <tbody>
              {filteredCategories.map((category, index) => (
                <tr key={category.id}>
                  <td className="text-center border">{index + 1}</td>
                  <td className="text-center border">{category.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500 mt-6">No categories found.</p>
        )}
      </div>
    </div>
  );
};

export default ClientCategories;
*/
import React, { useState } from "react";

const ClientCategories = () => {
  const categories = [
    { id: 1, name: "Cakes", image: "/images/girl.png" },
    { id: 2, name: "Pastries", image: "/images/biscuits.jpg" },
    { id: 3, name: "Breads", image: "/images/ChatGPT Image .png" },
    { id: 4, name: "Cookies", image: "/images/chocolate-chip.png" },
    { id: 5, name: "Doughnuts", image: "/images/doughnut.png" },
    { id: 6, name: "Cupcakes", image: "/images/cupcake.png" },
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
      <h2 className="text-3xl font-bold mb-4 text-center text-sky-700">
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
          className={`px-4 py-2 rounded bg-sky-500 text-white shadow ${
            !canMoveLeft ? "opacity-40 cursor-not-allowed" : "hover:bg-sky-600"
          }`}
        >
          ← Prev
        </button>

        <button
          onClick={handleMoveRight}
          disabled={!canMoveRight}
          className={`px-4 py-2 rounded bg-sky-500 text-white shadow ${
            !canMoveRight ? "opacity-40 cursor-not-allowed" : "hover:bg-sky-600"
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
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-4 flex flex-col items-center justify-center text-center"
              title={cat.name}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-28 h-28 rounded-full object-cover mb-2 border border-sky-300 shadow-sm"
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
