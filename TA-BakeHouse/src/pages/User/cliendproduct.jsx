// ClientProducts.jsx
/*import Products from "../components/Products";

const ClientProducts = () => {
  const products = [
    { id: 1, name: "Chocolate Cake", description: "Rich chocolate", price: 500 },
    { id: 2, name: "Vanilla Pastry", description: "Classic vanilla", price: 200 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {products.map((prod) => (
        <Products key={prod.id} product={prod} /> 
        
        
      ))}
      
    </div>
  );
};

export default ClientProducts;*/
import Products from "../components/Products";

const ClientProducts = () => {
  const products = [
    { id: 1, name: "Chocolate Cake", description: "Rich chocolate", price: 500 },
    { id: 2, name: "Vanilla Pastry", description: "Classic vanilla", price: 200 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center">
      <div className="w-full max-w-6xl bg-slate-200 rounded-lg p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-center">Our Products</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((prod) => (
            <Products key={prod.id} product={prod} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientProducts;
