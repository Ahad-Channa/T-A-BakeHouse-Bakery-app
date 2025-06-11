// import React from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Addproducts = () => {
//     const categories = [
//     { id: 1, name: "Cakes" },
//     { id: 2, name: "Bread" },
//     { id: 3, name: "Cookies" },
//     { id: 4, name: "Pastries" },
//   ];
//   const [image, setimage] = useState(null);
//   const [category, setcategory] = useState('');
//   const [productname,setproductname]=useState('');
//   const [discryption,setdiscryption]=useState('');
//   const nav=useNavigate();

//   function imagehandler(e) {
//     setimage(e.target.files[0]);
//   }
//   function categoryhandler(e) {
//     setcategory(e.target.value);
//   }
//   function handlesubmit(e){
//      e.preventDefault();
//    nav("/admin-products");

//   }
//   return (
//     <>
//       <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//         <div className="max-w-5xl w-full bg-white rounded-xl shadow-md p-6">
//           <h2 className="font-bold bg-sky-100 rounded-lg my-3 py-2 px-4 text-center">
//             Add New Products
//           </h2>
//           <div>
//             <form onSubmit={handlesubmit}>
//               <label className="font-bold">Product Name:</label>
//               <input
//                 type="text"
//                 placeholder="Enter product name"
//                 required
//                 onChange={(e)=>setproductname(e.target.value)}
//                 className=" w-[200px] h-[30px] border ml-4 my-3"
//               />
//               <br />
//               <label className="font-bold">Discryption:</label>
//               <input
//                 type="text"
//                 placeholder="Enter product discryption here "
//                 required
//                 onChange={(e)=>setdiscryption(e.target.value)}
//                 className="border w-[400px] h-[150px] ml-4 my-3"
//               />
//               <br />
//               <label className="font-bold">Category</label>
//               <select id="category" onChange={categoryhandler} className="my-3 ml-4 " required> 
//                 <option value="">choose category</option>
//                 {categories.map((i) => (
//                   <option key={i.id} value={i.name}>
//                     {i.name}
//                   </option>
//                 ))}
//               </select>
//               <br/>
//               <label className="font-bold">Upload Image:</label>
//               <input
//                 type="file"
//                 name="file"
//                 required
//                 onChange={imagehandler}
//                 className="ml-4 my-3"
//               />
              
//               <div className=" flex justify-center my-3 ">
//                  <button className="bg-gray-300 py-2 px-4 mr-2 rounded-lg" onClick={()=>nav("/admin-products")}>Back</button>
//                  <button className="bg-gray-300 py-2 px-4 ml-2 rounded-lg" type="submit">Submit</button>
//               </div>
             
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Addproducts;
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AddCategory = () => {
  const nav = useNavigate();
  const { id } = useParams(); // get id from URL
  const isEditMode = !!id;
  const [name, setName] = useState("");

  // Fetch category if in edit mode
  useEffect(() => {
    if (isEditMode) {
      axios.get(`http://localhost:5000/api/categories/${id}`)
        .then((res) => setName(res.data.name))
        .catch((err) => console.error("Failed to load category", err));
    }
  }, [id, isEditMode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditMode) {
        // EDIT mode
        await axios.put(`http://localhost:5000/api/categories/${id}`, { name });
        alert("Category updated successfully");
      } else {
        // ADD mode
        await axios.post(`http://localhost:5000/api/categories`, { name });
        alert("Category added successfully");
      }

      nav("/admin-category");
    } catch (err) {
      console.error("Failed to save category", err);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[700px] bg-white shadow-lg rounded-xl p-8">
        <h2 className="font-bold bg-sky-100 rounded-lg my-3 py-2 px-4">
          {isEditMode ? "Edit Category" : "Add New Category"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Enter category here"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-sky-200 py-2 px-4 m-4 rounded-lg hover:bg-sky-300"
            >
              {isEditMode ? "Update" : "Add"}
            </button>
            <button
              type="button"
              onClick={() => nav("/admin-category")}
              className="bg-gray-200 py-2 px-4 m-4 rounded-lg hover:bg-gray-300"
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
