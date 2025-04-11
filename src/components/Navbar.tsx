import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Sticker, Upload, Package, User, LogOut } from 'lucide-react';
import AuthModal from './AuthModal';
import { toast } from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);
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

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center
              group-hover:bg-indigo-600 transition-colors duration-300">
              <Sticker className="h-6 w-6 text-indigo-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Lost Coast Signs &amp; Swag
            </span>
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link to="/shop" className="nav-link">
              <Package className="h-5 w-5" />
              <span>Shop</span>
            </Link>
            <Link to="/custom" className="nav-link">
              <Upload className="h-5 w-5" />
              <span>Request a Quote</span>
            </Link>
            {user && (
              <Link to="/orders" className="nav-link">
                <Package className="h-5 w-5" />
                <span>Orders</span>
              </Link>
            )}
            <Link to="/cart" className="nav-link">
              <ShoppingCart className="h-5 w-5" />
              <span>Cart</span>
            </Link>
            {user ? (
              <button
                onClick={handleLogout}
                className="nav-link"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="btn-primary"
              >
                <User className="h-5 w-5 mr-2" />
                <span>Login</span>
              </button>
            )}
          </div>
        </div>
      </div>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
