import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Beer, Store, Home as HomeIcon, ArrowRight, Tag, ShieldCheck, Star } from 'lucide-react'; // Added icons

// Placeholder data - replace with actual data fetching
const featuredProducts = [
  { id: 1, name: 'Custom Vehicle Magnet', price: '29.99', material: 'Magnetic Vinyl', image: 'https://via.placeholder.com/300x200.png?text=Vehicle+Magnet' },
  { id: 2, name: 'Funny Mancave Sign', price: '19.99', material: 'Aluminum', image: 'https://via.placeholder.com/300x200.png?text=Mancave+Sign' },
  { id: 3, name: 'Business Hours Decal', price: '15.99', material: 'Vinyl Decal', image: 'https://via.placeholder.com/300x200.png?text=Business+Hours' },
  { id: 4, name: 'Welcome Home Sign', price: '24.99', material: 'Wood', image: 'https://via.placeholder.com/300x200.png?text=Welcome+Sign' },
];

const newArrivals = [
   { id: 5, name: 'Reflective Address Sign', price: '34.99', image: 'https://via.placeholder.com/300x200.png?text=Address+Sign' },
   { id: 6, name: 'Custom Pet Portrait Decal', price: '18.99', image: 'https://via.placeholder.com/300x200.png?text=Pet+Decal' },
];

const ShopHome: React.FC = () => {
  const categories = [
    { name: 'Vehicle Graphics', icon: Car, path: '/shop/vehicle-graphics', description: 'Magnets, wraps, decals' },
    { name: 'Mancave/Novelty', icon: Beer, path: '/shop/novelty', description: 'Fun signs, bar decor' },
    { name: 'Business Essentials', icon: Store, path: '/shop/business', description: 'Hours, logos, safety' },
    { name: 'Home & Gifts', icon: HomeIcon, path: '/shop/home-gifts', description: 'Address, welcome, decor' },
  ];

  return (
    <div className="bg-gradient-to-br from-orange-50 via-yellow-50 to-white"> {/* Subtle gradient background */}

      {/* Hero Section */}
      <section className="relative text-center py-24 px-4 bg-gradient-to-r from-orange-400 to-yellow-400 text-white overflow-hidden">
        {/* Placeholder for rotating images - using a static background for now */}
        <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1500x500.png?text=Vehicle+Wrap+Example')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-md">
            Your Vision, Our Signs
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto drop-shadow-sm">
            High-quality custom signs, vehicle graphics, and novelty items crafted in Humboldt.
          </p>
          <Link
            to="/custom" // Link to quote/design studio page
            className="inline-flex items-center px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 text-lg"
          >
            Design Your Custom Sign
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <div className="mt-8 flex justify-center items-center space-x-6">
            <span className="flex items-center text-sm backdrop-blur-sm bg-black/10 px-3 py-1 rounded-full">
              <Star className="w-4 h-4 mr-1 text-yellow-300" /> Humboldt-Crafted Since 20XX
            </span>
            <span className="flex items-center text-sm backdrop-blur-sm bg-black/10 px-3 py-1 rounded-full">
              <ShieldCheck className="w-4 h-4 mr-1 text-green-300" /> Secure Checkout
            </span>
            {/* Add more trust badges as needed */}
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className="group block text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 hover:border-orange-200"
            >
              <category.icon className="h-12 w-12 mx-auto mb-4 text-orange-500 group-hover:text-orange-600 transition duration-300" />
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{category.name}</h3>
              <p className="text-sm text-gray-500">{category.description}</p>
              <span className="mt-4 inline-block text-sm font-medium text-orange-600 group-hover:underline">
                Shop Now <ArrowRight className="inline h-4 w-4 -mt-px" />
              </span>
            </Link>
          ))}
        </div>
        {/* Optional: Expandable "All Collections" - Simple link for now */}
        <div className="text-center mt-12">
           <Link to="/shop/all" className="text-orange-600 hover:text-orange-800 font-medium">
             View All Collections &rarr;
           </Link>
        </div>
      </section>

      {/* Featured Products - Best Sellers */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-white rounded-xl shadow-inner-lg border border-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Best Sellers</h2>
        {/* Placeholder for Carousel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="card border border-gray-100 overflow-hidden group">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-4">
                <h3 className="text-md font-semibold mb-1 truncate">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{product.material}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">${product.price}</span>
                  <Link
                    to={`/shop/product/${product.id}`} // Link to product page
                    className="px-3 py-1 bg-orange-500 text-white text-sm rounded hover:bg-orange-600 transition duration-200"
                  >
                    Customize
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
       <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">New Arrivals</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Combine featured and new arrivals for display, or use separate data */}
          {[...featuredProducts.slice(0,2), ...newArrivals].map((product) => (
             <div key={product.id} className="card border border-gray-100 overflow-hidden group relative">
               <img src={product.image} alt={product.name} className="w-full h-48 object-cover transition-transform duration-300 group-hover:opacity-80" />
               {/* Hover effect placeholder - real zoom needs JS */}
               <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-white text-sm bg-black/50 px-2 py-1 rounded">Zoom</span>
               </div>
              <div className="p-4">
                <h3 className="text-md font-semibold mb-1 truncate">{product.name}</h3>
                <p className="text-lg font-bold text-gray-900">${product.price}</p>
                 <Link
                    to={`/shop/product/${product.id}`}
                    className="mt-2 inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded hover:bg-gray-200 transition duration-200"
                  >
                    View Details
                  </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ShopHome;
