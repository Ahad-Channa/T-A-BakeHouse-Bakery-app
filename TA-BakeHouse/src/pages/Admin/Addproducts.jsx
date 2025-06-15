/*import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addproducts = () => {
  const categories = [
    { id: 1, name: "Cakes" },
    { id: 2, name: "Bread" },
    { id: 3, name: "Cookies" },
    { id: 4, name: "Pastries" },
  ];

  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleImage = (e) => setImage(e.target.files[0]);
  const handleCategory = (e) => setCategory(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ideally, send data to backend here.
    navigate("/admin/admin-products");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-md p-6">
        <h2 className="font-bold bg-sky-100 rounded-lg my-3 py-2 px-4 text-center">
          Add New Products
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="font-bold">Product Name:</label>
            <input
              type="text"
              placeholder="Enter product name"
              required
              onChange={(e) => setProductName(e.target.value)}
              className="w-[200px] h-[30px] border ml-4"
            />
          </div>

          <div className="mb-4">
            <label className="font-bold">Description:</label>
            <input
              type="text"
              placeholder="Enter product description"
              required
              onChange={(e) => setDescription(e.target.value)}
              className="border w-[400px] h-[150px] ml-4"
            />
          </div>

          <div className="mb-4">
            <label className="font-bold">Category:</label>
            <select
              onChange={handleCategory}
              className="ml-4"
              required
            >
              <option value="">Choose category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="font-bold">Upload Image:</label>
            <input
              type="file"
              required
              onChange={handleImage}
              className="ml-4"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => navigate("/admin/admin-products")}
              className="bg-gray-300 py-2 px-4 mr-2 rounded-lg"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 ml-2 rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addproducts;
*/