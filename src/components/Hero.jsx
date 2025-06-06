import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero_image.png'; 

const Hero = () => {
  return (
    <section className="bg-indigo-50 py-10 px-6 rounded-lg shadow mb-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-4">
            Discover the Latest Styles at ShopSwift
          </h1>
          <p className="text-gray-700 mb-6">
            Trendy, affordable fashion for men, women & kids — all in one place.
          </p>
          <Link
            to="/"
            className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
          >
            Shop Now
          </Link>
        </div>
        <div className="md:w-1/2">
          <img
            src={heroImage}
            alt="ShopSwift Hero"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
