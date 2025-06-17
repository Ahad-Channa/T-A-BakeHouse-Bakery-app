


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AddCategory = () => {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    if (image) formData.append("image", image);

    try {
      await axios.post("http://localhost:5000/api/categories", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      nav("/admin/admin-category");
    } catch (err) {
      console.error("Failed to add category", err);
    }
  };

  return (
    <div className="m-10 rounded-lg bg-gray-100 flex items-center justify-center  animate-fadeIn ">
      <div className="w-[700px]  bg-white shadow-lg rounded-xl p-8 ">
        <h2 className="font-bold bg-sky-300  rounded-lg my-3 py-4 px-4">
          Add new category
        </h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <input
            type="text"
            placeholder="Enter category name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-400 rounded-lg px-4 py-4  my-4 focus:outline-none focus:border-blue-500"
            required
          />
          <textarea
            placeholder="Enter description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-400 rounded-lg px-4 py-4  my-4 focus:outline-none focus:border-blue-500"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="mb-4"
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Add
            </button>
            <button
              type="button"
              onClick={() => nav("/admin/admin-category")}
              className="bg-gray-300 py-2 px-4 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
