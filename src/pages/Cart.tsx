import React from 'react';
import { useCartStore } from '../store/cartStore';
import { Trash2 } from 'lucide-react';

const Cart = () => {
  const { items, removeItem, updateQuantity } = useCartStore();
  
  const total = items.reduce((sum, item) => {
    const price = 'price' in item.sticker ? item.sticker.price : 5.99; // Default price for custom stickers
    return sum + (price * item.quantity);
  }, 0);

  const handleCheckout = async () => {
    try {
      // TODO: Implement Stripe checkout
      alert('Checkout not implemented yet');
    } catch (error) {
      console.error('Error during checkout:', error);
      alert('Error processing checkout. Please try again.');
    }
  };

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto text-center py-16">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Add some awesome stickers to get started!</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        {items.map((item) => (
          <div key={item.id} className="flex items-center py-4 border-b last:border-b-0">
            <img
              src={item.sticker.image_url}
              alt={item.type === 'preset' ? item.sticker.name : 'Custom Sticker'}
              className="w-20 h-20 object-cover rounded"
            />
            
            <div className="flex-1 ml-4">
              <h3 className="font-semibold">
                {item.type === 'preset' ? item.sticker.name : 'Custom Sticker'}
              </h3>
              {item.type === 'preset' && (
                <p className="text-sm text-gray-600">{item.sticker.description}</p>
              )}
            </div>
            
            <div className="flex items-center space-x-4">
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                className="w-16 border-gray-300 rounded-md shadow-sm"
              />
              
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-600 hover:text-red-800"
              >
                <Trash2 className="h-5 w-5" />
              </button>
              
              <div className="w-24 text-right">
                ${('price' in item.sticker ? item.sticker.price : 5.99) * item.quantity}
              </div>
            </div>
          </div>
        ))}
        
        <div className="flex justify-between items-center mt-6 pt-6 border-t">
          <span className="text-xl font-semibold">Total:</span>
          <span className="text-2xl font-bold">${total.toFixed(2)}</span>
        </div>
      </div>
      
      <div className="text-right">
        <button
          onClick={handleCheckout}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
