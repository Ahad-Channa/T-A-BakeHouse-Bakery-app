const products = [
  {
    id: 1,
    name: "Chocolate Chip",
    href: "#",
    imageSrc: "/images/chocolate-chip.png",
    imageAlt: "image not found",
    price: "200",
    descryption: "hehehehehehehe hahahah ",
  },
  {
    id: 2,
    name: "Cupcake",
    href: "#",
    imageSrc: "/images/cupcake.webp",
    imageAlt: "image not found",
    price: "350",
    descryption: "hity kuch likhbo",
  },
  {
    id: 3,
    name: "Chocolate Cake",
    href: "#",
    imageSrc: "/images/Moist-Chocolate-Cake-20.jpg",
    imageAlt: "image not found",
    price: "1350",
    descryption: "hity b kuch likhbo",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "image not found",
    price: "2500",
    descryption: "same same same ",
  },
  // Add more as needed...
];

function Clientproducts() {
  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-5xl font-bold mb-4 text-center text-deeppurp underline decoration-wavy underline-offset-[20px] mb-20">
          Products
        </h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative border rounded-xl p-4 shadow hover:shadow-lg transition bg-compbg border-2 border-bordercolor"
            >
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
                  <p className="mt-1 text-sm text-gray-500">
                    {product.descryption}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>

              {/* Add to Cart Button */}
              <button className="mt-4 w-full bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clientproducts;
