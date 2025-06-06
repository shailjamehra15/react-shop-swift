import React from "react";
import all_product from "../assets/all_product";
import ProductCard from "../components/ProductCard";
import Hero from '../components/Hero'; 

const Home = () => {
  return (
    
    <div className="bg-gray-100 min-h-screen ">
       <Hero />
      <div className="max-w-6xl mx-auto px-4">
        <h1 className=" text-4xl font-bold text-center text-gray-800 mb-10">
          🛍️ ShopSwift – Featured Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {all_product.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
