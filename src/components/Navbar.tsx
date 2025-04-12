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
    { name: 'Custom Printing', path: '/' },
    { name: 'Signage', path: '/' },
    { name: 'Promotional Products', path: '/' },
    { name: 'Novelty Items', path: '/' },
    { name: 'Banners', path: '/' },
    { name: 'Decals', path: '/' },
    { name: 'Vehicle Wraps', path: '/' },
    { name: 'Graphic Design', path: '/' },
    { name: 'Embroidery', path: '/' },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src="https://drive.google.com/file/d/1JYZd8wBko-bSFbF_UbH2oWVre6qwEr3S/view?usp=sharing" alt="Lost Coast Signs &amp; Swag" className="h-12" />
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/" className="nav-link">
              <span>Home</span>
            </Link>
            <div className="relative">
              <button
                className="nav-link flex items-center"
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                  <div className="py-1" role="none">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-indigo-600 transition-colors duration-200"
                        role="menuitem"
                        tabIndex={-1}
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
            <Link to="/" className="nav-link">
              <span>Promotional Products</span>
            </Link>
            <Link to="/" className="nav-link">
              <span>Contact</span>
            </Link>
            <Link to="/custom" className="nav-link">
              <span>Request a Quote</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
