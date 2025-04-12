import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Image, Ruler, Package, FileText, MessageSquare, Tag, User, Mail, Phone, Building, MapPin } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import type { CustomSticker } from '../types';
import { toast } from 'react-hot-toast';

const RequestQuotePage = () => {
  // Contact info state
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState(''); // Phone is now required
  const [companyName, setCompanyName] = React.useState('');
  const [cityState, setCityState] = React.useState('');

  // Project details state
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = React.useState<string>('');
  const [dimensions, setDimensions] = React.useState('');
  const [quantity, setQuantity] = React.useState<number | string>(1);
  const [serviceType, setServiceType] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const navigate = useNavigate();

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      toast.error('File size must be less than 10MB');
      return;
    }

    setSelectedFile(file);
    if (file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      setPreviewUrl('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Updated validation to include phone
    if (!name || !email || !phone) {
      toast.error('Please fill in your Name, Email, and Phone Number');
      return;
    }
    if (!serviceType) {
      toast.error('Please select a service type');
      return;
    }
     if (!description) {
      toast.error('Please describe your requirements');
      return;
    }

    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('companyName', companyName);
      formData.append('cityState', cityState);
      formData.append('serviceType', serviceType);
      formData.append('description', description);
      formData.append('dimensions', dimensions);
      formData.append('quantity', quantity.toString());
      if (selectedFile) {
        formData.append('designFile', selectedFile);
      }

      console.log('Submitting quote request:', Object.fromEntries(formData.entries()));
      // Replace with actual API call: await fetch('/api/submit-quote', { method: 'POST', body: formData });

      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

      toast.success('Quote request submitted successfully! We will get back to you soon.');

      // Clear form fields
      setName('');
      setEmail('');
      setPhone('');
      setCompanyName('');
      setCityState('');
      setServiceType('');
      setDescription('');
      setSelectedFile(null);
      setPreviewUrl('');
      setDimensions('');
      setQuantity(1);

    } catch (error) {
      console.error("Quote submission error:", error);
      toast.error('Error submitting quote request. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Get a Custom Quote – It's Easy!</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Tell us about your project, and we'll provide a detailed quote. Please complete the form,
          making sure to select the service, describe your requirements, and attach any design files.
          We typically respond within 1-2 business days.
        </p>
      </div>

      <div className="card p-8">
        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Contact Information Section */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-3">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Your Name */}
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-indigo-600" />
                  Your Name <span className="text-red-500">*</span>
                </div>
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
                disabled={isLoading}
                placeholder="John Doe"
              />
            </div>

            {/* Your Email */}
            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-indigo-600" />
                  Your Email <span className="text-red-500">*</span>
                </div>
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
                disabled={isLoading}
                placeholder="you@example.com"
              />
            </div>

            {/* Phone Number (Required) */}
            <div>
              <label htmlFor="phone" className="block text-lg font-semibold text-gray-700 mb-2">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-indigo-600" />
                  Phone Number <span className="text-red-500">*</span>
                </div>
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required // Added required attribute
                disabled={isLoading}
                placeholder="(555) 123-4567"
              />
            </div>

            {/* Company Name */}
            <div>
              <label htmlFor="companyName" className="block text-lg font-semibold text-gray-700 mb-2">
                <div className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-indigo-600" />
                  Company Name (Optional)
                </div>
              </label>
              <input
                id="companyName"
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                disabled={isLoading}
                placeholder="Acme Corporation"
              />
            </div>

             {/* City and State */}
            <div className="md:col-span-2">
              <label htmlFor="cityState" className="block text-lg font-semibold text-gray-700 mb-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-indigo-600" />
                  City and State (Optional)
                </div>
              </label>
              <input
                id="cityState"
                type="text"
                value={cityState}
                onChange={(e) => setCityState(e.target.value)}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                disabled={isLoading}
                placeholder="Eureka, CA"
              />
            </div>
          </div>

          {/* Project Details Section */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-3 pt-4">Project Details</h2>

          {/* Service Selection */}
          <div>
            <label htmlFor="serviceType" className="block text-lg font-semibold text-gray-700 mb-2">
              <div className="flex items-center gap-2">
                <Tag className="h-5 w-5 text-indigo-600" />
                Select Service <span className="text-red-500">*</span>
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
            <label htmlFor="description" className="block text-lg font-semibold text-gray-700 mb-2">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-indigo-600" />
                Describe Your Requirements <span className="text-red-500">*</span>
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

          {/* Conditional Fields */}
          {(serviceType.includes('Decals') || serviceType.includes('Stickers') || serviceType.includes('Labels') || serviceType.includes('Banners') || serviceType.includes('Apparel')) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="dimensions" className="block text-lg font-semibold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Ruler className="h-5 w-5 text-indigo-600" />
                    Approximate Dimensions (if applicable)
                  </div>
                </label>
                <input
                  id="dimensions"
                  type="text"
                  value={dimensions}
                  onChange={(e) => setDimensions(e.target.value)}
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  disabled={isLoading}
                  placeholder='e.g., 3" x 3", Large, 4ft x 8ft'
                />
              </div>

              <div>
                <label htmlFor="quantity" className="block text-lg font-semibold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-indigo-600" />
                    Estimated Quantity (if applicable)
                  </div>
                </label>
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  step="1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value === '' ? '' : parseInt(e.target.value) || 1)}
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  disabled={isLoading}
                  placeholder="e.g., 50"
                />
              </div>
            </div>
          )}

          {/* File Upload */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-indigo-600" />
                Upload Design File (Optional)
              </div>
            </label>
            <div className="relative">
              <input
                type="file"
                accept="image/*,application/pdf,.ai,.eps,.svg"
                onChange={handleImageSelect}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                disabled={isLoading}
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="block border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-500 transition-colors cursor-pointer"
              >
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
              </label>
            </div>
             {/* Image Preview */}
             {previewUrl && (
              <div className="mt-4 p-4 border rounded-lg bg-gray-50">
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
            // Updated disabled condition
            disabled={isLoading || !name || !email || !phone || !serviceType || !description}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed mt-8"
          >
            {isLoading ? 'Submitting Request...' : 'Submit Quote Request'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestQuotePage;
