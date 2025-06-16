
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditCategory = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/categories/${id}`);
        setName(res.data.name);
        setDescription(res.data.description || "");
      } catch (err) {
        console.error("Failed to fetch category", err);
      }
    };

    fetchCategory();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    if (image) formData.append("image", image);

    try {
      await axios.put(`http://localhost:5000/api/categories/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      nav("/admin/admin-category");
    } catch (err) {
      console.error("Failed to update category", err);
    }
  };

  return (
    <div className=" flex items-center justify-center  animate-fadeIn">
      <div className="w-[700px] bg-white shadow-lg rounded-xl p-8 ">
        <h2 className="text-2xl font-bold mb-4">Edit Category</h2>
        <form onSubmit={handleUpdate} encType="multipart/form-data">
          <input
            type="text"
            value={name}
            placeholder="Update category name"
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 mb-4"
            required
          />
          <textarea
            value={description}
            placeholder="Update description"
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 mb-4"
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
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Update
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

export default EditCategory;
