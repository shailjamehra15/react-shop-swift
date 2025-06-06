import React from "react";
import { useParams } from "react-router-dom";
import all_product from "../assets/all_product";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = all_product.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div className="p-6">Product not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto rounded shadow-md"
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>

        <div className="flex gap-4 items-center mb-4">
          <span className="text-indigo-600 text-2xl font-semibold">
            ₹{product.new_price.toFixed(2)}
          </span>
          <span className="text-gray-400 line-through text-xl">
            ₹{product.old_price.toFixed(2)}
          </span>
        </div>

        <p className="text-gray-600 mb-6">
          This is a stylish and comfortable outfit perfect for your everyday look.
        </p>

        <button
          onClick={() => addToCart(product)}
          className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
