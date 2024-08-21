import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => (
    <div key={product.id} className="p-4">
      <Link to={`/product/${product.id}`}>
        <div className="mt-10 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
          <img
            className="h-48 w-full object-cover object-center"
            src={product.image}
            alt={product.title}
          />
          <div className="p-4">
            <h2 className="text-lg font-medium dark:text-white text-gray-900">
              {product.title}
            </h2>
            <p className="text-lg font-medium dark:text-white text-gray-900">
              ${product.price}
            </p>
            <p className="text-lg font-medium dark:text-white text-gray-900">
              {product.category}
            </p>
            <div className="mt-2">
              <p className="text-sm font-semibold dark:text-white text-gray-900">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  ));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {renderList}
    </div>
  );
};

export default ProductComponent;
