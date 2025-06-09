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
    { id: 1, name: "Cakes" },
    { id: 2, name: "Pastries" },
    { id: 3, name: "Breads" },
    { id: 4, name: "Cookies" },
    { id: 5, name: "Doughnuts" },
    { id: 6, name: "Cupcakes" },
    { id: 7, name: "Brownies" },
    { id: 8, name: "Tarts" },
  ];

  const itemsPerPage = 4;
  const [startIndex, setStartIndex] = useState(0);

  // Determine if we can move left or right
  const canMoveLeft = startIndex > 0;
  const canMoveRight = startIndex + itemsPerPage < categories.length;

  const handleMoveLeft = () => {
    if (canMoveLeft) setStartIndex(startIndex - itemsPerPage);
  };

  const handleMoveRight = () => {
    if (canMoveRight) setStartIndex(startIndex + itemsPerPage);
  };

  // Slice the categories to display current "page"
  const visibleCategories = categories.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Categories</h2>

      <div className="flex items-center space-x-4">
        {/* Left Arrow */}
        <button
          onClick={handleMoveLeft}
          disabled={!canMoveLeft}
          className={`p-3 rounded-full bg-sky-300 text-white shadow ${
            !canMoveLeft ? "opacity-40 cursor-not-allowed" : "hover:bg-sky-400"
          }`}
          aria-label="Previous categories"
        >
          &#8592;
        </button>

        {/* Categories cards */}
        <div className="flex space-x-6 overflow-hidden">
          {visibleCategories.map((cat) => (
            <div
              key={cat.id}
              className="w-28 h-28 rounded-full bg-sky-200 flex items-center justify-center text-center font-semibold text-gray-800 shadow"
              title={cat.name}
            >
              {cat.name}
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleMoveRight}
          disabled={!canMoveRight}
          className={`p-3 rounded-full bg-sky-300 text-white shadow ${
            !canMoveRight ? "opacity-40 cursor-not-allowed" : "hover:bg-sky-400"
          }`}
          aria-label="Next categories"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default ClientCategories;
