import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addproducts = () => {
    const categories = [
    { id: 1, name: "Cakes" },
    { id: 2, name: "Bread" },
    { id: 3, name: "Cookies" },
    { id: 4, name: "Pastries" },
  ];
  const [image, setimage] = useState(null);
  const [category, setcategory] = useState('');
  const [productname,setproductname]=useState('');
  const [discryption,setdiscryption]=useState('');
  const nav=useNavigate();

  function imagehandler(e) {
    setimage(e.target.files[0]);
  }
  function categoryhandler(e) {
    setcategory(e.target.value);
  }
  function handlesubmit(e){
     e.preventDefault();
   nav("/admin-products");

  }
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="max-w-5xl w-full bg-white rounded-xl shadow-md p-6">
          <h2 className="font-bold bg-sky-100 rounded-lg my-3 py-2 px-4 text-center">
            Add New Products
          </h2>
          <div>
            <form onSubmit={handlesubmit}>
              <label className="font-bold">Product Name:</label>
              <input
                type="text"
                placeholder="Enter product name"
                required
                onChange={(e)=>setproductname(e.target.value)}
                className=" w-[200px] h-[30px] border ml-4 my-3"
              />
              <br />
              <label className="font-bold">Discryption:</label>
              <input
                type="text"
                placeholder="Enter product discryption here "
                required
                onChange={(e)=>setdiscryption(e.target.value)}
                className="border w-[400px] h-[150px] ml-4 my-3"
              />
              <br />
              <label className="font-bold">Category</label>
              <select id="category" onChange={categoryhandler} className="my-3 ml-4 " required> 
                <option value="">choose category</option>
                {categories.map((i) => (
                  <option key={i.id} value={i.name}>
                    {i.name}
                  </option>
                ))}
              </select>
              <br/>
              <label className="font-bold">Upload Image:</label>
              <input
                type="file"
                name="file"
                required
                onChange={imagehandler}
                className="ml-4 my-3"
              />
              
              <div className=" flex justify-center my-3 ">
                 <button className="bg-gray-300 py-2 px-4 mr-2 rounded-lg" onClick={()=>nav("/admin-products")}>Back</button>
                 <button className="bg-gray-300 py-2 px-4 ml-2 rounded-lg" type="submit">Submit</button>
              </div>
             
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addproducts;
