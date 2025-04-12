import React from 'react';
import { Link } from 'react-router-dom';
import { Sticker, Upload, Star, Truck, Palette, Type, PenLine, Badge, Flag, Car } from 'lucide-react';

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
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="card p-8 text-center group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-purple-100 flex items-center justify-center
              group-hover:bg-purple-600 transition-colors duration-300">
              <Type className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Custom Printing</h3>
            <p className="text-gray-600 leading-relaxed">
              High-quality custom printing services for all your needs.
            </p>
            <Link to="/" className="text-indigo-600 hover:text-indigo-800 mt-4 inline-block">Learn more here</Link>
          </div>

          <div className="card p-8 text-center group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-pink-100 flex items-center justify-center
              group-hover:bg-pink-600 transition-colors duration-300">
              <PenLine className="h-8 w-8 text-pink-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Signage</h3>
            <p className="text-gray-600 leading-relaxed">
              Professional signage solutions to enhance your brand visibility.
            </p>
            <Link to="/" className="text-indigo-600 hover:text-indigo-800 mt-4 inline-block">Learn more here</Link>
          </div>

          <div className="card p-8 text-center group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-yellow-100 flex items-center justify-center
              group-hover:bg-yellow-600 transition-colors duration-300">
              <Badge className="h-8 w-8 text-yellow-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Promotional Products</h3>
            <p className="text-gray-600 leading-relaxed">
              Wide range of promotional products to market your business effectively.
            </p>
            <Link to="/" className="text-indigo-600 hover:text-indigo-800 mt-4 inline-block">Learn more here</Link>
          </div>

          <div className="card p-8 text-center group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-green-100 flex items-center justify-center
              group-hover:bg-green-600 transition-colors duration-300">
              <Star className="h-8 w-8 text-green-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Novelty Items</h3>
            <p className="text-gray-600 leading-relaxed">
              Unique and custom novelty items for special occasions.
            </p>
            <Link to="/" className="text-indigo-600 hover:text-indigo-800 mt-4 inline-block">Learn more here</Link>
          </div>

          <div className="card p-8 text-center group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-100 flex items-center justify-center
              group-hover:bg-blue-600 transition-colors duration-300">
              <Flag className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Banners</h3>
            <p className="text-gray-600 leading-relaxed">
              Eye-catching banner designs to promote your events and campaigns.
            </p>
            <Link to="/" className="text-indigo-600 hover:text-indigo-800 mt-4 inline-block">Learn more here</Link>
          </div>

          <div className="card p-8 text-center group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-orange-100 flex items-center justify-center
              group-hover:bg-orange-600 transition-colors duration-300">
              <Sticker className="h-8 w-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Decals</h3>
            <p className="text-gray-600 leading-relaxed">
              Custom decals for cars, laptops, and other surfaces.
            </p>
            <Link to="/" className="text-indigo-600 hover:text-indigo-800 mt-4 inline-block">Learn more here</Link>
          </div>

          <div className="card p-8 text-center group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-teal-100 flex items-center justify-center
              group-hover:bg-teal-600 transition-colors duration-300">
              <Car className="h-8 w-8 text-teal-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Vehicle Wraps</h3>
            <p className="text-gray-600 leading-relaxed">
              Full and partial vehicle wraps to turn your car into a mobile billboard.
            </p>
            <Link to="/" className="text-indigo-600 hover:text-indigo-800 mt-4 inline-block">Learn more here</Link>
          </div>

          <div className="card p-8 text-center group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-lime-100 flex items-center justify-center
              group-hover:bg-lime-600 transition-colors duration-300">
              <Palette className="h-8 w-8 text-lime-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Graphic Design</h3>
            <p className="text-gray-600 leading-relaxed">
              Professional graphic design services to create stunning visuals for your brand.
            </p>
            <Link to="/" className="text-indigo-600 hover:text-indigo-800 mt-4 inline-block">Learn more here</Link>
          </div>

          <div className="card p-8 text-center group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-emerald-100 flex items-center justify-center
              group-hover:bg-emerald-600 transition-colors duration-300">
              <Type className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Embroidery</h3>
            <p className="text-gray-600 leading-relaxed">
              Custom embroidery services to add a personal touch to your apparel and accessories.
            </p>
            <Link to="/" className="text-indigo-600 hover:text-indigo-800 mt-4 inline-block">Learn more here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
