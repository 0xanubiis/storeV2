import React from 'react';
import { Package } from 'lucide-react';
import type { CustomerOrder } from '../../types/orders';

interface CustomerOrdersSectionProps {
  orders: CustomerOrder[];
}

export function CustomerOrdersSection({ orders }: CustomerOrdersSectionProps) {
  return (
    <div className="bg-black/40 backdrop-blur-sm border border-red-500/20 rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 mb-6">
        Customer Orders
      </h2>
      
      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="border border-red-500/20 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {order.firstName} {order.lastName}
                </h3>
                <p className="text-gray-400 text-sm">{order.email}</p>
                <p className="text-gray-400 text-sm">{order.phone}</p>
                <p className="text-gray-400 text-sm">{order.location}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-red-400">${order.total.toFixed(2)}</p>
                <p className="text-sm text-gray-400">
                  {new Date(order.date).toLocaleDateString()}
                </p>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                  ${order.status === 'completed' ? 'bg-green-400/10 text-green-400' :
                    order.status === 'pending' ? 'bg-yellow-400/10 text-yellow-400' :
                    order.status === 'processing' ? 'bg-blue-400/10 text-blue-400' :
                    'bg-red-400/10 text-red-400'
                  }`}>
                  {order.status}
                </span>
              </div>
            </div>
            
            <div className="space-y-2">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 bg-black/20 rounded-lg p-2">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-md" />
                  <div className="flex-1">
                    <p className="text-white font-medium">{item.name}</p>
                    <p className="text-gray-400 text-sm">
                      ${item.price.toFixed(2)} × {item.quantity}
                    </p>
                  </div>
                  <p className="text-red-400 font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}