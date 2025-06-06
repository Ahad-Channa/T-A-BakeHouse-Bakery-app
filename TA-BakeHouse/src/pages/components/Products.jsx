/*import React from 'react'

export default function Products() {
  return (
    <div  className='mt-50 flex justify-center bg-sky-300'>Products</div>
  )
}
*/

// ProductCard.jsx
const Products= ({ product, isAdmin = false, onEdit, onDelete }) => {
  return (
    <div className="border p-4 rounded shadow-md bg-white  ">
      <h3 className="text-xl font-semibold">{product.name}</h3>
      <p>{product.description}</p>
      <p className="font-bold">Price: Rs. {product.price}</p>

      {isAdmin && (
        <div className="mt-2 space-x-2">
          <button onClick={() => onEdit(product)} className="bg-yellow-300 px-3 py-1 rounded">Edit</button>
          <button onClick={() => onDelete(product.id)} className="bg-red-300 px-3 py-1 rounded">Delete</button>
        </div>
      )}
    </div>
  );
};


export default Products;