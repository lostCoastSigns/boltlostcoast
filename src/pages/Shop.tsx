import React from 'react';
import { useCartStore } from '../store/cartStore';
import type { Sticker } from '../types';

const Shop = () => {
  const addItem = useCartStore((state) => state.addItem);
  const [stickers, setStickers] = React.useState<Sticker[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // TODO: Fetch stickers from Supabase
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Shop Stickers</h1>
      
      {stickers.length === 0 ? (
        <div className="text-center py-8 text-gray-600">
          No stickers available at the moment.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {stickers.map((sticker) => (
            <div key={sticker.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={sticker.image_url}
                alt={sticker.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{sticker.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{sticker.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">${sticker.price}</span>
                  <button
                    onClick={() => addItem({
                      id: sticker.id,
                      quantity: 1,
                      type: 'preset',
                      sticker,
                    })}
                    className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
