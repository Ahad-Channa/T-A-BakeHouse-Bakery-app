
/*import Products from "../components/Products";

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
*/
// components/Products.jsx
const products = [
  {
    id: 1,
    name: 'Chocolate Chip',
    href: '#',
    imageSrc: "/images/chocolate-chip.png",
    imageAlt: "image not found",
    price: '200',
    descryption: 'hehehehehehehe hahahah ',
  },
  {
    id: 2,
    name: 'Cupcake',
    href: '#',
    imageSrc: "/images/cupcake.webp",
    imageAlt: "image not found",
    price: '350',
    descryption: 'hity kuch likhbo',
  },
  {
    id: 3,
    name: 'Chocolate Cake',
    href: '#',
    imageSrc: "/images/Moist-Chocolate-Cake-20.jpg",
    imageAlt: "image not found",
    price: '1350',
    descryption:  'hity b kuch likhbo',
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "image not found",
    price: '2500',
    descryption:  'same same same ',
  },
  // Add more as needed...
];

function Clientproducts() {
  return (
    <div >
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center mb-8">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
          {products.map((product) => (
            <div key={product.id} className="group relative border rounded-xl p-4 shadow hover:shadow-lg transition bg-dpurp border-2 border-bordercolor">
              <img 
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"
              />
              <div className="mt-4 flex justify-between items-center">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.descryption }</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>

              {/* Add to Cart Button */}
              <button
                className="mt-4 w-full bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default  Clientproducts;