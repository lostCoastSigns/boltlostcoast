import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Upload, Package, User, LogOut, ChevronDown, Car, Beer, Store, Home as HomeIcon, Star, Calendar, Palette } from 'lucide-react'; // Added new icons
import AuthModal from './AuthModal';
import { toast } from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = React.useState(false);
  const [isShopMegaMenuOpen, setIsShopMegaMenuOpen] = React.useState(false); // State for Shop Mega Menu
  const navigate = useNavigate();
  const megaMenuTimeoutRef = React.useRef<NodeJS.Timeout | null>(null); // Ref for hover delay

  const handleLogout = async () => {
    try {
      // TODO: Implement logout logic
      toast.success('Logged out successfully');
      navigate('/');
    } catch (error) {
      toast.error('Error logging out');
    }
  };

  const services = [
    { name: 'Custom Printing', path: '/services/custom-printing' },
    { name: 'Signage', path: '/services/signage' },
    { name: 'Promotional Products', path: '/services/promotional-products' },
    { name: 'Novelty Items', path: '/services/novelty-items' },
    { name: 'Banners', path: '/services/banners' },
    { name: 'Decals', path: '/services/decals' },
    { name: 'Vehicle Wraps', path: '/services/vehicle-wraps' },
    { name: 'Graphic Design', path: '/services/graphic-design' },
    { name: 'Embroidery', path: '/services/embroidery' },
  ];

  // Mega Menu Handlers with Delay
  const handleMegaMenuEnter = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
    setIsShopMegaMenuOpen(true);
  };

  const handleMegaMenuLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setIsShopMegaMenuOpen(false);
    }, 150); // 150ms delay before closing
  };

  // Mega Menu Categories
  const shopCategories = [
    { name: 'Vehicle Graphics', icon: Car, path: '/shop/vehicle-graphics' },
    { name: 'Mancave/Novelty', icon: Beer, path: '/shop/novelty' },
    { name: 'Business Essentials', icon: Store, path: '/shop/business' },
    { name: 'Home & Gifts', icon: HomeIcon, path: '/shop/home-gifts' },
  ];

  const shopCollections = [
     { name: 'Staff Picks', icon: Star, path: '/shop/staff-picks' },
     { name: 'Seasonal Signs', icon: Calendar, path: '/shop/seasonal' },
     { name: 'Custom Templates', icon: Palette, path: '/shop/templates' },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
             <span className="text-xl font-bold text-indigo-600">Lost Coast Signs</span>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="nav-link">
              <span>Home</span>
            </Link>
            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="nav-link flex items-center"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesDropdownOpen && (
                <div
                  className="absolute left-0 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex={-1}
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  <div className="py-1" role="none">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-indigo-600 transition-colors duration-200"
                        role="menuitem"
                        tabIndex={-1}
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Online Shop Mega Menu */}
            <div className="relative" onMouseEnter={handleMegaMenuEnter} onMouseLeave={handleMegaMenuLeave}>
              <Link
                to="/shop" // Link still goes to the main shop page
                className="nav-link flex items-center"
                aria-haspopup="true"
                aria-expanded={isShopMegaMenuOpen}
              >
                <span>Online Shop</span>
                 <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${isShopMegaMenuOpen ? 'rotate-180' : ''}`} />
              </Link>
              {isShopMegaMenuOpen && (
                <div
                  className="absolute -left-1/2 transform translate-x-[-25%] mt-0 w-[500px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                  // Keep open when hovering over the menu itself
                  onMouseEnter={handleMegaMenuEnter}
                  onMouseLeave={handleMegaMenuLeave}
                >
                  <div className="grid grid-cols-2 gap-4 p-5">
                    {/* Main Categories Column */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Shop by Category</h3>
                      <div className="space-y-2">
                        {shopCategories.map((category) => (
                          <Link
                            key={category.name}
                            to={category.path}
                            className="flex items-center p-2 -m-2 rounded-lg hover:bg-gray-100 transition ease-in-out duration-150"
                            onClick={() => setIsShopMegaMenuOpen(false)} // Close on click
                          >
                            <category.icon className="w-5 h-5 text-indigo-600 mr-3 flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-900">{category.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                    {/* Collections & Featured Column */}
                    <div>
                       <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Collections</h3>
                       <div className="space-y-2">
                        {shopCollections.map((collection) => (
                          <Link
                            key={collection.name}
                            to={collection.path}
                            className="flex items-center p-2 -m-2 rounded-lg hover:bg-gray-100 transition ease-in-out duration-150"
                            onClick={() => setIsShopMegaMenuOpen(false)} // Close on click
                          >
                            <collection.icon className="w-5 h-5 text-indigo-600 mr-3 flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-900">{collection.name}</span>
                          </Link>
                        ))}
                      </div>
                      {/* Optional: Add a featured product or image here */}
                      {/* <div className="mt-4 pt-4 border-t border-gray-200">
                        <img src="https://via.placeholder.com/200x100?text=Featured+Sign" alt="Featured" className="rounded"/>
                      </div> */}
                    </div>
                  </div>
                   <div className="bg-gray-50 px-5 py-3">
                      <Link
                        to="/shop/all"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                        onClick={() => setIsShopMegaMenuOpen(false)}
                      >
                        View All Products &rarr;
                      </Link>
                    </div>
                </div>
              )}
            </div>

            <Link to="/services/promotional-products" className="nav-link">
              <span>Promotional Products</span>
            </Link>
            <Link to="/custom" className="btn-primary px-4 py-2 text-sm">
              <span>Request a Quote</span>
            </Link>
          </div>
          {/* Add Mobile Menu Button Here if needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
