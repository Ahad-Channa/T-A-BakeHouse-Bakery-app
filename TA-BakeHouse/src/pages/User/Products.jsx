import React from 'react';

function Products() {
  return (
    <div className="p-6 bg-yellow-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-yellow-700 mb-6">All Bakery Products</h1>
      <p className="text-center text-gray-600">Admin can manage products here</p>
      {/* Later you can show a product table or add product form */}
    </div>
  );
}

export default Products;
