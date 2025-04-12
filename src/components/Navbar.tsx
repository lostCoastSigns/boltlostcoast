import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Upload, Package, User, LogOut, ChevronDown } from 'lucide-react';
import AuthModal from './AuthModal';
import { toast } from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = React.useState(false);
  const navigate = useNavigate();

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

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            {/* Consider adding a proper logo image here */}
             <span className="text-xl font-bold text-indigo-600">Lost Coast Signs</span>
            {/* <img src="YOUR_LOGO_URL" alt="Lost Coast Signs & Swag" className="h-10" /> */}
          </Link>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="nav-link">
              <span>Home</span>
            </Link>
            <div className="relative">
              <button
                className="nav-link flex items-center"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)} // For mobile/touch
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
                        onClick={() => setIsServicesDropdownOpen(false)} // Close on click
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link to="/shop" className="nav-link">
              <span>Online Shop</span>
            </Link>
            <Link to="/services/promotional-products" className="nav-link">
              <span>Promotional Products</span>
            </Link>
            {/* <Link to="/contact" className="nav-link"> 
              <span>Contact</span> 
            </Link> */}
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
