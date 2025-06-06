// ClientProducts.jsx
import Products from "../components/Products";

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

export default ClientProducts;