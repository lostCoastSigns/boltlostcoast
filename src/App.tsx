import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import Shop from './pages/Shop'; // Old shop page
import ShopHome from './pages/ShopHome'; // New Shop Home Page
import RequestQuotePage from './pages/RequestQuotePage';
// import Cart from './pages/Cart'; // Commented out for now
// import Orders from './pages/Orders'; // Commented out for now
import Footer from './components/Footer';

// Import Service Pages
import CustomPrinting from './pages/services/CustomPrinting';
import Signage from './pages/services/Signage';
import PromotionalProducts from './pages/services/PromotionalProducts';
import NoveltyItems from './pages/services/NoveltyItems';
import Banners from './pages/services/Banners';
import Decals from './pages/services/Decals';
import VehicleWraps from './pages/services/VehicleWraps';
import GraphicDesign from './pages/services/GraphicDesign';
import Embroidery from './pages/services/Embroidery';

// Placeholder pages for shop structure (implement later)
const ProductCategoryPage: React.FC = () => <div className="container mx-auto p-4">Category Page Placeholder</div>;
const ProductDetailPage: React.FC = () => <div className="container mx-auto p-4">Product Detail Page Placeholder</div>;
const CheckoutPage: React.FC = () => <div className="container mx-auto p-4">Checkout Page Placeholder</div>;


// Protected route component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

function AppContent() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow"> {/* Removed container/padding here to allow full-width hero */}
        <Routes>
          <Route path="/" element={<Home />} />

          {/* --- Shop Routes --- */}
          <Route path="/shop" element={<ShopHome />} />
          <Route path="/shop/all" element={<ProductCategoryPage />} /> {/* Placeholder */}
          <Route path="/shop/vehicle-graphics" element={<ProductCategoryPage />} /> {/* Placeholder */}
          <Route path="/shop/novelty" element={<ProductCategoryPage />} /> {/* Placeholder */}
          <Route path="/shop/business" element={<ProductCategoryPage />} /> {/* Placeholder */}
          <Route path="/shop/home-gifts" element={<ProductCategoryPage />} /> {/* Placeholder */}
          <Route path="/shop/staff-picks" element={<ProductCategoryPage />} /> {/* Placeholder */}
          <Route path="/shop/seasonal" element={<ProductCategoryPage />} /> {/* Placeholder */}
          <Route path="/shop/templates" element={<ProductCategoryPage />} /> {/* Placeholder */}
          <Route path="/shop/product/:productId" element={<ProductDetailPage />} /> {/* Placeholder */}
          <Route path="/checkout" element={<CheckoutPage />} /> {/* Placeholder */}
          {/* --- End Shop Routes --- */}

          <Route path="/custom" element={<RequestQuotePage />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          {/* <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          /> */}

          {/* Service Routes */}
          <Route path="/services/custom-printing" element={<CustomPrinting />} />
          <Route path="/services/signage" element={<Signage />} />
          <Route path="/services/promotional-products" element={<PromotionalProducts />} />
          <Route path="/services/novelty-items" element={<NoveltyItems />} />
          <Route path="/services/banners" element={<Banners />} />
          <Route path="/services/decals" element={<Decals />} />
          <Route path="/services/vehicle-wraps" element={<VehicleWraps />} />
          <Route path="/services/graphic-design" element={<GraphicDesign />} />
          <Route path="/services/embroidery" element={<Embroidery />} />

        </Routes>
      </main>
      <Toaster position="bottom-right" />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
