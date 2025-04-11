import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Image, Ruler, Package } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import type { CustomSticker } from '../types';
import { toast } from 'react-hot-toast';

const CustomStickerPage = () => {
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = React.useState<string>('');
  const [dimensions, setDimensions] = React.useState('3x3');
  const [quantity, setQuantity] = React.useState(10);
  const [isLoading, setIsLoading] = React.useState(false);
  
  const navigate = useNavigate();
  const addItem = useCartStore((state) => state.addItem);

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size must be less than 5MB');
      return;
    }

    setSelectedFile(file);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      toast.error('Please upload an image first');
      return;
    }

    setIsLoading(true);
    try {
      // Create a temporary URL for the image
      const imageUrl = previewUrl;

      const customSticker: CustomSticker = {
        id: `custom-${Date.now()}`,
        user_id: 'temp-user',
        image_url: imageUrl,
        dimensions,
        quantity,
        status: 'pending',
        created_at: new Date().toISOString(),
      };

      addItem({
        id: customSticker.id,
        quantity: 1,
        type: 'custom',
        sticker: customSticker,
      });

      toast.success('Added to cart!');
      navigate('/cart');
    } catch (error) {
      toast.error('Error creating custom sticker. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    // Cleanup preview URL when component unmounts
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Create Your Custom Sticker</h1>
        <p className="text-xl text-gray-600">
          Upload your artwork and we'll turn it into high-quality vinyl stickers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="card p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Image className="h-5 w-5 text-indigo-600" />
                  Upload Your Design
                </div>
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageSelect}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  disabled={isLoading}
                />
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-500 transition-colors">
                  <Upload className="h-8 w-8 mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-600">
                    Drop your image here or click to browse
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Max file size: 5MB
                  </p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Ruler className="h-5 w-5 text-indigo-600" />
                  Sticker Dimensions
                </div>
              </label>
              <select
                value={dimensions}
                onChange={(e) => setDimensions(e.target.value)}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                disabled={isLoading}
              >
                <option value="2x2">2" x 2" - Small</option>
                <option value="3x3">3" x 3" - Medium</option>
                <option value="4x4">4" x 4" - Large</option>
                <option value="5x5">5" x 5" - Extra Large</option>
              </select>
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Package className="h-5 w-5 text-indigo-600" />
                  Quantity
                </div>
              </label>
              <input
                type="number"
                min="10"
                step="10"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                disabled={isLoading}
              />
              <p className="mt-2 text-sm text-gray-500">
                Minimum order: 10 stickers
              </p>
            </div>

            <button
              type="submit"
              disabled={!selectedFile || isLoading}
              className="btn-primary w-full"
            >
              {isLoading ? 'Adding to Cart...' : 'Add to Cart'}
            </button>
          </form>
        </div>

        <div className="card p-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Preview</h3>
          <div className="aspect-square rounded-lg border-2 border-dashed border-gray-300 overflow-hidden">
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <p>Your design will appear here</p>
              </div>
            )}
          </div>
          <div className="mt-4 space-y-2">
            <p className="text-sm text-gray-600">
              • High-quality vinyl material
            </p>
            <p className="text-sm text-gray-600">
              • Weather and scratch resistant
            </p>
            <p className="text-sm text-gray-600">
              • Professional die-cut process
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomStickerPage;
