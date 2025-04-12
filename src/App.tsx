import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
// import CustomSticker from './pages/CustomSticker'; // Old import
import RequestQuotePage from './pages/RequestQuotePage'; // New import
import Cart from './pages/Cart';
import Orders from './pages/Orders';
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
      <main className="container mx-auto px-4 py-8 flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          {/* Updated route to use the new component */}
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
