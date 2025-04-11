import React from 'react';
import { Link } from 'react-router-dom';
import { Sticker, Upload, Star, Truck, Palette } from 'lucide-react';

const Home = () => {
  return (
    <div>
      <div className="hero-gradient text-white py-24 px-4 -mt-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Transform Your Ideas Into
              <span className="block">Beautiful Stickers</span>
            </h1>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Create custom stickers that make a lasting impression. Perfect for your brand,
              projects, or just for fun. Premium quality guaranteed.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop" className="btn-primary">
                <Sticker className="mr-2 h-5 w-5" />
                Browse Collection
              </Link>
              <Link to="/custom" className="btn-secondary">
                <Upload className="mr-2 h-5 w-5" />
                Create Custom Design
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="card p-8 text-center group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-indigo-100 flex items-center justify-center
              group-hover:bg-indigo-600 transition-colors duration-300">
              <Star className="h-8 w-8 text-indigo-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Premium Quality</h3>
            <p className="text-gray-600 leading-relaxed">
              Durable vinyl stickers that withstand water, sunlight, and scratches.
              Built to last and maintain their vibrant colors.
            </p>
          </div>

          <div className="card p-8 text-center group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-purple-100 flex items-center justify-center
              group-hover:bg-purple-600 transition-colors duration-300">
              <Palette className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Custom Designs</h3>
            <p className="text-gray-600 leading-relaxed">
              Upload your artwork and we'll transform it into professional-grade stickers.
              Your creativity, our expertise.
            </p>
          </div>

          <div className="card p-8 text-center group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-pink-100 flex items-center justify-center
              group-hover:bg-pink-600 transition-colors duration-300">
              <Truck className="h-8 w-8 text-pink-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Fast Shipping</h3>
            <p className="text-gray-600 leading-relaxed">
              Quick production and worldwide shipping to get your stickers to you faster.
              Track your order every step of the way.
            </p>
          </div>
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their sticker needs.
            Your satisfaction is our top priority.
          </p>
          <Link to="/shop" className="btn-primary">
            <Sticker className="mr-2 h-5 w-5" />
            Explore Our Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
