const Products = ({ product, isAdmin = false, onEdit, onDelete }) => {
  return (
    <div className="border p-4 rounded shadow-md bg-white w-full">
      <h3 className="text-xl font-semibold">{product.name}</h3>
      <p>{product.description}</p>
      <p className="font-bold">Price: Rs. {product.price}</p>

      {isAdmin && (
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => onEdit(product)}
            className="bg-yellow-300 px-3 py-1 rounded hover:bg-yellow-400"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(product.id)}
            className="bg-red-300 px-3 py-1 rounded hover:bg-red-400"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
