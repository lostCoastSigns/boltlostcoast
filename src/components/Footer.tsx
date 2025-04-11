import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Pinterest } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold text-gray-700 mb-4">Site Map</h4>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>
                <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-indigo-600 transition-colors">Online Shop</Link>
              </li>
              <li>
                <Link to="/custom" className="hover:text-indigo-600 transition-colors">Request a Quote</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-indigo-600 transition-colors">Promotional Products</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-indigo-600 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
                <Pinterest className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700 mb-4">Contact Us</h4>
            <p className="text-sm text-gray-500">
              123 Main Street<br />
              Anytown, CA 12345<br />
              Phone: (123) 456-7890<br />
              Email: info@example.com
            </p>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Lost Coast Signs and Swag. Another website by <a href="https://99agents.agency" className="text-indigo-600 hover:underline">99AGENTS.agency</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
