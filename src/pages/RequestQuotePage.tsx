import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Image, Ruler, Package, FileText, MessageSquare, Tag } from 'lucide-react'; // Added FileText, MessageSquare, Tag
import { useCartStore } from '../store/cartStore';
import type { CustomSticker } from '../types';
import { toast } from 'react-hot-toast';

const CustomStickerPage = () => {
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = React.useState<string>('');
  const [dimensions, setDimensions] = React.useState('3x3'); // Keep for potential sticker quotes
  const [quantity, setQuantity] = React.useState(10); // Keep for potential sticker quotes
  const [serviceType, setServiceType] = React.useState(''); // Add state for service type
  const [description, setDescription] = React.useState(''); // Add state for description
  const [isLoading, setIsLoading] = React.useState(false);
  
  const navigate = useNavigate();
  // Note: Cart functionality might need adjustment if this page is purely for quotes now.
  // const addItem = useCartStore((state) => state.addItem); 

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type (allow more than just images if needed for other services)
    // if (!file.type.startsWith('image/')) {
    //   toast.error('Please select an image file');
    //   return;
    // }

    // Validate file size (adjust as needed)
    if (file.size > 10 * 1024 * 1024) { // Increased to 10MB
      toast.error('File size must be less than 10MB');
      return;
    }

    setSelectedFile(file);
    // Only generate preview URL if it's an image
    if (file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      setPreviewUrl(''); // Clear preview for non-image files
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceType) {
      toast.error('Please select a service type');
      return;
    }
     if (!description) {
      toast.error('Please describe your requirements');
      return;
    }
    // File upload is optional now
    // if (!selectedFile) {
    //   toast.error('Please upload an image first');
    //   return;
    // }

    setIsLoading(true);
    try {
      // --- Quote Submission Logic ---
      // This is where you would typically send the form data to your backend
      // (e.g., via an API call) or handle it via a service like Formspree/Netlify Forms.
      
      // Example data to send:
      const formData = new FormData();
      formData.append('serviceType', serviceType);
      formData.append('description', description);
      formData.append('dimensions', dimensions); // Include if relevant for the service
      formData.append('quantity', quantity.toString()); // Include if relevant
      if (selectedFile) {
        formData.append('designFile', selectedFile);
      }

      // Replace with your actual submission logic:
      console.log('Submitting quote request:', {
        serviceType,
        description,
        dimensions,
        quantity,
        fileName: selectedFile?.name,
      });
      // await fetch('/api/submit-quote', { method: 'POST', body: formData }); 
      
      // --- End Quote Submission Logic ---


      // Simulate submission delay
      await new Promise(resolve => setTimeout(resolve, 1500)); 

      toast.success('Quote request submitted successfully! We will get back to you soon.');
      // Optionally clear the form or navigate away
      // navigate('/'); 
      setServiceType('');
      setDescription('');
      setSelectedFile(null);
      setPreviewUrl('');
      setDimensions('3x3');
      setQuantity(10);

    } catch (error) {
      console.error("Quote submission error:", error);
      toast.error('Error submitting quote request. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    // Cleanup preview URL when component unmounts or file changes
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const services = [
    'Custom Tees & Apparel',
    'Signature Sign Solutions',
    'Promo Products',
    'Novelty Items/Signs',
    'Banners',
    'Decals/Stickers/Labels',
    'Vehicle Magnets/Lettering',
    'Graphic Design',
    'Embroidery',
    'Other (Please Describe)',
  ];

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        {/* Updated Headline */}
        <h1 className="text-4xl font-bold mb-4">Get a Custom Quote – It's Easy!</h1> 
        {/* Updated Body Text */}
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Tell us about your project, and we'll provide a detailed quote. Please complete the form, 
          making sure to select the service, describe your requirements, and attach any design files. 
          Where applicable, we may include a digital preview with your quote. 
          We typically respond within 1-2 business days. {/* Placeholder Timeframe */}
        </p>
      </div>

      {/* Simplified layout - single column form */}
      <div className="card p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Service Selection */}
          <div>
            <label htmlFor="serviceType" className="block text-lg font-semibold text-gray-700 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Tag className="h-5 w-5 text-indigo-600" />
                Select Service
              </div>
            </label>
            <select
              id="serviceType"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
              disabled={isLoading}
            >
              <option value="" disabled>-- Please select a service --</option>
              {services.map(service => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
          </div>

          {/* Description */}
           <div>
            <label htmlFor="description" className="block text-lg font-semibold text-gray-700 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="h-5 w-5 text-indigo-600" />
                Describe Your Requirements
              </div>
            </label>
            <textarea
              id="description"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Tell us about your project, including sizes, colors, materials, deadlines, etc."
              required
              disabled={isLoading}
            />
          </div>

          {/* Conditional Fields (Example for Stickers/Decals) */}
          {(serviceType.includes('Decals') || serviceType.includes('Stickers') || serviceType.includes('Labels')) && (
            <>
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Ruler className="h-5 w-5 text-indigo-600" />
                    Approximate Dimensions (if applicable)
                  </div>
                </label>
                <select
                  value={dimensions}
                  onChange={(e) => setDimensions(e.target.value)}
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  disabled={isLoading}
                >
                  <option value="" disabled>-- Select Size --</option>
                  <option value="2x2">2" x 2"</option>
                  <option value="3x3">3" x 3"</option>
                  <option value="4x4">4" x 4"</option>
                  <option value="5x5">5" x 5"</option>
                  <option value="custom">Custom (Describe Below)</option>
                </select>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Package className="h-5 w-5 text-indigo-600" />
                    Estimated Quantity (if applicable)
                  </div>
                </label>
                <input
                  type="number"
                  min="1"
                  step="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  disabled={isLoading}
                />
              </div>
            </>
          )}
          
          {/* File Upload */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-5 w-5 text-indigo-600" />
                Upload Design File (Optional)
              </div>
            </label>
            <div className="relative">
              <input
                type="file"
                // Consider adding more accepted types: accept="image/*,application/pdf,.ai,.eps,.svg"
                accept="image/*,application/pdf,.ai,.eps,.svg" 
                onChange={handleImageSelect}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                disabled={isLoading}
              />
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-500 transition-colors">
                <Upload className="h-8 w-8 mx-auto mb-4 text-gray-400" />
                {selectedFile ? (
                   <p className="text-gray-600 font-medium">{selectedFile.name}</p>
                ) : (
                  <>
                    <p className="text-gray-600">
                      Drop your file here or click to browse
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Max file size: 10MB. (PDF, AI, EPS, SVG, JPG, PNG preferred)
                    </p>
                  </>
                )}
              </div>
            </div>
             {/* Image Preview */}
             {previewUrl && (
              <div className="mt-4 p-4 border rounded-lg">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Image Preview:</h3>
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="max-w-full h-auto max-h-48 mx-auto object-contain rounded"
                />
              </div>
            )}
          </div>


          <button
            type="submit"
            disabled={isLoading || !serviceType || !description}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Submitting Request...' : 'Submit Quote Request'}
          </button>
        </form>
      </div>

      {/* Removed the separate preview column as the form is now single column */}
      {/* <div className="card p-8"> ... </div> */}
    </div>
  );
};

export default CustomStickerPage; // Renaming might be appropriate, e.g., RequestQuotePage
