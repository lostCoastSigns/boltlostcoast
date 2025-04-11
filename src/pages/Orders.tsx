import React from 'react';
import type { Order } from '../types';

const Orders = () => {
  const [orders, setOrders] = React.useState<Order[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // TODO: Fetch orders from Supabase
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (orders.length === 0) {
    return (
      <div className="max-w-4xl mx-auto text-center py-16">
        <h2 className="text-2xl font-semibold mb-4">No orders yet</h2>
        <p className="text-gray-600">Once you place an order, it will appear here.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Your Orders</h1>
      
      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold">Order #{order.id.slice(0, 8)}</h3>
                <p className="text-sm text-gray-600">
                  Placed on {new Date(order.created_at).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right">
                <span className="inline-block px-3 py-1 rounded-full text-sm capitalize" style={{
                  backgroundColor: order.status === 'delivered' ? 'rgb(220 252 231)' : 'rgb(254 249 195)',
                  color: order.status === 'delivered' ? 'rgb(22 163 74)' : 'rgb(161 98 7)'
                }}>
                  {order.status}
                </span>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Total Amount:</span>
                <span>${order.total}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Shipping Address:</span>
                <span>{order.shipping_address}</span>
              </div>
              {order.tracking_number && (
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Tracking Number:</span>
                  <span>{order.tracking_number}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
